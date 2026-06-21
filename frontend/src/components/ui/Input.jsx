const focusClasses = {
  tertiary:
    "focus:border-tertiary focus:ring-1 focus:ring-tertiary focus:shadow-[0_0_8px_rgba(0,255,255,0.3)]",
  primary: "focus:border-primary",
  secondary: "focus:border-secondary",
};

export default function Input({ focusColor = "tertiary", className = "", ...rest }) {
  return (
    <input
      className={`w-full bg-[#050505] border border-border-subtle rounded-lg px-4 py-3 text-on-surface placeholder-outline-variant focus:outline-none transition-all font-body-sm ${focusClasses[focusColor]} ${className}`}
      {...rest}
    />
  );
}
