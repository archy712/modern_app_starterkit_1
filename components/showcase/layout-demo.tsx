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
      <ComponentPreview title="Card" description="A container for grouped content.">
        <Card className="w-full max-w-xs">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Stay up to date with your team.
          </CardContent>
        </Card>
      </ComponentPreview>

      <ComponentPreview title="Separator" description="Visually divides content.">
        <div className="w-full max-w-xs text-sm">
          <p>Section one</p>
          <Separator className="my-3" />
          <p>Section two</p>
        </div>
      </ComponentPreview>

      <ComponentPreview title="Tabs" description="Switch between related views.">
        <Tabs defaultValue="account" className="w-full max-w-xs">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="pt-2 text-muted-foreground">
            Update your account details here.
          </TabsContent>
          <TabsContent value="password" className="pt-2 text-muted-foreground">
            Change your password here.
          </TabsContent>
        </Tabs>
      </ComponentPreview>

      <ComponentPreview title="Accordion" description="Collapsible content sections.">
        <Accordion className="w-full max-w-xs">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes, it adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes, it comes with default styles from shadcn/ui.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ComponentPreview>
    </>
  );
}
