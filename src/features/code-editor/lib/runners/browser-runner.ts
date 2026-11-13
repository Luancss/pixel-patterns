import type {
  OutputLine,
  OutputStream,
  RunOutcome,
} from "@/features/code-editor/types";

export const BROWSER_RUN_TIMEOUT_MS = 8000;

/**
 * Runs inside a dedicated Web Worker: no DOM, no access to the page, and the
 * worker is terminated as soon as the program settles, fails or times out.
 * Kept as a plain ES5 string so the bundler never rewrites it.
 */
const WORKER_SOURCE = String.raw`
"use strict";
var nativeSetTimeout = self.setTimeout.bind(self);
var nativeClearTimeout = self.clearTimeout.bind(self);
var nativeSetInterval = self.setInterval.bind(self);
var nativeClearInterval = self.clearInterval.bind(self);
var nativeFetch = self.fetch ? self.fetch.bind(self) : null;
var pendingTasks = new Set();
var mainFinished = false;
var finished = false;
var exitCode = 0;
var stdinLines = [];
var fileName = "main.js";
// new AsyncFunction(body) prepends two lines before the user's code.
var FUNCTION_LINE_OFFSET = 2;
var USER_FRAME = /(?:<anonymous>|> Function|> eval):(\d+):(\d+)/;

function quote(text) {
  return "'" + text.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\n/g, "\\n") + "'";
}

function inspect(value, depth, seen) {
  if (value === null) return "null";
  if (value === undefined) return "undefined";
  var type = typeof value;
  if (type === "string") return depth === 0 ? value : quote(value);
  if (type === "number" || type === "boolean") return String(value);
  if (type === "bigint") return String(value) + "n";
  if (type === "symbol") return value.toString();
  if (type === "function") return "[Function: " + (value.name || "(anonymous)") + "]";
  if (value instanceof Error) return value.stack || value.name + ": " + value.message;
  if (value instanceof Date) return value.toISOString();
  if (value instanceof RegExp) return value.toString();
  if (seen.indexOf(value) !== -1) return "[Circular]";
  if (depth > 3) return Array.isArray(value) ? "[Array]" : "[Object]";
  var next = seen.concat([value]);
  var render = function (item) { return inspect(item, depth + 1, next); };
  if (Array.isArray(value)) {
    return value.length ? "[ " + value.map(render).join(", ") + " ]" : "[]";
  }
  if (value instanceof Map) {
    var entries = [];
    value.forEach(function (item, key) { entries.push(render(key) + " => " + render(item)); });
    return "Map(" + value.size + ") {" + (entries.length ? " " + entries.join(", ") + " " : "") + "}";
  }
  if (value instanceof Set) {
    var items = [];
    value.forEach(function (item) { items.push(render(item)); });
    return "Set(" + value.size + ") {" + (items.length ? " " + items.join(", ") + " " : "") + "}";
  }
  var keys = Object.keys(value);
  var proto = Object.getPrototypeOf(value);
  var name = proto && proto.constructor && proto.constructor !== Object ? proto.constructor.name + " " : "";
  if (!keys.length) return name + "{}";
  return name + "{ " + keys.map(function (key) {
    var label = /^[A-Za-z_$][\w$]*$/.test(key) ? key : quote(key);
    return label + ": " + render(value[key]);
  }).join(", ") + " }";
}

function format(args) {
  var values = Array.prototype.slice.call(args);
  var first = values[0];
  if (typeof first === "string" && /%[sdifoOjc%]/.test(first)) {
    values.shift();
    first = first.replace(/%([sdifoOjc%])/g, function (match, token) {
      if (token === "%") return "%";
      if (!values.length) return match;
      var value = values.shift();
      if (token === "s") return typeof value === "string" ? value : inspect(value, 1, []);
      if (token === "d" || token === "i") return String(parseInt(value, 10));
      if (token === "f") return String(parseFloat(value));
      if (token === "j") { try { return JSON.stringify(value); } catch (error) { return "[Circular]"; } }
      if (token === "c") return "";
      return inspect(value, 1, []);
    });
    values.unshift(first);
  }
  return values.map(function (value) { return inspect(value, 0, []); }).join(" ");
}

function write(stream, args) {
  if (finished) return;
  self.postMessage({ type: "output", stream: stream, text: format(args) });
}

function finish(code) {
  if (finished) return;
  finished = true;
  self.postMessage({ type: "done", exitCode: code });
}

function formatError(error) {
  if (!(error instanceof Error)) return "Uncaught " + inspect(error, 1, []);
  var frames = String(error.stack || "").split("\n").map(function (line) {
    var position = USER_FRAME.exec(line);
    if (!position) return null;
    var caller = /^\s*at (?:async )?([\w$.<>]+) \(/.exec(line);
    var name = caller && caller[1] !== "eval" && caller[1] !== "anonymous" ? caller[1] : null;
    var location = fileName + ":" + (Number(position[1]) - FUNCTION_LINE_OFFSET) + ":" + position[2];
    return "    at " + (name ? name + " (" + location + ")" : location);
  }).filter(Boolean);
  return [error.name + ": " + error.message].concat(frames).join("\n");
}

function reportError(error) {
  exitCode = 1;
  write("stderr", [formatError(error)]);
}

function settleIfIdle() {
  if (!mainFinished || pendingTasks.size) return;
  nativeSetTimeout(function () {
    if (!pendingTasks.size) finish(exitCode);
  }, 0);
}

["log", "info", "debug", "trace", "table", "dir"].forEach(function (method) {
  console[method] = function () { write("stdout", arguments); };
});
["warn", "error", "assert"].forEach(function (method) {
  console[method] = method === "assert"
    ? function (condition) {
        if (!condition) write("stderr", ["Assertion failed"].concat(Array.prototype.slice.call(arguments, 1)));
      }
    : function () { write("stderr", arguments); };
});
console.clear = function () {};

self.setTimeout = function (callback, delay) {
  var args = Array.prototype.slice.call(arguments, 2);
  var id = nativeSetTimeout(function () {
    pendingTasks.delete(id);
    try { callback.apply(null, args); } catch (error) { reportError(error); }
    settleIfIdle();
  }, delay);
  pendingTasks.add(id);
  return id;
};
self.clearTimeout = function (id) {
  pendingTasks.delete(id);
  nativeClearTimeout(id);
  settleIfIdle();
};
self.setInterval = function (callback, delay) {
  var args = Array.prototype.slice.call(arguments, 2);
  var id = nativeSetInterval(function () {
    try { callback.apply(null, args); } catch (error) { reportError(error); }
  }, delay);
  pendingTasks.add(id);
  return id;
};
self.clearInterval = function (id) {
  pendingTasks.delete(id);
  nativeClearInterval(id);
  settleIfIdle();
};
if (nativeFetch) {
  self.fetch = function () {
    var token = {};
    pendingTasks.add(token);
    return nativeFetch.apply(null, arguments).finally(function () {
      pendingTasks.delete(token);
      settleIfIdle();
    });
  };
}
self.prompt = function (message) {
  if (message !== undefined) write("stdout", [message]);
  return stdinLines.length ? stdinLines.shift() : null;
};

self.addEventListener("unhandledrejection", function (event) {
  event.preventDefault();
  reportError(event.reason);
  finish(1);
});

self.onmessage = function (event) {
  stdinLines = event.data.stdin ? event.data.stdin.split(/\r?\n/) : [];
  fileName = event.data.fileName || fileName;
  var AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
  var program;
  try {
    program = new AsyncFunction(event.data.code);
  } catch (error) {
    reportError(error);
    finish(1);
    return;
  }
  program().then(
    function () { mainFinished = true; settleIfIdle(); },
    function (error) { reportError(error); finish(1); }
  );
};
`;

