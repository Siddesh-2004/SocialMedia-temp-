const stats = [
  { label: "Projects", value: "6" },
  { label: "Hackathons", value: "9" },
  { label: "Followers", value: "214" },
];

const skills = ["React", "TypeScript", "WebGL", "Node.js", "Three.js"];

export default function Profile() {
  return (
    <div className="w-full max-w-3xl fade-in">
      <div className="bg-surface-elevated border border-border-subtle rounded-xl p-6 md:p-8 relative overflow-hidden mb-6">
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary-container/10 blur-[60px] rounded-full pointer-events-none"></div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 relative z-10">
          <img
            alt="Alex Dev"
            className="w-20 h-20 rounded-full border border-border-subtle"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxRcKNoDu5e2SzrYRh_RDU5-gTUXdZykEetsK1TDaFHMUsSmefOL4LRT38fKHQ5Ed9iiimZCJClybB0nHWhMKp9J7a4t_oHa-9Y8WZQgOOVJCeUpqoX554_PD6Tf__Rx9QahtHt9Z1AEKKfiqNmIVrv14wWDduYx1TaMhMH3xfU3Aaw_UTYyi_9hJ_vnfxJNzzcrCYEBpD3s1_j8HmPeey9r6PynJOCA6qam6PIgLt7jYzuFQ5kxDtjqD-x-Y_22t7TZwLMlyMXsU"
          />
          <div className="flex-1">
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
              Alex Dev
            </h1>
            <p className="font-body-sm text-body-sm text-tertiary">@alexdev</p>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-md">
              Frontend engineer obsessed with WebGL and real-time data viz.
              Always down for a weekend hackathon.
            </p>
          </div>
          <button className="bg-gradient-to-r from-primary-container to-secondary-container text-white px-5 py-2.5 rounded-lg font-button-text text-button-text hover:brightness-110 shadow-[0_0_12px_rgba(138,43,226,0.3)] transition-all whitespace-nowrap">
            Edit Profile
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border-subtle relative z-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-headline-lg text-headline-lg text-primary">
                {s.value}
              </div>
              <div className="font-label-code text-label-code text-on-surface-variant uppercase tracking-wider mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-surface-elevated border border-border-subtle rounded-xl p-6 md:p-8">
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-4 text-xl">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded-full bg-secondary/10 text-secondary font-label-code text-label-code text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
