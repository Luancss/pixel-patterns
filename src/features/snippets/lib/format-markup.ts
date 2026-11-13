type TextNode = { type: "text"; value: string };

type CommentNode = { type: "comment"; value: string };

type ElementNode = {
  type: "element";
  tag: string;
  openTag: string;
  children: MarkupNode[];
  closeTag: string;
  rawContent?: string;
};

type MarkupNode = TextNode | CommentNode | ElementNode;

const INDENT = "  ";

const VOID_ELEMENTS = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "source",
  "track",
  "wbr",
]);

const RAW_TEXT_ELEMENTS = new Set(["script", "style"]);

const PARAGRAPH_CLOSING_ELEMENTS = new Set([
  "address",
  "article",
  "aside",
  "blockquote",
  "details",
  "dialog",
  "div",
  "dl",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "hr",
  "main",
  "menu",
  "nav",
  "ol",
  "p",
  "pre",
  "section",
  "table",
  "ul",
]);

const PARAGRAPH_SCOPE_BOUNDARIES = new Set([
  "button",
  "caption",
  "svg",
  "table",
  "td",
  "template",
  "th",
]);

const PREFORMATTED_ELEMENTS = new Set(["pre", "textarea"]);

const BLOCK_ELEMENTS = new Set([
  "address",
  "article",
  "aside",
  "blockquote",
  "details",
  "dialog",
  "dd",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hr",
  "li",
  "main",
  "nav",
  "ol",
  "p",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "tr",
  "ul",
]);

const HIDDEN_ELEMENTS = new Set([
  "link",
  "meta",
  "script",
  "style",
  "template",
]);

const SVG_TEXT_ELEMENTS = new Set(["text", "tspan", "textPath"]);

const INLINE_DISPLAY_CLASSES = new Set([
  "inline",
  "inline-block",
  "inline-flex",
  "inline-grid",
  "inline-table",
]);

const BLOCK_DISPLAY_CLASSES = new Set(["block", "flex", "grid", "table"]);

const WHITESPACE_INSENSITIVE_CLASSES = new Set([
  "flex",
  "inline-flex",
  "grid",
  "inline-grid",
]);

const TOKEN_PATTERN =
  /<!--[\s\S]*?-->|<\/[a-zA-Z][\w:-]*\s*>|<[a-zA-Z][\w:-]*(?:\s+[^\s"'>/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"'>]+))?)*\s*\/?>|[^<]+|</g;

const ENTITIES: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#x27;": "'",
  "&#39;": "'",
};

function getTagName(tag: string) {
  return tag.match(/^<\/?([a-zA-Z][\w:-]*)/)?.[1] ?? "";
}

function getClassTokens(openTag: string) {
  const classValue = openTag.match(/\sclass\s*=\s*(?:"([^"]*)"|'([^']*)')/);
  return (classValue?.[1] ?? classValue?.[2] ?? "").split(/\s+/);
}

function normalizeTag(tag: string) {
  return tag.replace(/("[^"]*"|'[^']*')|\s+/g, (match, quoted) =>
    quoted ? quoted : " "
  );
}

function decodeEntities(text: string) {
  return text.replace(/&(?:amp|lt|gt|quot|#x27|#39);/g, (entity) => {
    return ENTITIES[entity] ?? entity;
  });
}

function closeOpenParagraph(stack: ElementNode[]) {
  for (let index = stack.length - 1; index > 0; index--) {
    const tag = stack[index]?.tag;
    if (tag === "p") {
      stack.length = index;
      return;
    }
    if (tag && PARAGRAPH_SCOPE_BOUNDARIES.has(tag)) return;
  }
}

function parse(markup: string): MarkupNode[] {
  const root: ElementNode = {
    type: "element",
    tag: "#root",
    openTag: "",
    children: [],
    closeTag: "",
  };
  const stack: ElementNode[] = [root];
  const pattern = new RegExp(TOKEN_PATTERN.source, "g");
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(markup))) {
    const token = match[0];

    if (token.startsWith("<!--")) {
      stack[stack.length - 1]?.children.push({ type: "comment", value: token });
    } else if (token.startsWith("</")) {
      const tag = getTagName(token).toLowerCase();
      const index = stack.findLastIndex((node) => node.tag === tag);
      const element = stack[index];
      if (index > 0 && element) {
        element.closeTag = token.trim();
        stack.length = index;
      } else {
        stack[stack.length - 1]?.children.push({
          type: "comment",
          value: token,
        });
      }
    } else if (/^<[a-zA-Z]/.test(token)) {
      const tag = getTagName(token);
      const lowerTag = tag.toLowerCase();
      if (PARAGRAPH_CLOSING_ELEMENTS.has(lowerTag)) closeOpenParagraph(stack);
      const parent = stack[stack.length - 1] ?? root;
      const element: ElementNode = {
        type: "element",
        tag: lowerTag,
        openTag: normalizeTag(token),
        children: [],
        closeTag: "",
      };
      parent.children.push(element);

      if (
        RAW_TEXT_ELEMENTS.has(lowerTag) ||
        PREFORMATTED_ELEMENTS.has(lowerTag)
      ) {
        const closing = new RegExp(`</${lowerTag}\\s*>`, "i");
        const rest = markup.slice(pattern.lastIndex);
        const end = rest.search(closing);
        const content = end === -1 ? rest : rest.slice(0, end);
        element.rawContent = RAW_TEXT_ELEMENTS.has(lowerTag)
          ? decodeEntities(content)
          : content;
        element.closeTag = `</${tag}>`;
        pattern.lastIndex +=
          end === -1
            ? rest.length
            : end + (rest.slice(end).match(closing)?.[0].length ?? 0);
      } else if (!token.endsWith("/>") && !VOID_ELEMENTS.has(lowerTag)) {
        stack.push(element);
      }
    } else {
      stack[stack.length - 1]?.children.push({ type: "text", value: token });
    }
  }

  return root.children;
}

