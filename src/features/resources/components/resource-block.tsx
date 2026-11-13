import { Info, Lightbulb, TriangleAlert } from "lucide-react";

import { CodeBlock } from "@/features/code-highlight/components/code-block";
import { TerminalBlock } from "@/features/code-highlight/components/terminal-block";
import { InlineText } from "@/features/resources/components/inline-text";
import type { ResourceBlock as Block } from "@/features/resources/types";
import { cn } from "@/lib/utils";

const CALLOUTS = {
  note: {
    icon: Info,
    title: "Note",
    className: "border-blue-400 bg-blue-500/10 text-blue-100",
  },
  tip: {
    icon: Lightbulb,
    title: "Tip",
    className: "border-emerald-400 bg-emerald-500/10 text-emerald-100",
  },
  warning: {
    icon: TriangleAlert,
    title: "Warning",
    className: "border-amber-400 bg-amber-500/10 text-amber-100",
  },
};

export function ResourceBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="leading-7 text-zinc-300">
          <InlineText text={block.text} />
        </p>
      );

    case "list": {
      const List = block.ordered ? "ol" : "ul";
      return (
        <List
          className={cn(
            "space-y-2 pl-5 leading-7 text-zinc-300 marker:text-zinc-500",
            block.ordered ? "list-decimal" : "list-disc"
          )}
        >
          {block.items.map((item) => (
            <li key={item}>
              <InlineText text={item} />
            </li>
          ))}
        </List>
      );
    }

    case "code":
      return (
        <CodeBlock
          code={block.code}
          language={block.language}
          title={block.title}
        />
      );

    case "terminal":
      return <TerminalBlock commands={block.commands} />;

    case "callout": {
      const { icon: Icon, title, className } = CALLOUTS[block.tone];
      return (
        <aside
          className={cn(
            "flex gap-3 rounded-lg border-l-4 px-4 py-3 text-sm leading-6",
            className
          )}
        >
          <Icon className="mt-0.5 size-4 shrink-0" />
          <p>
            <span className="font-semibold">{title}: </span>
            <InlineText text={block.text} />
          </p>
        </aside>
      );
    }

    case "table":
      return (
        <div className="custom-scrollbar overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead className="bg-white/5 text-xs uppercase tracking-wider text-zinc-400">
              <tr>
                {block.columns.map((column) => (
                  <th
                    key={column}
                    scope="col"
                    className="px-4 py-2.5 font-medium"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-zinc-300">
              {block.rows.map((row) => (
                <tr key={row.join("|")}>
                  {row.map((cell, index) => (
                    <td key={index} className="px-4 py-2.5 align-top">
                      <InlineText text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}
