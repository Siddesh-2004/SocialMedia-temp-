export default function Footer() {
  return (
    <footer className="w-full py-margin-desktop px-margin-desktop flex flex-col md:flex-row justify-between items-center bg-surface-dim border-t border-border-subtle">
      <div className="flex items-center gap-2 mb-4 md:mb-0">
        <span className="font-label-code text-primary">kNITTEd</span>
      </div>
      <div className="text-outline font-body-sm text-body-sm mb-4 md:mb-0">
        © 2026 kNITTEd. Built for developers.
      </div>
      <div className="flex gap-6">
        <a
          className="text-outline hover:text-tertiary-fixed-dim transition-colors font-body-sm text-body-sm"
          href="#"
        >
          Privacy
        </a>
        <a
          className="text-outline hover:text-tertiary-fixed-dim transition-colors font-body-sm text-body-sm"
          href="#"
        >
          Terms
        </a>
        <a
          className="text-outline hover:text-tertiary-fixed-dim transition-colors font-body-sm text-body-sm"
          href="#"
        >
          API Status
        </a>
        <a
          className="text-outline hover:text-tertiary-fixed-dim transition-colors font-body-sm text-body-sm"
          href="#"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
