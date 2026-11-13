import type { Resource } from "@/features/resources/types";

export const reactPerformanceGuide: Resource = {
  slug: "react-performance-essentials",
  title: "React Performance Essentials",
  summary:
    "Derive instead of syncing, subscribe narrowly to stores, memoize on purpose and load heavy code on demand.",
  category: "react",
  level: "Intermediate",
  sections: [
    {
      id: "derive-state",
      heading: "Derive values instead of syncing state",
      blocks: [
        {
          type: "paragraph",
          text: "Copying props or other state into `useState` and keeping it in sync with `useEffect` causes an extra render and stale values. If something can be computed from what you already have, compute it during render.",
        },
        {
          type: "code",
          language: "tsx",
          code: `// ✗ extra render, can drift out of sync
const [visible, setVisible] = useState(items);
useEffect(() => {
  setVisible(items.filter((item) => item.category === filter));
}, [items, filter]);

// ✓ derived during render
const visible = items.filter((item) => item.category === filter);`,
        },
      ],
    },
    {
      id: "store-selectors",
      heading: "Subscribe to the smallest slice of a store",
      blocks: [
        {
          type: "paragraph",
          text: "Reading a whole Zustand store re-renders the component on every change — including keystrokes. Select only what you render; use `useShallow` when you need several fields at once.",
        },
        {
          type: "code",
          language: "tsx",
          title: "status-bar.tsx",
          code: `import { useShallow } from "zustand/react/shallow";

// ✗ re-renders whenever anything changes
const { language, theme } = useCodeEditorStore();

// ✓ re-renders only when these values change
const language = useCodeEditorStore((state) => state.language);
const { fontSize, wordWrap } = useCodeEditorStore(
  useShallow((state) => ({
    fontSize: state.fontSize,
    wordWrap: state.wordWrap,
  }))
);`,
        },
        {
          type: "callout",
          tone: "tip",
          text: "Inside event handlers read the latest value with `useStore.getState()` instead of subscribing to it.",
        },
      ],
    },
    {
      id: "memoization",
      heading: "Memoize on purpose",
      blocks: [
        {
          type: "list",
          items: [
            "`useMemo` for genuinely expensive work (parsing, tokenizing, large filters) — not for every value.",
            "`memo()` for components that receive stable props but sit under a frequently re-rendering parent.",
            "`useCallback` only when the function is a dependency of an effect or a prop of a memoized child.",
            "Measure with the React DevTools Profiler before and after.",
          ],
        },
      ],
    },
    {
      id: "code-splitting",
      heading: "Load heavy code on demand",
      blocks: [
        {
          type: "paragraph",
          text: "Editors, charts and 3D scenes can weigh hundreds of kilobytes. `next/dynamic` splits them into their own chunk and renders a placeholder meanwhile.",
        },
        {
          type: "code",
          language: "tsx",
          code: `import dynamic from "next/dynamic";

const CodeEditor = dynamic(
  () => import("@/features/code-editor/components/editor-surface").then(
    (mod) => mod.EditorSurface
  ),
  { ssr: false, loading: () => <EditorSkeleton /> }
);`,
        },
      ],
    },
    {
      id: "lists",
      heading: "Lists and keys",
      blocks: [
        {
          type: "paragraph",
          text: "Use stable, unique ids as keys. Array indexes are only safe for lists that never reorder, filter or insert; otherwise React reuses the wrong DOM nodes and state.",
        },
        {
          type: "paragraph",
          text: "For thousands of rows, paginate or virtualize (for example with `@tanstack/react-virtual`) so the DOM only contains what is on screen.",
        },
      ],
    },
  ],
};
