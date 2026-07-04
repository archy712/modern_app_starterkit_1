"use client";

import { Info, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import { ComponentPreview } from "./component-preview";

export function OverlaysDemo() {
  return (
    <>
      <ComponentPreview title="다이얼로그" description="모달 창입니다.">
        <Dialog>
          <DialogTrigger render={<Button variant="outline">프로필 수정</Button>} />
          <DialogContent>
            <DialogHeader>
              <DialogTitle>프로필 수정</DialogTitle>
              <DialogDescription>
                여기서 프로필을 수정하세요.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-1.5">
              <Label htmlFor="dialog-name">이름</Label>
              <Input id="dialog-name" defaultValue="Ada Lovelace" />
            </div>
            <DialogFooter>
              <Button type="submit">변경사항 저장</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ComponentPreview>

      <ComponentPreview title="드롭다운 메뉴" description="작업 목록입니다.">
        <DropdownMenu>
          <DropdownMenuTrigger
            render={<Button variant="outline" size="icon" />}
          >
            <MoreHorizontal />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuLabel>작업</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>보기</DropdownMenuItem>
            <DropdownMenuItem>복제</DropdownMenuItem>
            <DropdownMenuItem variant="destructive">삭제</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ComponentPreview>

      <ComponentPreview title="툴팁" description="hover/focus 시 표시되는 힌트입니다.">
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" size="icon" />}>
            <Info />
          </TooltipTrigger>
          <TooltipContent>추가 정보</TooltipContent>
        </Tooltip>
      </ComponentPreview>

      <ComponentPreview title="팝오버" description="플로팅 콘텐츠 패널입니다.">
        <Popover>
          <PopoverTrigger render={<Button variant="outline">팝오버 열기</Button>} />
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>크기</PopoverTitle>
              <PopoverDescription>
                레이어의 크기를 설정하세요.
              </PopoverDescription>
            </PopoverHeader>
            <div className="grid gap-1.5">
              <Label htmlFor="popover-width">너비</Label>
              <Input id="popover-width" defaultValue="100%" />
            </div>
          </PopoverContent>
        </Popover>
      </ComponentPreview>

      <ComponentPreview title="시트" description="슬라이드 인 패널입니다.">
        <Sheet>
          <SheetTrigger render={<Button variant="outline">시트 열기</Button>} />
          <SheetContent>
            <SheetHeader>
              <SheetTitle>프로필 수정</SheetTitle>
              <SheetDescription>
                여기서 프로필을 수정하세요.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </ComponentPreview>
    </>
  );
}
