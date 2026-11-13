import { AlertCircleIcon, CircleCheck, CircleX } from "lucide-react";

import { CodeBlock } from "@/features/code-highlight/components/code-block";
import { CodeView } from "@/features/code-highlight/components/code-view";
import { getHighlightTheme } from "@/features/code-highlight/config/highlight-themes";

const EXAMPLE_THEME = getHighlightTheme("coldarkDark");

const TAILWIND_TEMPLATE = `{
  category: "tailwind",
  background: "bg-green-950 or bg-[#212121]" /* Use one of these ways */,
  iconColor: "#fff" /* #fff or #000 */,
  content: (
    /* Add your code here */
  ),
},`;

const CSS_TEMPLATE = `{
  category: "css",
  background: "bg-green-950 or bg-[#212121]" /* Use one of these ways */,
  iconColor: "#fff" /* #fff or #000 */,
  html: \`
    /* Add your html here */
    <style>
      /* Add your css here */
    </style>
  \`,
},`;

const CONFLICTING_CLASS_EXAMPLE = `<button>Click me</button>`;

const UNIQUE_CLASS_EXAMPLE = `<button class="button83501">Click me</button>`;

function ExampleCodeBlock({ code }: { code: string }) {
  return (
    <CodeView
      code={code}
      language="markup"
      theme={EXAMPLE_THEME}
      className="my-2 flex-1 rounded-md"
    />
  );
}

function TemplateHeading({ technology }: { technology: string }) {
  return (
    <h4 className="mb-4 mt-10 flex items-center gap-3 border-b border-white/10 pb-4 text-lg text-zinc-300">
      <span className="rounded-md bg-blue-500/10 px-2 py-0.5 text-sm font-semibold text-blue-300 ring-1 ring-inset ring-blue-500/20">
        {technology}
      </span>
      If your component uses {technology}, follow this structure:
    </h4>
  );
}

function ExampleRow({ isValid, code }: { isValid: boolean; code: string }) {
  const Icon = isValid ? CircleCheck : CircleX;

  return (
    <div className="flex items-center gap-4">
      <Icon
        aria-label={isValid ? "Do" : "Don't"}
        className={
          isValid ? "shrink-0 text-green-500" : "shrink-0 text-red-500"
        }
      />
      <ExampleCodeBlock code={code} />
    </div>
  );
}

export function SnippetGuidelines() {
  return (
    <div>
      <TemplateHeading technology="Tailwind" />
      <CodeBlock
        code={TAILWIND_TEMPLATE}
        language="javascript"
        title="src/features/snippets/data/your-collection.tsx"
      />
      <TemplateHeading technology="CSS" />
      <div className="flex gap-3 rounded-lg bg-amber-500/10 p-4 text-sm text-amber-100 ring-1 ring-inset ring-amber-500/20">
        <AlertCircleIcon className="size-5 shrink-0 text-amber-400" />
        <p>
          Add 5 random digits to every class in your component to avoid
          conflicts with existing and future components.
        </p>
      </div>
      <p className="mt-6 text-zinc-400">Example:</p>
      <ExampleRow isValid={false} code={CONFLICTING_CLASS_EXAMPLE} />
      <ExampleRow isValid code={UNIQUE_CLASS_EXAMPLE} />

      <CodeBlock
        code={CSS_TEMPLATE}
        language="javascript"
        title="src/features/snippets/data/your-collection.tsx"
      />
    </div>
  );
}
