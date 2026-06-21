const colorClasses = {
  secondary: "bg-secondary/10 text-secondary",
  tertiary: "bg-tertiary/10 text-tertiary border border-tertiary/30",
  primary: "bg-primary-container/10 text-primary",
};

export default function Badge({ children, color = "secondary" }) {
  return (
    <span
      className={`px-2 py-1 rounded font-label-code text-[11px] uppercase tracking-wider ${colorClasses[color]}`}
    >
      {children}
    </span>
  );
}
