import {
  Panel,
  PanelBody,
  PanelHeader,
} from "@/features/code-editor/components/panel";
import {
  EDITOR_AREA_CLASS_NAME,
  OUTPUT_AREA_CLASS_NAME,
  WORKSPACE_CLASS_NAME,
} from "@/features/code-editor/config/layout";
import { cn } from "@/lib/utils";

const SKELETON_LINE_WIDTHS = [
  62, 35, 74, 48, 27, 69, 53, 41, 78, 31, 57, 66, 23, 45, 71,
];

function Bone({ className }: { className?: string }) {
  return <div className={cn("rounded bg-white/5", className)} />;
}

export function EditorSurfaceSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="h-full w-full animate-pulse bg-[#0b0b14] px-4 py-4"
    >
      {SKELETON_LINE_WIDTHS.map((width, index) => (
        <div key={index} className="mb-3 flex items-center gap-4">
          <Bone className="h-3.5 w-6" />
          <div
            className="h-3.5 rounded bg-white/5"
            style={{ width: `${width}%` }}
          />
        </div>
      ))}
    </div>
  );
}

export function CodeEditorSkeleton() {
  return (
    <div
      role="status"
      aria-label="Loading code editor"
      className="flex flex-col gap-3"
    >
      <div className="flex h-12 animate-pulse items-center gap-3 rounded-xl border border-white/10 bg-[#0c0c12]/80 px-3">
        <Bone className="size-8 rounded-lg" />
        <Bone className="hidden h-4 w-28 sm:block" />
        <Bone className="h-7 w-32 rounded-lg" />
        <Bone className="ml-auto h-7 w-40 rounded-lg" />
      </div>

      <div
        className={cn("flex flex-col gap-3 lg:flex-row", WORKSPACE_CLASS_NAME)}
      >
        <Panel className={cn(EDITOR_AREA_CLASS_NAME, "lg:w-[56%]")}>
          <PanelHeader className="animate-pulse">
            <Bone className="h-8 w-32 rounded-lg" />
            <Bone className="ml-auto h-8 w-24 rounded-lg" />
          </PanelHeader>
          <PanelBody>
            <EditorSurfaceSkeleton />
          </PanelBody>
        </Panel>
        <Panel className={cn(OUTPUT_AREA_CLASS_NAME, "lg:flex-1")}>
          <PanelHeader className="animate-pulse">
            <Bone className="h-7 w-40 rounded-lg" />
          </PanelHeader>
          <PanelBody className="bg-[#08080f]" />
        </Panel>
      </div>

      <div className="h-8 animate-pulse rounded-lg border border-white/10 bg-[#0c0c12]/80" />
    </div>
  );
}
