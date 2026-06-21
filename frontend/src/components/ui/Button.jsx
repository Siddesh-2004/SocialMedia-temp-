const variantClasses = {
  primary:
    "bg-gradient-to-r from-primary-container to-secondary-container text-white hover:brightness-110 shadow-[0_0_16px_rgba(138,43,226,0.4)]",
  secondary:
    "bg-transparent border border-border-subtle text-white hover:bg-surface-variant",
  ghost: "bg-transparent text-on-surface-variant hover:text-primary",
  outlineTertiary:
    "bg-tertiary/20 border border-tertiary/50 text-tertiary hover:bg-tertiary/30 hover:shadow-[0_0_16px_rgba(0,255,255,0.3)]",
  outlineSecondary:
    "bg-secondary-container/20 border border-secondary-container/50 text-secondary hover:bg-secondary-container/30 hover:shadow-[0_0_16px_rgba(68,143,255,0.3)]",
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}) {
  return (
    <button
      className={`px-4 py-3 rounded-lg font-button-text text-button-text transition-all ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
