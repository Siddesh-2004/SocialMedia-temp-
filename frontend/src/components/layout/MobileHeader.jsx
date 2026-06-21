export default function MobileHeader({ onOpenMenu }) {
  return (
    <header className="md:hidden fixed top-0 left-0 right-0 z-40 h-16 flex items-center justify-between px-4 bg-glass-fill backdrop-blur-md border-b border-border-subtle">
      <button
        onClick={onOpenMenu}
        aria-label="Open menu"
        className="w-10 h-10 flex items-center justify-center rounded-lg border border-border-subtle text-on-surface hover:bg-surface-elevated transition-colors"
      >
        <span className="material-symbols-outlined">menu</span>
      </button>
      <span className="font-headline-lg text-primary text-lg font-bold tracking-tight">
        kNITTEd
      </span>
      <img
        alt="User Profile"
        className="w-9 h-9 rounded-full border border-border-subtle"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxRcKNoDu5e2SzrYRh_RDU5-gTUXdZykEetsK1TDaFHMUsSmefOL4LRT38fKHQ5Ed9iiimZCJClybB0nHWhMKp9J7a4t_oHa-9Y8WZQgOOVJCeUpqoX554_PD6Tf__Rx9QahtHt9Z1AEKKfiqNmIVrv14wWDduYx1TaMhMH3xfU3Aaw_UTYyi_9hJ_vnfxJNzzcrCYEBpD3s1_j8HmPeey9r6PynJOCA6qam6PIgLt7jYzuFQ5kxDtjqD-x-Y_22t7TZwLMlyMXsU"
      />
    </header>
  );
}
