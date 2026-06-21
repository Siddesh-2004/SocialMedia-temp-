import { useState } from "react";
import ToggleSwitcher from "../../components/features/ToggleSwitcher";
import ListItemCard from "../../components/features/ListItemCard";
import DetailModal from "../../components/features/DetailModal";
import CreatePostForm from "../../components/features/CreatePostForm";
import { events, teammates } from "../../data/mockData";

const filters = ["Events", "Teammates", "Buddies", "Projects"];

const feedItems = [
  { item: teammates[0], kind: "teammate" },
  { item: events[0], kind: "event" },
];

export default function Home() {
  const [view, setView] = useState("get");
  const [active, setActive] = useState(null);

  return (
    <div className="w-full max-w-3xl">
      <ToggleSwitcher active={view} onChange={setView} />

      {view === "get" && (
        <div className="fade-in" key="get">
          <div className="mb-8 flex flex-col gap-4">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
                search
              </span>
              <input
                className="w-full bg-[#050505] border border-border-subtle rounded-lg py-3 pl-12 pr-4 text-on-surface focus:outline-none focus:border-tertiary focus:shadow-[0_0_8px_rgba(0,255,255,0.3)] transition-all font-body-md text-body-md placeholder-outline"
                placeholder="Search the network..."
                type="text"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {filters.map((f, i) => (
                <button
                  key={f}
                  className={
                    i === 0
                      ? "whitespace-nowrap px-4 py-1.5 rounded-full bg-tertiary/10 border border-tertiary/30 text-tertiary font-label-code text-label-code shadow-[0_0_8px_rgba(0,255,255,0.1)]"
                      : "whitespace-nowrap px-4 py-1.5 rounded-full bg-surface-elevated border border-border-subtle text-on-surface-variant font-label-code text-label-code hover:text-on-surface hover:border-on-surface-variant transition-colors"
                  }
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {feedItems.map(({ item, kind }) => (
              <ListItemCard
                key={item.id}
                item={item}
                kind={kind}
                onOpen={setActive}
              />
            ))}
          </div>
        </div>
      )}

      {view === "post" && (
        <div className="fade-in w-full max-w-2xl mx-auto" key="post">
          <CreatePostForm />
        </div>
      )}

      <DetailModal item={active} onClose={() => setActive(null)} />
    </div>
  );
}
