import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-desktop h-16 bg-glass-fill backdrop-blur-md border-b border-border-subtle transition-all">
      <div className="flex items-center gap-8">
        <Link className="flex items-center gap-2" to="/">
          <span className="font-display-lg text-display-lg font-bold text-primary tracking-tighter text-[24px]">
            kNITTEd
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-on-surface-variant font-button-text text-button-text hover:text-primary transition-colors">
          Login
        </button>
        <button className="bg-gradient-to-r from-primary-container to-secondary-container text-white px-4 py-2 rounded-lg font-button-text text-button-text hover:brightness-110 shadow-[0_0_12px_rgba(138,43,226,0.3)] transition-all">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
