import Image from "next/image";
import type { ReactNode } from "react";

import { SnippetGuidelines } from "@/app/contribute/_components/snippet-guidelines";
import { TerminalCommand } from "@/app/contribute/_components/terminal-command";
import { siteConfig } from "@/lib/site";

type StepProps = {
  number: number;
  title: string;
  children: ReactNode;
};

function Step({ number, title, children }: StepProps) {
  return (
    <p className="text-base text-gray-300 my-4">
      {number}. <span className="font-bold text-blue-500">{title}</span>:{" "}
      {children}
    </p>
  );
}

function Commands({ commands }: { commands: string[] }) {
  return (
    <div className="md:ml-8">
      <TerminalCommand commands={commands} />
    </div>
  );
}

export function SetupGuide() {
  return (
    <>
      <h2 className="text-5xl font-bold text-gray-100 mb-11">Setup</h2>
      <Step number={1} title="Fork the Repository">
        Click the "Fork" button on the repository page to create a copy of the
        project in your GitHub account.
      </Step>
      <Step number={2} title="Clone the Repository">
        Clone the forked repository to your local machine using the command:
      </Step>
      <Commands commands={[`git clone ${siteConfig.repository.url}`]} />
      <Step number={3} title="Create a New Branch">
        Create a branch to make your changes. Give it a name that clearly
        describes what you’re working on:
      </Step>
      <Commands commands={["git checkout -b my-feature"]} />
      <Step number={4} title="Make Your Changes">
        Implement the necessary changes in the code, add new features, fix bugs,
        or improve the documentation.
      </Step>
      <p className="text-base text-gray-300 mt-10">
        To add a component, open{" "}
        <span className="font-bold text-green-500">
          src/data/snippets/your-category.tsx
        </span>{" "}
        and place your snippet at the end of the array, below all the others.
      </p>
      <p className="text-base text-gray-300 my-4">Example:</p>
      <Image
        className="mt-4"
        src="/structure.png"
        alt="card"
        width={300}
        height={300}
      />
      <SnippetGuidelines />
      <Step number={5} title="Commit Your Changes">
        After completing your changes, commit them with a clear and descriptive
        message:
      </Step>
      <Commands
        commands={["git add .", 'git commit -m "Add new feature for XYZ"']}
      />
      <Step number={6} title="Push Your Changes to GitHub">
        Push your changes to your repository on GitHub:
      </Step>
      <Commands commands={["git push origin my-feature"]} />
      <Step number={7} title="Open a Pull Request">
        Go back to the original repository and click "New Pull Request."
        Describe the changes you’ve made and why. This allows your adjustments
        to be reviewed and, if approved, merged into the main project.
      </Step>
      <Step number={8} title="Wait for Review">
        Our team will review your contribution. If everything looks good, your
        contribution will be merged into the project. If any changes are needed,
        we’ll provide feedback so you can make adjustments.
      </Step>
    </>
  );
}
