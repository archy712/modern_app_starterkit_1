import Link from "next/link"
import { LayoutGrid } from "lucide-react"

import { ModeToggle } from "@/components/mode-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 h-14 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <LayoutGrid className="size-5" />
          모던 앱 스타터 키트
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            href="/showcase"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            쇼케이스
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}
