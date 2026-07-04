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
      setError("Enter a valid email address.");
      return;
    }
    setError(null);
    toast.success("Subscribed!", {
      description: `We'll send updates to ${email}.`,
    });
    setEmail("");
  }

  return (
    <>
      <ComponentPreview title="Button" description="Variants and sizes.">
        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      </ComponentPreview>

      <ComponentPreview title="Input" description="Text field with a label.">
        <div className="grid w-full max-w-xs gap-1.5">
          <Label htmlFor="demo-name">Name</Label>
          <Input id="demo-name" placeholder="Ada Lovelace" />
        </div>
      </ComponentPreview>

      <ComponentPreview title="Textarea" description="Multi-line text input.">
        <div className="grid w-full max-w-xs gap-1.5">
          <Label htmlFor="demo-message">Message</Label>
          <Textarea id="demo-message" placeholder="Type your message..." />
        </div>
      </ComponentPreview>

      <ComponentPreview title="Select" description="Choose one option.">
        <Select defaultValue="apple">
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="grape">Grape</SelectItem>
          </SelectContent>
        </Select>
      </ComponentPreview>

      <ComponentPreview title="Checkbox" description="Boolean toggle.">
        <div className="flex items-center gap-2">
          <Checkbox id="demo-terms" defaultChecked />
          <Label htmlFor="demo-terms">Accept terms and conditions</Label>
        </div>
      </ComponentPreview>

      <ComponentPreview title="Switch" description="On/off toggle.">
        <div className="flex items-center gap-2">
          <Switch id="demo-airplane" />
          <Label htmlFor="demo-airplane">Airplane mode</Label>
        </div>
      </ComponentPreview>

      <ComponentPreview title="Radio Group" description="Single choice from a set.">
        <RadioGroup defaultValue="pro" className="gap-3">
          {[
            { value: "free", label: "Free" },
            { value: "pro", label: "Pro" },
            { value: "team", label: "Team" },
          ].map((option) => (
            <div key={option.value} className="flex items-center gap-2">
              <RadioGroupItem value={option.value} id={`plan-${option.value}`} />
              <Label htmlFor={`plan-${option.value}`}>{option.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </ComponentPreview>

      <ComponentPreview title="Slider" description="Select a numeric value in a range.">
        <Slider defaultValue={[50]} className="max-w-xs" />
      </ComponentPreview>

      <ComponentPreview
        title="Form"
        description="Validated email input with a toast on success."
        className="items-start"
      >
        <form onSubmit={handleSubmit} className="grid w-full max-w-xs gap-3">
          <div className="grid gap-1.5">
            <Label htmlFor="demo-email">Email</Label>
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
          <Button type="submit">Subscribe</Button>
        </form>
      </ComponentPreview>
    </>
  );
}