const HTML_WHITESPACE = /[ \t\n\r\f]+/g;

function collapseWhitespace(text: string) {
  return text.replace(HTML_WHITESPACE, " ");
}

function isWhitespace(node: MarkupNode) {
  return node.type === "text" && /^[ \t\n\r\f]*$/.test(node.value);
}

function isInlineLevel(node: ElementNode, insideSvg: boolean) {
  if (insideSvg || HIDDEN_ELEMENTS.has(node.tag)) return false;

  const classes = getClassTokens(node.openTag);
  if (classes.some((token) => INLINE_DISPLAY_CLASSES.has(token))) return true;
  if (classes.some((token) => BLOCK_DISPLAY_CLASSES.has(token))) return false;

  return !BLOCK_ELEMENTS.has(node.tag);
}

function isTransparent(node: MarkupNode) {
  return (
    node.type === "comment" ||
    (node.type === "element" && HIDDEN_ELEMENTS.has(node.tag))
  );
}

function preservesWhitespace(node: ElementNode) {
  return (
    getClassTokens(node.openTag).some((token) =>
      token.startsWith("whitespace-pre")
    ) || /white-space\s*:\s*pre/i.test(node.openTag)
  );
}

function canBreakChildren(
  node: ElementNode,
  children: MarkupNode[],
  insideSvg: boolean
) {
  if (children.some((child) => child.type === "text" && !isWhitespace(child))) {
    return false;
  }

  const svgContext = insideSvg || node.tag === "svg";
  if (svgContext) return !SVG_TEXT_ELEMENTS.has(node.tag);

  if (
    getClassTokens(node.openTag).some((token) =>
      WHITESPACE_INSENSITIVE_CLASSES.has(token)
    )
  ) {
    return true;
  }

  const isBlockContainer =
    node.tag === "#root" || !isInlineLevel(node, insideSvg);
  const isBlockLevel = (element: ElementNode | null) =>
    element !== null && !isInlineLevel(element, false);

  let previous: ElementNode | null = null;
  let gapHasWhitespace = false;

  const isGapSafe = (left: ElementNode | null, right: ElementNode | null) =>
    gapHasWhitespace ||
    isBlockLevel(left) ||
    isBlockLevel(right) ||
    ((left === null || right === null) && isBlockContainer);

  for (const child of children) {
    if (isWhitespace(child)) {
      gapHasWhitespace = true;
      continue;
    }
    if (isTransparent(child) || child.type !== "element") continue;
    if (!isGapSafe(previous, child)) return false;

    previous = child;
    gapHasWhitespace = false;
  }

  return isGapSafe(previous, null);
}

function dedent(content: string) {
  const lines = content.replace(/\t/g, INDENT).split("\n");
  while (lines.length && lines[0]?.trim() === "") lines.shift();
  while (lines.length && lines[lines.length - 1]?.trim() === "") lines.pop();

  const indentation = Math.min(
    ...lines
      .filter((line) => line.trim() !== "")
      .map((line) => line.match(/^ */)?.[0].length ?? 0)
  );

  return lines.map((line) =>
    line.trim() === ""
      ? ""
      : line.slice(Number.isFinite(indentation) ? indentation : 0).trimEnd()
  );
}

function printInline(node: MarkupNode, keepWhitespace = false): string {
  if (node.type === "comment") return node.value;
  if (node.type === "text") {
    return keepWhitespace ? node.value : collapseWhitespace(node.value);
  }
  if (node.rawContent !== undefined) {
    return `${node.openTag}${node.rawContent}${node.closeTag}`;
  }

  const preserve = keepWhitespace || preservesWhitespace(node);
  return `${node.openTag}${node.children
    .map((child) => printInline(child, preserve))
    .join("")}${node.closeTag}`;
}

function printNode(
  node: MarkupNode,
  depth: number,
  insideSvg: boolean
): string[] {
  const indent = INDENT.repeat(depth);

  if (node.type === "comment") return [indent + node.value];
  if (node.type === "text") {
    const text = collapseWhitespace(node.value).trim();
    return text ? [indent + text] : [];
  }

  if (node.rawContent !== undefined) {
    if (PREFORMATTED_ELEMENTS.has(node.tag)) {
      return [indent + printInline(node)];
    }

    const content = dedent(node.rawContent);
    if (content.length === 0) return [indent + node.openTag + node.closeTag];

    return [
      indent + node.openTag,
      ...content.map((line) => (line ? INDENT.repeat(depth + 1) + line : "")),
      indent + node.closeTag,
    ];
  }

  const children = node.children;
  if (children.every(isWhitespace)) {
    const keepsSpace = children.length > 0 && isInlineLevel(node, insideSvg);
    return [
      indent + (keepsSpace ? printInline(node) : node.openTag + node.closeTag),
    ];
  }

  const svgContext = insideSvg || node.tag === "svg";
  if (
    preservesWhitespace(node) ||
    !canBreakChildren(node, children, insideSvg)
  ) {
    return [indent + printInline(node)];
  }

  return [
    indent + node.openTag,
    ...children.flatMap((child) => printNode(child, depth + 1, svgContext)),
    ...(node.closeTag ? [indent + node.closeTag] : []),
  ];
}

export function formatMarkup(markup: string) {
  const root: ElementNode = {
    type: "element",
    tag: "#root",
    openTag: "",
    children: parse(markup),
    closeTag: "",
  };

  if (!canBreakChildren(root, root.children, false)) {
    return printInline(root).trim();
  }

  return root.children
    .flatMap((child) => printNode(child, 0, false))
    .join("\n");
}
