import Link from "next/link";
import { ArrowRight, Blocks, Moon, Palette, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Sparkles,
    title: "Next.js 16 + TypeScript",
    description: "App Router, Turbopack, React 19를 기본으로 제공합니다.",
  },
  {
    icon: Palette,
    title: "Tailwind CSS v4",
    description: "CSS 기반 설정 방식으로 tailwind.config 파일이 필요 없습니다.",
  },
  {
    icon: Blocks,
    title: "shadcn/ui",
    description: "바로 사용할 수 있는 26개의 컴포넌트가 코드베이스에 포함되어 있습니다.",
  },
  {
    icon: Moon,
    title: "다크 모드",
    description: "next-themes로 구현된 라이트/다크/시스템 테마 전환 기능입니다.",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto max-w-5xl px-4">
      <section className="flex flex-col items-center gap-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          모던 앱 스타터 키트
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          Next.js, TypeScript, Tailwind CSS v4, shadcn/ui, 다크 모드까지 모두
          갖춘, 다음 웹 앱을 위한 준비된 시작점입니다.
        </p>
        <Button size="lg" nativeButton={false} render={<Link href="/showcase" />}>
          컴포넌트 쇼케이스 보기
          <ArrowRight />
        </Button>
      </section>

      <section className="grid gap-4 pb-24 sm:grid-cols-2">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="mb-2 size-6 text-primary" />
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent />
          </Card>
        ))}
      </section>
    </div>
  );
}
