import type { ReactNode } from "react";

import { SnippetGuidelines } from "@/features/contribute/components/snippet-guidelines";
import { TerminalBlock } from "@/features/code-highlight/components/terminal-block";
import { siteConfig } from "@/config/site";

const SNIPPET_TREE = `src/features/snippets/
├── config/collections.ts   # slug, title, description, layout
├── data/
│   ├── index.ts            # maps each slug to its snippets
│   ├── buttons.tsx
│   └── your-collection.tsx # add your snippet here
├── components/             # gallery, card, preview dialog
└── types.ts`;

function InlinePath({ children }: { children: ReactNode }) {
  return (
    <code className="rounded-md bg-emerald-500/10 px-1.5 py-0.5 font-mono text-sm text-emerald-300 ring-1 ring-inset ring-emerald-500/20">
      {children}
    </code>
  );
}

type StepProps = {
  number: number;
  title: string;
  description: ReactNode;
  children?: ReactNode;
};

function Step({ number, title, description, children }: StepProps) {
  return (
    <li className="relative pb-10 pl-12 last:pb-0">
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 flex size-8 items-center justify-center rounded-full border border-blue-500/30 bg-[#0c0c12] text-sm font-semibold tabular-nums text-blue-300 shadow-[0_0_24px_-6px_rgba(59,130,246,0.6)]"
      >
        {number}
      </span>
      <h3 className="pt-1 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-1 text-base text-zinc-400">{description}</p>
      {children}
    </li>
  );
}

export function SetupGuide() {
  return (
    <section aria-labelledby="setup-heading">
      <h2 id="setup-heading" className="mb-11 text-5xl font-bold text-gray-100">
        Setup
      </h2>
      <ol className="relative before:absolute before:bottom-4 before:left-4 before:top-4 before:w-px before:bg-gradient-to-b before:from-blue-500/40 before:via-white/10 before:to-transparent">
        <Step
          number={1}
          title="Fork the Repository"
          description={
            <>
              Click the "Fork" button on the repository page to create a copy of
              the project in your GitHub account.
            </>
          }
        />
        <Step
          number={2}
          title="Clone the Repository"
          description="Clone the forked repository to your local machine:"
        >
          <TerminalBlock
            commands={[`git clone ${siteConfig.repository.url}`]}
          />
        </Step>
        <Step
          number={3}
          title="Create a New Branch"
          description="Create a branch for your changes, named after what you're working on:"
        >
          <TerminalBlock commands={["git checkout -b my-feature"]} />
        </Step>
        <Step
          number={4}
          title="Make Your Changes"
          description="Implement the changes: add new components, fix bugs or improve the documentation."
        >
          <p className="mt-6 text-base text-zinc-400">
            To add a component, open the collection file in{" "}
            <InlinePath>src/features/snippets/data/</InlinePath> and place your
            snippet at the end of the array, below all the others. New
            collections are registered once in{" "}
            <InlinePath>src/features/snippets/config/collections.ts</InlinePath>{" "}
            — the route, navigation and page metadata are generated from it.
          </p>
          <pre className="mt-4 w-fit rounded-lg bg-white/[0.03] px-4 py-3 font-mono text-sm leading-6 text-zinc-400 ring-1 ring-inset ring-white/10">
            {SNIPPET_TREE}
          </pre>
          <SnippetGuidelines />
        </Step>
        <Step
          number={5}
          title="Commit Your Changes"
          description="Commit your work with a clear, descriptive message:"
        >
          <TerminalBlock
            commands={["git add .", 'git commit -m "Add new feature for XYZ"']}
          />
        </Step>
        <Step
          number={6}
          title="Push Your Changes to GitHub"
          description="Push the branch to your fork:"
        >
          <TerminalBlock commands={["git push origin my-feature"]} />
        </Step>
        <Step
          number={7}
          title="Open a Pull Request"
          description={
            <>
              Go back to the original repository and click "New Pull Request".
              Describe what you changed and why, so it can be reviewed and
              merged into the main project.
            </>
          }
        />
        <Step
          number={8}
          title="Wait for Review"
          description="We'll review your contribution. If everything looks good it gets merged; if changes are needed, we'll leave feedback so you can adjust it."
        />
      </ol>
    </section>
  );
}
