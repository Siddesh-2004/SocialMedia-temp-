import { useEffect } from "react";
import Badge from "../ui/Badge";

export default function DetailModal({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="modal-pop bg-surface-elevated border border-border-subtle rounded-xl max-w-lg w-full max-h-[85vh] overflow-y-auto relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary-container/10 blur-[60px] rounded-full pointer-events-none"></div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-surface-highest/60 border border-border-subtle text-on-surface-variant hover:text-on-surface hover:border-primary/50 transition-colors"
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        <div className="p-6 relative z-10">
          {/* Header */}
          <div className="flex items-start gap-3 mb-4 pr-8">
            {item.avatar && (
              <img
                alt={item.name}
                src={item.avatar}
                className="w-12 h-12 rounded-full border border-border-subtle"
              />
            )}
            {!item.avatar && (item.bannerText || item.name) && (
              <div className="w-12 h-12 rounded-lg bg-surface-highest border border-border-subtle flex items-center justify-center text-tertiary shrink-0">
                <span className="material-symbols-outlined text-2xl">
                  {item.title ? "forum" : "campaign"}
                </span>
              </div>
            )}
            <div>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface leading-tight">
                {item.name || item.title}
              </h3>
              {item.subtitle && (
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {item.subtitle}
                </span>
              )}
              {item.badgeText && (
                <span className="font-body-sm text-body-sm text-tertiary flex items-center gap-1 mt-0.5">
                  <span className="material-symbols-outlined text-[14px]">
                    verified
                  </span>
                  {item.badgeText}
                </span>
              )}
            </div>
          </div>

          {item.timeAgo && (
            <p className="font-label-code text-label-code text-outline-variant text-xs mb-4">
              Posted {item.timeAgo}
            </p>
          )}

          {/* Banner for events/projects */}
          {item.bannerText && (
            <div className="h-28 w-full rounded-lg bg-surface-highest border border-border-subtle mb-4 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 to-surface-elevated"></div>
              <span className="font-display-lg text-display-lg text-primary/50 tracking-tighter text-3xl">
                {item.bannerText}
              </span>
            </div>
          )}

          {/* Description */}
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-5">
            {item.description}
          </p>

          {/* Meta grid */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            {item.venue && (
              <MetaRow icon="place" label="Venue" value={item.venue} />
            )}
            {item.date && (
              <MetaRow icon="event" label="Date" value={item.date} />
            )}
            {item.organizer && (
              <MetaRow icon="badge" label="Organizer" value={item.organizer} />
            )}
            {item.attendees && (
              <MetaRow icon="group" label="Attendees" value={item.attendees} />
            )}
            {item.teamSize && (
              <MetaRow icon="groups" label="Team Size" value={item.teamSize} />
            )}
            {item.mode && (
              <MetaRow icon="hub" label="Mode" value={item.mode} />
            )}
            {item.level && (
              <MetaRow icon="school" label="Level" value={item.level} />
            )}
            {item.availability && (
              <MetaRow
                icon="schedule"
                label="Availability"
                value={item.availability}
              />
            )}
            {item.status && (
              <MetaRow icon="bolt" label="Status" value={item.status} />
            )}
            {item.stars && (
              <MetaRow icon="star" label="Stars" value={item.stars} />
            )}
            {item.contributors && (
              <MetaRow
                icon="diversity_3"
                label="Contributors"
                value={item.contributors}
              />
            )}
            {item.comments != null && (
              <MetaRow
                icon="chat_bubble"
                label="Comments"
                value={item.comments}
              />
            )}
          </div>

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {item.tags.map((tag) => (
                <Badge key={tag} color="secondary">
                  #{tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Footer action */}
          <button className="w-full py-3 rounded-lg bg-gradient-to-r from-primary-container to-secondary-container text-white font-button-text text-button-text hover:brightness-110 hover:shadow-[0_0_16px_rgba(138,43,226,0.5)] transition-all">
            {item.venue
              ? "Register Now"
              : item.teamSize
              ? "Join Team"
              : item.level
              ? "Connect"
              : item.stars
              ? "View Project"
              : "Open Discussion"}
          </button>
        </div>
      </div>
    </div>
  );
}

function MetaRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-2">
      <span className="material-symbols-outlined text-tertiary text-lg mt-0.5">
        {icon}
      </span>
      <div>
        <div className="font-label-code text-label-code text-outline uppercase tracking-wider text-[10px]">
          {label}
        </div>
        <div className="font-body-sm text-body-sm text-on-surface">
          {value}
        </div>
      </div>
    </div>
  );
}
