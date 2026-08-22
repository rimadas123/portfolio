export default function Footer() {
  return (
    <footer className="border-t border-border-muted px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Tandrima Das</span>
        <div className="flex gap-5">
          <a
            href="https://www.linkedin.com/in/rima-das-b7714bb0/"
            className="transition hover:text-brand"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://www.behance.net/rimadas1"
            className="transition hover:text-brand"
          >
            Behance ↗
          </a>
          <a
            href="https://dribbble.com/rimeee_das"
            className="transition hover:text-brand"
          >
            Dribbble ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
