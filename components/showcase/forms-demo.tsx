"use client";

import { type FormEvent, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

import { ComponentPreview } from "./component-preview";

export function FormsDemo() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("유효한 이메일 주소를 입력하세요.");
      return;
    }
    setError(null);
    toast.success("구독 완료!", {
      description: `${email}로 소식을 보내드릴게요.`,
    });
    setEmail("");
  }

  return (
    <>
      <ComponentPreview title="버튼" description="다양한 변형과 크기.">
        <div className="flex flex-wrap gap-2">
          <Button>기본</Button>
          <Button variant="secondary">보조</Button>
          <Button variant="outline">아웃라인</Button>
          <Button variant="ghost">고스트</Button>
          <Button variant="destructive">위험</Button>
          <Button variant="link">링크</Button>
        </div>
      </ComponentPreview>

      <ComponentPreview title="인풋" description="라벨이 있는 텍스트 필드.">
        <div className="grid w-full max-w-xs gap-1.5">
          <Label htmlFor="demo-name">이름</Label>
          <Input id="demo-name" placeholder="Ada Lovelace" />
        </div>
      </ComponentPreview>

      <ComponentPreview title="텍스트영역" description="여러 줄 텍스트 입력.">
        <div className="grid w-full max-w-xs gap-1.5">
          <Label htmlFor="demo-message">메시지</Label>
          <Textarea id="demo-message" placeholder="메시지를 입력하세요..." />
        </div>
      </ComponentPreview>

      <ComponentPreview title="셀렉트" description="하나의 옵션을 선택하세요.">
        <Select defaultValue="apple">
          <SelectTrigger className="w-40">
            <SelectValue placeholder="과일을 선택하세요" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">사과</SelectItem>
            <SelectItem value="banana">바나나</SelectItem>
            <SelectItem value="grape">포도</SelectItem>
          </SelectContent>
        </Select>
      </ComponentPreview>

      <ComponentPreview title="체크박스" description="on/off 토글.">
        <div className="flex items-center gap-2">
          <Checkbox id="demo-terms" defaultChecked />
          <Label htmlFor="demo-terms">약관에 동의합니다</Label>
        </div>
      </ComponentPreview>

      <ComponentPreview title="스위치" description="on/off 토글.">
        <div className="flex items-center gap-2">
          <Switch id="demo-airplane" />
          <Label htmlFor="demo-airplane">비행기 모드</Label>
        </div>
      </ComponentPreview>

      <ComponentPreview title="라디오 그룹" description="여러 항목 중 하나를 선택하세요.">
        <RadioGroup defaultValue="pro" className="gap-3">
          {[
            { value: "free", label: "무료" },
            { value: "pro", label: "프로" },
            { value: "team", label: "팀" },
          ].map((option) => (
            <div key={option.value} className="flex items-center gap-2">
              <RadioGroupItem value={option.value} id={`plan-${option.value}`} />
              <Label htmlFor={`plan-${option.value}`}>{option.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </ComponentPreview>

      <ComponentPreview title="슬라이더" description="범위 내에서 숫자 값을 선택하세요.">
        <Slider defaultValue={[50]} className="max-w-xs" />
      </ComponentPreview>

      <ComponentPreview
        title="폼"
        description="이메일 유효성 검사 후 성공 시 토스트를 표시합니다."
        className="items-start"
      >
        <form onSubmit={handleSubmit} className="grid w-full max-w-xs gap-3">
          <div className="grid gap-1.5">
            <Label htmlFor="demo-email">이메일</Label>
            <Input
              id="demo-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              aria-invalid={Boolean(error)}
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
          </div>
          <Button type="submit">구독하기</Button>
        </form>
      </ComponentPreview>
    </>
  );
}
