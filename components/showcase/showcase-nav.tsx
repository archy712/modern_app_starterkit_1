const sections = [
  { id: "forms", label: "폼" },
  { id: "overlays", label: "오버레이" },
  { id: "feedback", label: "피드백" },
  { id: "layout", label: "레이아웃" },
  { id: "data-display", label: "데이터 표시" },
];

export function ShowcaseNav() {
  return (
    <nav className="sticky top-14 z-40 -mx-4 flex gap-1 overflow-x-auto border-b bg-background/95 px-4 py-2 backdrop-blur supports-backdrop-filter:bg-background/60">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="whitespace-nowrap rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
}
