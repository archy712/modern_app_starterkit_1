import type { Metadata } from "next";

import { DataDisplayDemo } from "@/components/showcase/data-display-demo";
import { FeedbackDemo } from "@/components/showcase/feedback-demo";
import { FormsDemo } from "@/components/showcase/forms-demo";
import { LayoutDemo } from "@/components/showcase/layout-demo";
import { OverlaysDemo } from "@/components/showcase/overlays-demo";
import { ShowcaseNav } from "@/components/showcase/showcase-nav";
import { ShowcaseSection } from "@/components/showcase/showcase-section";

export const metadata: Metadata = {
  title: "컴포넌트 쇼케이스",
};

export default function ShowcasePage() {
  return (
    <div className="container mx-auto max-w-6xl px-4">
      <div className="space-y-2 py-10">
        <h1 className="text-3xl font-bold tracking-tight">
          컴포넌트 쇼케이스
        </h1>
        <p className="text-muted-foreground">
          이 스타터 키트에 포함된 모든 shadcn/ui 컴포넌트를 확인할 수 있는
          실시간 갤러리입니다.
        </p>
      </div>

      <ShowcaseNav />

      <ShowcaseSection
        id="forms"
        title="폼"
        description="입력창, 선택 컨트롤 등 폼 관련 기본 요소입니다."
      >
        <FormsDemo />
      </ShowcaseSection>

      <ShowcaseSection
        id="overlays"
        title="오버레이"
        description="다이얼로그, 메뉴 등 플로팅 UI입니다."
      >
        <OverlaysDemo />
      </ShowcaseSection>

      <ShowcaseSection
        id="feedback"
        title="피드백"
        description="알림, 진행 표시줄 등 상태 표시 요소입니다."
      >
        <FeedbackDemo />
      </ShowcaseSection>

      <ShowcaseSection
        id="layout"
        title="레이아웃"
        description="구조 및 콘텐츠 그룹화를 위한 컴포넌트입니다."
      >
        <LayoutDemo />
      </ShowcaseSection>

      <ShowcaseSection
        id="data-display"
        title="데이터 표시"
        description="테이블, 배지, 아바타 등입니다."
      >
        <DataDisplayDemo />
      </ShowcaseSection>
    </div>
  );
}
