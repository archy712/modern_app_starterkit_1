"use client";

import { AlertCircle, Terminal } from "lucide-react";
import { toast } from "sonner";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";

import { ComponentPreview } from "./component-preview";

export function FeedbackDemo() {
  return (
    <>
      <ComponentPreview title="얼럿" description="기본 및 위험 변형입니다.">
        <div className="grid w-full gap-3">
          <Alert>
            <Terminal />
            <AlertTitle>알림!</AlertTitle>
            <AlertDescription>
              CLI를 사용해 앱에 컴포넌트를 추가할 수 있습니다.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertCircle />
            <AlertTitle>오류</AlertTitle>
            <AlertDescription>
              세션이 만료되었습니다. 다시 로그인해 주세요.
            </AlertDescription>
          </Alert>
        </div>
      </ComponentPreview>

      <ComponentPreview title="프로그레스" description="완료 진행률을 표시합니다.">
        <Progress value={66} className="max-w-xs" />
      </ComponentPreview>

      <ComponentPreview title="스켈레톤" description="로딩 placeholder입니다.">
        <div className="flex items-center gap-4">
          <Skeleton className="size-10 rounded-full" />
          <div className="grid gap-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview title="소너" description="토스트 알림입니다.">
        <Button
          variant="outline"
          onClick={() =>
            toast.success("이벤트 생성됨", {
              description: "7월 4일 일요일 오후 4시",
            })
          }
        >
          토스트 표시
        </Button>
      </ComponentPreview>
    </>
  );
}
