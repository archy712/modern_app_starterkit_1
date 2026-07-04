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
    description: "App Router, Turbopack, and React 19 out of the box.",
  },
  {
    icon: Palette,
    title: "Tailwind CSS v4",
    description: "CSS-first configuration, no tailwind.config file needed.",
  },
  {
    icon: Blocks,
    title: "shadcn/ui",
    description: "26 components ready to use, fully owned in your codebase.",
  },
  {
    icon: Moon,
    title: "Dark mode",
    description: "Light, dark, and system theme toggle powered by next-themes.",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto max-w-5xl px-4">
      <section className="flex flex-col items-center gap-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Modern App Starter Kit
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          A batteries-included starting point for your next web app — Next.js,
          TypeScript, Tailwind CSS v4, shadcn/ui, and dark mode, ready to build
          on.
        </p>
        <Button size="lg" nativeButton={false} render={<Link href="/showcase" />}>
          View Component Showcase
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
