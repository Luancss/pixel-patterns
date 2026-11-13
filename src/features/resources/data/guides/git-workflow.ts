import type { Resource } from "@/features/resources/types";

export const gitWorkflowGuide: Resource = {
  slug: "git-workflow-cheatsheet",
  title: "Git Workflow Cheatsheet",
  summary:
    "Branching, Conventional Commits, keeping branches current and undoing mistakes without losing work.",
  category: "workflow",
  level: "Beginner",
  sections: [
    {
      id: "feature-branch",
      heading: "The feature-branch loop",
      blocks: [
        {
          type: "terminal",
          commands: [
            "git switch main && git pull",
            "git switch -c feat/palette-export",
            "git add -p",
            'git commit -m "feat(palettes): export tokens as CSS variables"',
            "git push -u origin feat/palette-export",
          ],
        },
        {
          type: "callout",
          tone: "tip",
          text: "`git add -p` stages changes hunk by hunk, which keeps commits focused and catches stray debug code.",
        },
      ],
    },
    {
      id: "conventional-commits",
      heading: "Conventional Commits",
      blocks: [
        {
          type: "paragraph",
          text: "Format: `type(scope): summary`. A consistent prefix makes history scannable and lets tools generate changelogs and version bumps.",
        },
        {
          type: "table",
          columns: ["Type", "Use for", "Version bump"],
          rows: [
            ["`feat`", "A new feature", "Minor"],
            ["`fix`", "A bug fix", "Patch"],
            ["`refactor`", "Code change without behavior change", "—"],
            ["`docs` / `style` / `test`", "Docs, formatting, tests", "—"],
            [
              "`feat!` or `BREAKING CHANGE:`",
              "Incompatible API change",
              "Major",
            ],
          ],
        },
      ],
    },
    {
      id: "stay-current",
      heading: "Keep your branch up to date",
      blocks: [
        {
          type: "terminal",
          commands: ["git fetch origin", "git rebase origin/main"],
        },
        {
          type: "paragraph",
          text: "Rebasing replays your commits on top of the latest `main`, giving a linear history. After rebasing an already pushed branch, push with `--force-with-lease`, which refuses to overwrite commits you have not seen.",
        },
        {
          type: "callout",
          tone: "warning",
          text: "Never rebase or force-push a shared branch such as `main` — other people's history would diverge from yours.",
        },
      ],
    },
    {
      id: "undo",
      heading: "Undo without panic",
      blocks: [
        {
          type: "table",
          columns: ["Situation", "Command"],
          rows: [
            ["Discard unstaged changes in a file", "`git restore <file>`"],
            ["Unstage a file", "`git restore --staged <file>`"],
            [
              "Fix the last commit message or add a file",
              "`git commit --amend`",
            ],
            [
              "Undo the last commit, keep the changes",
              "`git reset --soft HEAD~1`",
            ],
            ["Revert a pushed commit safely", "`git revert <sha>`"],
            ["Find a commit you “lost”", "`git reflog`"],
          ],
        },
      ],
    },
  ],
};
