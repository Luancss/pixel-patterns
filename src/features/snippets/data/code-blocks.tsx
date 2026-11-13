import type { Snippet } from "@/features/snippets/types";

export const codeBlockSnippets: Snippet[] = [
  {
    category: "tailwind",
    background: "bg-[#0a0a0c]",
    iconColor: "#fff",
    content: (
      <figure className="w-[460px] overflow-hidden rounded-xl border border-white/10 bg-[#0d1117] font-mono text-[13px] leading-6 shadow-2xl shadow-black/50">
        <figcaption className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2 font-sans text-xs text-zinc-400">
          <span className="rounded bg-blue-500/15 px-1.5 py-0.5 text-[10px] font-semibold text-blue-300">
            TS
          </span>
          src/lib/fetch-json.ts
          <span className="ml-auto text-zinc-600">10 lines</span>
        </figcaption>
        <pre className="overflow-x-auto py-3">
          <code className="grid">
            <span className="px-4">
              <span className="mr-4 inline-block w-4 select-none text-right text-zinc-600">
                1
              </span>
              <span className="text-[#ff7b72]">export async function</span>{" "}
              <span className="text-[#d2a8ff]">fetchJson</span>
              <span className="text-zinc-300">&lt;</span>
              <span className="text-[#ffa657]">T</span>
              <span className="text-zinc-300">&gt;(</span>
            </span>
            <span className="px-4">
              <span className="mr-4 inline-block w-4 select-none text-right text-zinc-600">
                2
              </span>
              <span className="text-zinc-300">{"  "}url: </span>
              <span className="text-[#ffa657]">string</span>
              <span className="text-zinc-300">,</span>
            </span>
            <span className="px-4">
              <span className="mr-4 inline-block w-4 select-none text-right text-zinc-600">
                3
              </span>
              <span className="text-zinc-300">{"  "}init?: </span>
              <span className="text-[#ffa657]">RequestInit</span>
            </span>
            <span className="px-4">
              <span className="mr-4 inline-block w-4 select-none text-right text-zinc-600">
                4
              </span>
              <span className="text-zinc-300">): </span>
              <span className="text-[#ffa657]">Promise</span>
              <span className="text-zinc-300">&lt;</span>
              <span className="text-[#ffa657]">T</span>
              <span className="text-zinc-300">&gt; {"{"}</span>
            </span>
            <span className="border-l-2 border-blue-400 bg-blue-500/10 px-4 pl-[14px]">
              <span className="mr-4 inline-block w-4 select-none text-right text-blue-300">
                5
              </span>
              <span className="text-[#ff7b72]">{"  "}const</span>
              <span className="text-zinc-300"> response = </span>
              <span className="text-[#ff7b72]">await</span>{" "}
              <span className="text-[#d2a8ff]">fetch</span>
              <span className="text-zinc-300">(url, init);</span>
            </span>
            <span className="px-4">
              <span className="mr-4 inline-block w-4 select-none text-right text-zinc-600">
                6
              </span>
              <span className="text-[#ff7b72]">{"  "}if</span>
              <span className="text-zinc-300"> (!response.ok) {"{"}</span>
            </span>
            <span className="px-4">
              <span className="mr-4 inline-block w-4 select-none text-right text-zinc-600">
                7
              </span>
              <span className="text-[#ff7b72]">{"    "}throw new</span>{" "}
              <span className="text-[#ffa657]">Error</span>
              <span className="text-zinc-300">(</span>
              <span className="text-[#a5d6ff]">
                `HTTP {"${"}response.status{"}"}`
              </span>
              <span className="text-zinc-300">);</span>
            </span>
            <span className="px-4">
              <span className="mr-4 inline-block w-4 select-none text-right text-zinc-600">
                8
              </span>
              <span className="text-zinc-300">{"  }"}</span>
            </span>
            <span className="px-4">
              <span className="mr-4 inline-block w-4 select-none text-right text-zinc-600">
                9
              </span>
              <span className="text-[#ff7b72]">{"  "}return</span>
              <span className="text-zinc-300"> response.</span>
              <span className="text-[#d2a8ff]">json</span>
              <span className="text-zinc-300">() </span>
              <span className="text-[#ff7b72]">as</span>{" "}
              <span className="text-[#ffa657]">Promise</span>
              <span className="text-zinc-300">&lt;</span>
              <span className="text-[#ffa657]">T</span>
              <span className="text-zinc-300">&gt;;</span>
            </span>
            <span className="px-4">
              <span className="mr-4 inline-block w-4 select-none text-right text-zinc-600">
                10
              </span>
              <span className="text-zinc-300">{"}"}</span>
            </span>
          </code>
        </pre>
      </figure>
    ),
  },
  {
    category: "css",
    background: "bg-gradient-to-br from-zinc-900 to-black",
    iconColor: "#fff",
    html: `
      <div class="term-51827" role="img" aria-label="Terminal running npm install">
        <div class="term-51827-bar">
          <span></span><span></span><span></span>
          <p>~/projects/pixel-patterns — zsh</p>
        </div>
        <pre class="term-51827-body"><span class="term-51827-prompt">➜</span> <span class="term-51827-dir">pixel-patterns</span> <span class="term-51827-branch">git:(main)</span> npm install
<span class="term-51827-muted">added 412 packages in 6s</span>
<span class="term-51827-ok">✔</span> 0 vulnerabilities

<span class="term-51827-prompt">➜</span> <span class="term-51827-dir">pixel-patterns</span> <span class="term-51827-branch">git:(main)</span> npm run dev
<span class="term-51827-muted">▲ Next.js 14.2.35</span>
  - Local: <span class="term-51827-link">http://localhost:3000</span>

<span class="term-51827-prompt">➜</span> <span class="term-51827-cursor"></span></pre>
      </div>
      <style>
        .term-51827 {
          width: 440px;
          overflow: hidden;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: #0b0b10;
          box-shadow: 0 24px 60px -20px rgba(0, 0, 0, 0.8);
          font-family: ui-monospace, "SF Mono", Menlo, monospace;
        }
        .term-51827-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          background: rgba(255, 255, 255, 0.04);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .term-51827-bar span {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ff5f57;
        }
        .term-51827-bar span:nth-child(2) { background: #febc2e; }
        .term-51827-bar span:nth-child(3) { background: #28c840; }
        .term-51827-bar p {
          margin: 0 auto;
          padding-right: 52px;
          color: #71717a;
          font: 500 12px/1 system-ui, sans-serif;
        }
        .term-51827-body {
          margin: 0;
          padding: 16px;
          color: #e4e4e7;
          font-size: 12.5px;
          line-height: 1.7;
        }
        .term-51827-prompt { color: #4ade80; font-weight: 700; }
        .term-51827-dir { color: #22d3ee; font-weight: 600; }
        .term-51827-branch { color: #c084fc; }
        .term-51827-muted { color: #71717a; }
        .term-51827-ok { color: #4ade80; }
        .term-51827-link { color: #60a5fa; text-decoration: underline; }
        .term-51827-cursor {
          display: inline-block;
          width: 8px;
          height: 15px;
          vertical-align: -2px;
          background: #e4e4e7;
          animation: term-51827-blink 1s steps(1) infinite;
        }
        @keyframes term-51827-blink { 50% { opacity: 0; } }
        @media (prefers-reduced-motion: reduce) {
          .term-51827-cursor { animation: none; }
        }
      </style>
    `,
  },
  {
    category: "css",
    background: "bg-gradient-to-br from-[#0f172a] to-black",
    iconColor: "#fff",
    html: `
      <div class="pm-73015">
        <input type="radio" name="pm-73015" id="pm-73015-npm" checked>
        <input type="radio" name="pm-73015" id="pm-73015-pnpm">
        <input type="radio" name="pm-73015" id="pm-73015-yarn">
        <input type="radio" name="pm-73015" id="pm-73015-bun">
        <div class="pm-73015-tabs" role="tablist" aria-label="Package manager">
          <label for="pm-73015-npm">npm</label>
          <label for="pm-73015-pnpm">pnpm</label>
          <label for="pm-73015-yarn">yarn</label>
          <label for="pm-73015-bun">bun</label>
        </div>
        <pre class="pm-73015-panel pm-73015-npm"><span>$</span> npm install @tanstack/react-query</pre>
        <pre class="pm-73015-panel pm-73015-pnpm"><span>$</span> pnpm add @tanstack/react-query</pre>
        <pre class="pm-73015-panel pm-73015-yarn"><span>$</span> yarn add @tanstack/react-query</pre>
        <pre class="pm-73015-panel pm-73015-bun"><span>$</span> bun add @tanstack/react-query</pre>
      </div>
      <style>
        .pm-73015 {
          width: 420px;
          overflow: hidden;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: #0b0d14;
          font-family: system-ui, sans-serif;
        }
        .pm-73015 input { position: absolute; opacity: 0; pointer-events: none; }
        .pm-73015-tabs {
          display: flex;
          gap: 4px;
          padding: 6px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.03);
        }
        .pm-73015-tabs label {
          padding: 6px 12px;
          border-radius: 8px;
          color: #94a3b8;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .pm-73015-tabs label:hover { color: #e2e8f0; }
        .pm-73015-panel {
          display: none;
          margin: 0;
          padding: 18px 16px;
          color: #e2e8f0;
          font: 13px/1.6 ui-monospace, Menlo, monospace;
        }
        .pm-73015-panel span { color: #64748b; user-select: none; }
        #pm-73015-npm:checked ~ .pm-73015-tabs label[for="pm-73015-npm"],
        #pm-73015-pnpm:checked ~ .pm-73015-tabs label[for="pm-73015-pnpm"],
        #pm-73015-yarn:checked ~ .pm-73015-tabs label[for="pm-73015-yarn"],
        #pm-73015-bun:checked ~ .pm-73015-tabs label[for="pm-73015-bun"] {
          background: rgba(99, 102, 241, 0.18);
          color: #c7d2fe;
        }
        #pm-73015-npm:checked ~ .pm-73015-npm,
        #pm-73015-pnpm:checked ~ .pm-73015-pnpm,
        #pm-73015-yarn:checked ~ .pm-73015-yarn,
        #pm-73015-bun:checked ~ .pm-73015-bun { display: block; }
        .pm-73015 input:focus-visible ~ .pm-73015-tabs { outline: 2px solid #6366f1; outline-offset: -2px; }
      </style>
    `,
  },
  {
    category: "tailwind",
    background: "bg-[#0a0a0c]",
    iconColor: "#fff",
    content: (
      <div className="w-[460px] overflow-hidden rounded-xl border border-white/10 bg-[#0d1117] font-mono text-[12.5px] leading-6">
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-2 font-sans text-xs">
          <span className="text-zinc-300">src/config/site.ts</span>
          <span className="ml-auto font-medium text-emerald-400">+3</span>
          <span className="font-medium text-red-400">−2</span>
        </div>
        <div className="py-2">
          <p className="flex px-4 text-zinc-500">
            <span className="w-8 select-none">12</span>
            <span className="w-4 select-none"> </span>
            export const siteConfig = {"{"}
          </p>
          <p className="flex bg-red-500/10 px-4 text-red-200">
            <span className="w-8 select-none text-red-400/60">13</span>
            <span className="w-4 select-none text-red-400">−</span>
            {"  "}name: &quot;Pixel UI&quot;,
          </p>
          <p className="flex bg-red-500/10 px-4 text-red-200">
            <span className="w-8 select-none text-red-400/60">14</span>
            <span className="w-4 select-none text-red-400">−</span>
            {"  "}theme: &quot;light&quot;,
          </p>
          <p className="flex bg-emerald-500/10 px-4 text-emerald-200">
            <span className="w-8 select-none text-emerald-400/60">13</span>
            <span className="w-4 select-none text-emerald-400">+</span>
            {"  "}name: &quot;Pixel Patterns&quot;,
          </p>
          <p className="flex bg-emerald-500/10 px-4 text-emerald-200">
            <span className="w-8 select-none text-emerald-400/60">14</span>
            <span className="w-4 select-none text-emerald-400">+</span>
            {"  "}theme: &quot;dark&quot;,
          </p>
          <p className="flex bg-emerald-500/10 px-4 text-emerald-200">
            <span className="w-8 select-none text-emerald-400/60">15</span>
            <span className="w-4 select-none text-emerald-400">+</span>
            {"  "}locale: &quot;en-US&quot;,
          </p>
          <p className="flex px-4 text-zinc-500">
            <span className="w-8 select-none">16</span>
            <span className="w-4 select-none"> </span>
            {"};"}
          </p>
        </div>
      </div>
    ),
  },
  {
    category: "tailwind",
    background: "bg-[#0a0a0c]",
    iconColor: "#fff",
    content: (
      <nav
        aria-label="Project files"
        className="w-64 rounded-xl border border-white/10 bg-zinc-950 p-2 text-[13px] text-zinc-400"
      >
        <p className="px-2 pb-2 pt-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
          Explorer
        </p>
        <ul className="space-y-0.5">
          <li className="flex items-center gap-2 rounded-md px-2 py-1 text-zinc-200">
            <span className="text-zinc-500">▾</span>
            <span className="text-amber-400">■</span> src
          </li>
          <li className="flex items-center gap-2 rounded-md py-1 pl-6 pr-2 text-zinc-200">
            <span className="text-zinc-500">▾</span>
            <span className="text-amber-400">■</span> features
          </li>
          <li className="flex items-center gap-2 rounded-md py-1 pl-10 pr-2">
            <span className="text-zinc-500">▸</span>
            <span className="text-amber-400/70">■</span> palettes
          </li>
          <li className="flex items-center gap-2 rounded-md py-1 pl-10 pr-2">
            <span className="text-zinc-500">▸</span>
            <span className="text-amber-400/70">■</span> snippets
          </li>
          <li className="flex items-center gap-2 rounded-md py-1 pl-6 pr-2 text-zinc-200">
            <span className="text-zinc-500">▾</span>
            <span className="text-amber-400">■</span> lib
          </li>
          <li
            aria-current="page"
            className="flex items-center gap-2 rounded-md bg-blue-500/15 py-1 pl-14 pr-2 text-blue-100 ring-1 ring-inset ring-blue-500/30"
          >
            <span className="rounded bg-blue-500/30 px-1 text-[9px] font-bold text-blue-200">
              TS
            </span>
            utils.ts
            <span className="ml-auto size-1.5 rounded-full bg-amber-400" />
          </li>
          <li className="flex items-center gap-2 rounded-md py-1 pl-14 pr-2 hover:bg-white/5">
            <span className="rounded bg-blue-500/20 px-1 text-[9px] font-bold text-blue-300">
              TS
            </span>
            download-file.ts
          </li>
          <li className="flex items-center gap-2 rounded-md py-1 pl-6 pr-2 hover:bg-white/5">
            <span className="rounded bg-zinc-700 px-1 text-[9px] font-bold text-zinc-300">
              {"{}"}
            </span>
            package.json
          </li>
        </ul>
      </nav>
    ),
  },
  {
    category: "tailwind",
    background: "bg-[#0a0a0c]",
    iconColor: "#fff",
    content: (
      <div className="w-[440px] overflow-hidden rounded-xl border border-white/10 bg-zinc-950 text-sm">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
          <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 font-mono text-xs font-bold text-emerald-300">
            GET
          </span>
          <span className="truncate font-mono text-xs text-zinc-300">
            /api/v1/users/42
          </span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-emerald-400">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            200 OK
          </span>
          <span className="text-xs tabular-nums text-zinc-500">142 ms</span>
        </div>
        <pre className="overflow-x-auto p-4 font-mono text-[12.5px] leading-6 text-zinc-300">
          {"{\n"}
          {"  "}
          <span className="text-sky-300">&quot;id&quot;</span>:{" "}
          <span className="text-amber-300">42</span>,{"\n"}
          {"  "}
          <span className="text-sky-300">&quot;name&quot;</span>:{" "}
          <span className="text-emerald-300">&quot;Ada Lovelace&quot;</span>,
          {"\n"}
          {"  "}
          <span className="text-sky-300">&quot;roles&quot;</span>: [
          <span className="text-emerald-300">&quot;admin&quot;</span>,{" "}
          <span className="text-emerald-300">&quot;editor&quot;</span>],{"\n"}
          {"  "}
          <span className="text-sky-300">&quot;verified&quot;</span>:{" "}
          <span className="text-violet-300">true</span>,{"\n"}
          {"  "}
          <span className="text-sky-300">&quot;lastLogin&quot;</span>:{" "}
          <span className="text-violet-300">null</span>
          {"\n}"}
        </pre>
      </div>
    ),
  },
  {
    category: "tailwind",
    background: "bg-gradient-to-br from-red-950/40 to-black",
    iconColor: "#fff",
    content: (
      <div
        role="alert"
        className="w-[460px] overflow-hidden rounded-xl border border-red-500/30 bg-zinc-950 font-mono text-[12.5px]"
      >
        <div className="flex items-start gap-3 border-b border-red-500/20 bg-red-500/10 px-4 py-3 font-sans">
          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white">
            !
          </span>
          <div>
            <p className="text-sm font-semibold text-red-200">
              TypeError: Cannot read properties of undefined (reading
              &apos;map&apos;)
            </p>
            <p className="mt-0.5 text-xs text-red-300/70">
              Unhandled runtime error · 1 of 1
            </p>
          </div>
        </div>
        <ol className="space-y-1 p-4 leading-6">
          <li className="rounded-md bg-red-500/10 px-2 text-red-100">
            at UserList{" "}
            <span className="text-red-300/60">(user-list.tsx:18:22)</span>
          </li>
          <li className="px-2 text-zinc-400">
            at renderWithHooks{" "}
            <span className="text-zinc-600">
              (react-dom.development.js:16305)
            </span>
          </li>
          <li className="px-2 text-zinc-400">
            at mountIndeterminateComponent{" "}
            <span className="text-zinc-600">
              (react-dom.development.js:20074)
            </span>
          </li>
        </ol>
        <p className="border-t border-white/5 px-4 py-2.5 font-sans text-xs text-zinc-400">
          Tip: guard optional data with{" "}
          <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-zinc-200">
            users?.map(...) ?? []
          </code>
        </p>
      </div>
    ),
  },
  {
    category: "css",
    background: "bg-gradient-to-br from-zinc-900 to-zinc-950",
    iconColor: "#fff",
    html: `
      <p class="inline-41562">
        Run <code>npm run dev</code> and open <code>localhost:3000</code>.
        Press <kbd>⌘</kbd> <kbd>K</kbd> to search, or <kbd>Shift</kbd> + <kbd>?</kbd>
        for all shortcuts. Config lives in <code class="inline-41562-path">next.config.mjs</code>.
      </p>
      <style>
        .inline-41562 {
          max-width: 400px;
          margin: 0;
          color: #a1a1aa;
          font: 15px/1.9 system-ui, sans-serif;
        }
        .inline-41562 code {
          padding: 2px 6px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.08);
          color: #f4f4f5;
          font: 0.86em ui-monospace, Menlo, monospace;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
        }
        .inline-41562 .inline-41562-path {
          background: rgba(52, 211, 153, 0.12);
          color: #6ee7b7;
          box-shadow: inset 0 0 0 1px rgba(52, 211, 153, 0.25);
        }
        .inline-41562 kbd {
          display: inline-block;
          min-width: 22px;
          padding: 1px 6px;
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: linear-gradient(#27272a, #18181b);
          color: #e4e4e7;
          font: 600 12px/20px system-ui, sans-serif;
          text-align: center;
          box-shadow: 0 2px 0 rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }
      </style>
    `,
  },
  {
    category: "css",
    background: "bg-gradient-to-br from-indigo-950/60 to-black",
    iconColor: "#fff",
    html: `
      <div class="compare-28461">
        <section>
          <header><span class="compare-28461-bad">✕</span> Avoid</header>
          <pre>useEffect(() => {
  setTotal(
    items.reduce(sum, 0)
  );
}, [items]);</pre>
        </section>
        <section>
          <header><span class="compare-28461-good">✓</span> Prefer</header>
          <pre>const total = useMemo(
  () => items.reduce(sum, 0),
  [items]
);</pre>
        </section>
      </div>
      <style>
        .compare-28461 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          width: 460px;
          font-family: system-ui, sans-serif;
        }
        .compare-28461 section {
          overflow: hidden;
          border-radius: 12px;
          border: 1px solid rgba(248, 113, 113, 0.3);
          background: #0f0a0c;
        }
        .compare-28461 section + section {
          border-color: rgba(52, 211, 153, 0.3);
          background: #08100d;
        }
        .compare-28461 header {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          color: #e4e4e7;
          font-size: 12px;
          font-weight: 600;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .compare-28461 header span {
          display: grid;
          place-items: center;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          font-size: 11px;
        }
        .compare-28461-bad { background: rgba(248, 113, 113, 0.2); color: #fca5a5; }
        .compare-28461-good { background: rgba(52, 211, 153, 0.2); color: #6ee7b7; }
        .compare-28461 pre {
          margin: 0;
          padding: 12px;
          color: #d4d4d8;
          font: 12px/1.7 ui-monospace, Menlo, monospace;
        }
      </style>
    `,
  },
];
