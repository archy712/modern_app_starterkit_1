import type { ReactNode } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ComponentPreviewProps {
  title: string;
  description?: string;
  className?: string;
  children: ReactNode;
}

export function ComponentPreview({
  title,
  description,
  className,
  children,
}: ComponentPreviewProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent
        className={cn(
          "flex flex-wrap items-center gap-4 rounded-md border bg-muted/30 p-6",
          className
        )}
      >
        {children}
      </CardContent>
    </Card>
  );
}
