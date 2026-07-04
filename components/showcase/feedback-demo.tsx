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
      <ComponentPreview title="Alert" description="Default and destructive variants.">
        <div className="grid w-full gap-3">
          <Alert>
            <Terminal />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the CLI.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertCircle />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired. Please sign in again.
            </AlertDescription>
          </Alert>
        </div>
      </ComponentPreview>

      <ComponentPreview title="Progress" description="Shows completion progress.">
        <Progress value={66} className="max-w-xs" />
      </ComponentPreview>

      <ComponentPreview title="Skeleton" description="Loading placeholder.">
        <div className="flex items-center gap-4">
          <Skeleton className="size-10 rounded-full" />
          <div className="grid gap-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview title="Sonner" description="Toast notifications.">
        <Button
          variant="outline"
          onClick={() =>
            toast.success("Event created", {
              description: "Sunday, July 4th at 4:00 PM",
            })
          }
        >
          Show toast
        </Button>
      </ComponentPreview>
    </>
  );
}
