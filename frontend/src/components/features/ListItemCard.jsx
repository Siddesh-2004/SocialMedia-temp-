import Badge from "../ui/Badge";

export default function ListItemCard({ item, kind, onOpen }) {
  return (
    <article
      onClick={() => onOpen(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen(item)}
      className="bg-surface-elevated border border-border-subtle rounded-xl p-6 hover:border-primary/40 cursor-pointer transition-colors duration-300 relative overflow-hidden group focus:outline-none focus:ring-1 focus:ring-primary/60"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 blur-[50px] rounded-full group-hover:bg-primary-container/10 transition-all"></div>

      <div className="flex items-start justify-between mb-4 relative z-10">
        <div className="flex items-center gap-3">
          {item.avatar ? (
            <img
              alt={item.name}
              className="w-12 h-12 rounded-full border border-border-subtle"
              src={item.avatar}
            />
          ) : (
            <div className="w-12 h-12 rounded-lg bg-surface-highest border border-border-subtle flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined text-2xl">
                {kind === "discussion" ? "forum" : kind === "project" ? "deployed_code" : "campaign"}
              </span>
            </div>
          )}
          <div>
            <h3 className="font-button-text text-button-text text-on-surface group-hover:text-primary transition-colors">
              {item.name || item.title}
            </h3>
            {(item.subtitle || item.badgeText) && (
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                {item.subtitle || item.badgeText}
              </span>
            )}
          </div>
        </div>
        <span className="font-label-code text-label-code text-outline-variant text-xs">
          {item.timeAgo}
        </span>
      </div>

      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4 relative z-10 line-clamp-3">
        {item.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4 relative z-10">
        {(item.tags || []).slice(0, 3).map((tag) => (
          <Badge key={tag} color="secondary">
            #{tag}
          </Badge>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-border-subtle relative z-10">
        <div className="flex gap-4 text-on-surface-variant font-button-text text-button-text">
          {item.likes != null && (
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-xl">favorite</span>
              {item.likes}
            </span>
          )}
          {item.comments != null && (
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-xl">chat_bubble</span>
              {item.comments}
            </span>
          )}
          {item.stars != null && (
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-xl">star</span>
              {item.stars}
            </span>
          )}
        </div>
        <span className="font-label-code text-label-code text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
          Details
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </span>
      </div>
    </article>
  );
}
