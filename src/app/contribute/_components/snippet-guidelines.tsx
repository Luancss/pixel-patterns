import { AlertCircleIcon, CircleCheck, CircleX } from "lucide-react";

import { TemplateCodeBlock } from "@/app/contribute/_components/template-code-block";
import { CodeView } from "@/components/snippets/code-view";
import { getHighlightTheme } from "@/components/snippets/highlight-themes";

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
    <p className="text-xl text-gray-300 mt-10 mb-4 border-b-2 border-zinc-600 border-separate pb-4 text-center">
      If your component is{" "}
      <span className="font-bold text-blue-500">{technology}</span> , use this
      structure:
    </p>
  );
}

export function SnippetGuidelines() {
  return (
    <div>
      <TemplateHeading technology="Tailwind" />
      <TemplateCodeBlock code={TAILWIND_TEMPLATE} />
      <TemplateHeading technology="Css" />
      <p className="flex text-gray-300">
        <AlertCircleIcon className="text-yellow-300 mr-4 items-center justify-center" />{" "}
        Randomly place 5 numeric digits in all your component classes to avoid
        conflicts with existing components and future components
      </p>
      <p className="mt-6 text-gray-300">Example:</p>
      <div className="flex items-center justify-center gap-4">
        <CircleX className="text-red-500" />
        <ExampleCodeBlock code={CONFLICTING_CLASS_EXAMPLE} />
      </div>
      <div className="flex items-center justify-center gap-4">
        <CircleCheck className="text-green-500" />
        <ExampleCodeBlock code={UNIQUE_CLASS_EXAMPLE} />
      </div>

      <TemplateCodeBlock code={CSS_TEMPLATE} />
    </div>
  );
}
