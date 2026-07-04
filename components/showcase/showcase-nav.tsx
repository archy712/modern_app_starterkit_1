const sections = [
  { id: "forms", label: "Forms" },
  { id: "overlays", label: "Overlays" },
  { id: "feedback", label: "Feedback" },
  { id: "layout", label: "Layout" },
  { id: "data-display", label: "Data Display" },
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
