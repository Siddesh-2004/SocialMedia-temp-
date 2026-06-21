import { NavLink } from "react-router-dom";

const navItems = [
  { icon: "home", label: "Home", to: "/dashboard", end: true },
  { icon: "event", label: "Events", to: "/dashboard/events" },
  { icon: "groups", label: "Teammates", to: "/dashboard/teammates" },
  { icon: "group", label: "Coding Buddies", to: "/dashboard/buddies" },
  { icon: "folder_open", label: "Projects", to: "/dashboard/projects" },
  { icon: "forum", label: "Discussions", to: "/dashboard/discussions" },
  { icon: "account_circle", label: "Profile", to: "/dashboard/profile" },
];

const linkClasses = ({ isActive }) =>
  isActive
    ? "flex items-center gap-3 px-4 py-3 bg-primary-container text-on-primary-container rounded-lg font-bold shadow-[0_0_16px_rgba(138,43,226,0.4)] transition-all duration-200 active:scale-95"
    : "flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-elevated hover:border-primary/50 border border-transparent rounded-lg transition-all duration-200 active:scale-95";

function SidebarContent({ onNavigate }) {
  return (
    <>
      <div className="flex items-center gap-4 px-4 py-6 mb-8 border-b border-border-subtle">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-primary text-xl leading-none">
            kNITTEd
          </h1>
          <span className="font-label-code text-label-code text-on-surface-variant text-xs">
            Dev Workspace
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2 flex-grow overflow-y-auto font-label-code text-label-code px-2">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            end={item.end}
            onClick={onNavigate}
            className={linkClasses}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </div>
      <div className="mt-auto px-4 py-6 border-t border-border-subtle flex items-center gap-3">
        <img
          alt="User Profile"
          className="w-10 h-10 rounded-full border border-border-subtle"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxRcKNoDu5e2SzrYRh_RDU5-gTUXdZykEetsK1TDaFHMUsSmefOL4LRT38fKHQ5Ed9iiimZCJClybB0nHWhMKp9J7a4t_oHa-9Y8WZQgOOVJCeUpqoX554_PD6Tf__Rx9QahtHt9Z1AEKKfiqNmIVrv14wWDduYx1TaMhMH3xfU3Aaw_UTYyi_9hJ_vnfxJNzzcrCYEBpD3s1_j8HmPeey9r6PynJOCA6qam6PIgLt7jYzuFQ5kxDtjqD-x-Y_22t7TZwLMlyMXsU"
        />
        <div className="flex flex-col">
          <span className="font-button-text text-button-text text-on-surface">
            Alex Dev
          </span>
          <span className="font-body-sm text-body-sm text-tertiary">
            @alexdev
          </span>
        </div>
      </div>
    </>
  );
}

export default function Sidebar({ mobileOpen, onCloseMobile }) {
  return (
    <>
      {/* Desktop / tablet rail — always visible from md breakpoint up */}
      <nav className="hidden md:flex flex-col fixed left-0 top-0 h-full bg-surface-base border-r border-border-subtle w-64 z-50">
        <SidebarContent />
      </nav>

      {/* Mobile drawer — only rendered while open */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-[60]">
          <div
            className="drawer-backdrop absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onCloseMobile}
          />
          <nav className="drawer-panel absolute left-0 top-0 h-full w-72 max-w-[80vw] flex flex-col bg-surface-base border-r border-border-subtle">
            <button
              onClick={onCloseMobile}
              aria-label="Close menu"
              className="absolute top-5 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-surface-highest/60 border border-border-subtle text-on-surface-variant hover:text-on-surface transition-colors"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
            <SidebarContent onNavigate={onCloseMobile} />
          </nav>
        </div>
      )}
    </>
  );
}