type WorkerMessage =
  | { type: "output"; stream: Exclude<OutputStream, "system">; text: string }
  | { type: "done"; exitCode: number };

type BrowserRunRequest = {
  code: string;
  fileName: string;
  stdin: string;
  signal: AbortSignal;
  timeoutMs?: number;
};

export function runInBrowser({
  code,
  fileName,
  stdin,
  signal,
  timeoutMs = BROWSER_RUN_TIMEOUT_MS,
}: BrowserRunRequest): Promise<RunOutcome> {
  return new Promise((resolve, reject) => {
    if (signal.aborted) {
      reject(new DOMException("Execution cancelled", "AbortError"));
      return;
    }

    const workerUrl = URL.createObjectURL(
      new Blob([WORKER_SOURCE], { type: "text/javascript" })
    );
    const worker = new Worker(workerUrl);
    const lines: OutputLine[] = [];

    const cleanup = () => {
      clearTimeout(timeout);
      signal.removeEventListener("abort", handleAbort);
      worker.terminate();
      URL.revokeObjectURL(workerUrl);
    };

    const settle = (outcome: RunOutcome) => {
      cleanup();
      resolve(outcome);
    };

    function handleAbort() {
      cleanup();
      reject(new DOMException("Execution cancelled", "AbortError"));
    }

    const timeout = setTimeout(() => {
      settle({
        exitCode: null,
        lines: [
          ...lines,
          {
            stream: "system",
            text: `Execution stopped after ${timeoutMs / 1000}s. Check for infinite loops or uncleared intervals.`,
          },
        ],
      });
    }, timeoutMs);

    worker.onmessage = ({ data }: MessageEvent<WorkerMessage>) => {
      if (data.type === "output") {
        lines.push({ stream: data.stream, text: data.text });
      } else {
        settle({ exitCode: data.exitCode, lines });
      }
    };

    worker.onerror = (event) => {
      event.preventDefault();
      lines.push({ stream: "stderr", text: event.message || "Unknown error" });
      settle({ exitCode: 1, lines });
    };

    signal.addEventListener("abort", handleAbort);
    worker.postMessage({ code, fileName, stdin });
  });
}
