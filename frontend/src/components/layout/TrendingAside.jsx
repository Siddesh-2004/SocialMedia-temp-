export default function TrendingAside() {
  return (
    <aside className="hidden lg:flex flex-col w-80 border-l border-border-subtle bg-glass-fill backdrop-blur-md p-6 overflow-y-auto">
      <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-6">
        Trending Grid
      </h2>
      <div className="mb-8">
        <h3 className="font-label-code text-label-code text-outline uppercase tracking-wider mb-4">
          Active Hackathons
        </h3>
        <div className="flex flex-col gap-3">
          <a
            className="group p-3 rounded-lg border border-border-subtle bg-surface-base hover:border-tertiary/50 transition-colors"
            href="#"
          >
            <div className="flex justify-between items-start mb-1">
              <span className="font-button-text text-button-text text-on-surface group-hover:text-tertiary transition-colors">
                Web3 Buildathon
              </span>
              <span className="flex items-center gap-1 text-tertiary font-label-code text-[10px]">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>{" "}
                LIVE
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant text-xs">
              2,401 participants
            </p>
          </a>
          <a
            className="group p-3 rounded-lg border border-border-subtle bg-surface-base hover:border-primary/50 transition-colors"
            href="#"
          >
            <div className="flex justify-between items-start mb-1">
              <span className="font-button-text text-button-text text-on-surface group-hover:text-primary transition-colors">
                Space Apps Challenge
              </span>
              <span className="text-outline font-label-code text-[10px]">
                Starts in 2d
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant text-xs">
              850 participants
            </p>
          </a>
        </div>
      </div>
      <div>
        <h3 className="font-label-code text-label-code text-outline uppercase tracking-wider mb-4">
          Top Discussions
        </h3>
        <div className="flex flex-col gap-4">
          <div className="flex gap-3 items-start">
            <span className="font-label-code text-primary mt-0.5">01</span>
            <div>
              <a
                className="font-body-sm text-body-sm text-on-surface hover:text-primary transition-colors line-clamp-2 leading-tight mb-1"
                href="#"
              >
                Optimizing React re-renders in large scale data grids?
              </a>
              <span className="font-label-code text-[10px] text-on-surface-variant">
                42 comments
              </span>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="font-label-code text-tertiary mt-0.5">02</span>
            <div>
              <a
                className="font-body-sm text-body-sm text-on-surface hover:text-tertiary transition-colors line-clamp-2 leading-tight mb-1"
                href="#"
              >
                Thoughts on the new Bun 1.0 release for backend services.
              </a>
              <span className="font-label-code text-[10px] text-on-surface-variant">
                128 comments
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
