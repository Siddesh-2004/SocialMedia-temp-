export default function ToggleSwitcher({ active, onChange }) {
  return (
    <div className="mb-10 w-full flex justify-center">
      <div className="bg-surface-elevated border border-border-subtle rounded-full p-1 flex relative shadow-lg">
        <div
          className="absolute inset-y-1 left-1 w-[100px] bg-glass-fill backdrop-blur-md border border-primary/30 rounded-full shadow-[0_0_12px_rgba(138,43,226,0.3)] transition-transform duration-300"
          style={{
            transform: active === "post" ? "translateX(100px)" : "translateX(0)",
          }}
        />
        <button
          className={`relative z-10 w-[100px] py-2 font-label-code text-label-code transition-colors ${
            active === "get"
              ? "text-primary font-bold"
              : "text-on-surface-variant hover:text-on-surface"
          }`}
          onClick={() => onChange("get")}
        >
          GET
        </button>
        <button
          className={`relative z-10 w-[100px] py-2 font-label-code text-label-code transition-colors ${
            active === "post"
              ? "text-primary font-bold"
              : "text-on-surface-variant hover:text-on-surface"
          }`}
          onClick={() => onChange("post")}
        >
          POST
        </button>
      </div>
    </div>
  );
}
