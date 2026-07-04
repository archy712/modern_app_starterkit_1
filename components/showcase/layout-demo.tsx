import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ComponentPreview } from "./component-preview";

export function LayoutDemo() {
  return (
    <>
      <ComponentPreview title="카드" description="관련 콘텐츠를 묶는 컨테이너입니다.">
        <Card className="w-full max-w-xs">
          <CardHeader>
            <CardTitle>알림</CardTitle>
            <CardDescription>읽지 않은 메시지가 3개 있습니다.</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            팀과 함께 최신 정보를 확인하세요.
          </CardContent>
        </Card>
      </ComponentPreview>

      <ComponentPreview title="구분선" description="콘텐츠를 시각적으로 구분합니다.">
        <div className="w-full max-w-xs text-sm">
          <p>섹션 1</p>
          <Separator className="my-3" />
          <p>섹션 2</p>
        </div>
      </ComponentPreview>

      <ComponentPreview title="탭" description="관련된 화면을 전환합니다.">
        <Tabs defaultValue="account" className="w-full max-w-xs">
          <TabsList>
            <TabsTrigger value="account">계정</TabsTrigger>
            <TabsTrigger value="password">비밀번호</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="pt-2 text-muted-foreground">
            여기서 계정 정보를 수정하세요.
          </TabsContent>
          <TabsContent value="password" className="pt-2 text-muted-foreground">
            여기서 비밀번호를 변경하세요.
          </TabsContent>
        </Tabs>
      </ComponentPreview>

      <ComponentPreview title="아코디언" description="접고 펼칠 수 있는 콘텐츠 영역입니다.">
        <Accordion className="w-full max-w-xs">
          <AccordionItem value="item-1">
            <AccordionTrigger>접근성을 지원하나요?</AccordionTrigger>
            <AccordionContent>
              네, WAI-ARIA 디자인 패턴을 따릅니다.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>스타일이 적용되어 있나요?</AccordionTrigger>
            <AccordionContent>
              네, shadcn/ui의 기본 스타일이 적용되어 있습니다.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ComponentPreview>
    </>
  );
}
