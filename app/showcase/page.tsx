import type { Metadata } from "next";

import { DataDisplayDemo } from "@/components/showcase/data-display-demo";
import { FeedbackDemo } from "@/components/showcase/feedback-demo";
import { FormsDemo } from "@/components/showcase/forms-demo";
import { LayoutDemo } from "@/components/showcase/layout-demo";
import { OverlaysDemo } from "@/components/showcase/overlays-demo";
import { ShowcaseNav } from "@/components/showcase/showcase-nav";
import { ShowcaseSection } from "@/components/showcase/showcase-section";

export const metadata: Metadata = {
  title: "Component Showcase",
};

export default function ShowcasePage() {
  return (
    <div className="container mx-auto max-w-6xl px-4">
      <div className="space-y-2 py-10">
        <h1 className="text-3xl font-bold tracking-tight">
          Component Showcase
        </h1>
        <p className="text-muted-foreground">
          A live gallery of every shadcn/ui component included in this
          starter kit.
        </p>
      </div>

      <ShowcaseNav />

      <ShowcaseSection
        id="forms"
        title="Forms"
        description="Inputs, selection controls, and form primitives."
      >
        <FormsDemo />
      </ShowcaseSection>

      <ShowcaseSection
        id="overlays"
        title="Overlays"
        description="Dialogs, menus, and floating UI."
      >
        <OverlaysDemo />
      </ShowcaseSection>

      <ShowcaseSection
        id="feedback"
        title="Feedback"
        description="Alerts, progress, and status indicators."
      >
        <FeedbackDemo />
      </ShowcaseSection>

      <ShowcaseSection
        id="layout"
        title="Layout"
        description="Structural and content-grouping components."
      >
        <LayoutDemo />
      </ShowcaseSection>

      <ShowcaseSection
        id="data-display"
        title="Data Display"
        description="Tables, badges, and avatars."
      >
        <DataDisplayDemo />
      </ShowcaseSection>
    </div>
  );
}
