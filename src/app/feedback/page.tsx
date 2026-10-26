import { MeteorShower } from "@/components/decorations/meteor-shower";
import { RingWave } from "@/components/decorations/ring-wave";
import { Starfield } from "@/components/decorations/starfield";
import { PageHero } from "@/components/layout/page-hero";
import { SnippetGallery } from "@/components/snippets/snippet-gallery";
import { feedbackSnippets } from "@/data/snippets/feedback";

export default function FeedbackPage() {
  return (
    <>
      <Starfield />
      <MeteorShower />
      <RingWave />
      <PageHero
        title="Feedback"
        description="Alerts, toasts, badges and status indicators that keep users informed. Clear states for success, warnings, errors and progress."
      />
      <SnippetGallery snippets={feedbackSnippets} size="wide" />
    </>
  );
}
