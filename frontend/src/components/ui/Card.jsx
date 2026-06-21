export default function Card({ className = "", children, ...rest }) {
  return (
    <div
      className={`bg-surface-elevated border border-border-subtle rounded-xl relative overflow-hidden ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
