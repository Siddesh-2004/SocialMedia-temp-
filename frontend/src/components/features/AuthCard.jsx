import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../ui/Input";

export default function AuthCard() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Any non-empty email/password logs the user in and routes to the dashboard.
    if (email.trim() && password.trim()) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto lg:ml-auto perspective-1000">
      <div className="bg-surface-elevated/80 backdrop-blur-xl border border-border-subtle rounded-xl p-8 shadow-2xl relative transform transition-transform hover:-translate-y-2 duration-500">
        <div className="absolute -top-px left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
        <div className="text-center mb-8">
          <h3 className="font-headline-lg text-[24px] font-semibold text-on-surface">
            Join the Network
          </h3>
          <p className="text-on-surface-variant font-body-sm mt-2">
            Start collaborating today
          </p>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="block font-label-code text-label-code text-on-surface-variant mb-2">
              Email
            </label>
            <Input
              type="email"
              placeholder="dev@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-label-code text-label-code text-on-surface-variant mb-2">
              Password
            </label>
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary-container text-white px-4 py-3 rounded-lg font-button-text text-button-text hover:brightness-110 mt-2 transition-all"
          >
            Sign In
          </button>
        </form>
        <div className="relative my-6 flex items-center">
          <div className="flex-grow border-t border-border-subtle"></div>
          <span className="flex-shrink-0 mx-4 text-on-surface-variant font-label-code text-label-code">
            OR
          </span>
          <div className="flex-grow border-t border-border-subtle"></div>
        </div>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="flex-1 bg-transparent border border-border-subtle rounded-lg py-2 flex justify-center items-center gap-2 hover:bg-surface-variant transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">code</span>
            <span className="font-button-text text-button-text">GitHub</span>
          </button>
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="flex-1 bg-transparent border border-border-subtle rounded-lg py-2 flex justify-center items-center gap-2 hover:bg-surface-variant transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">mail</span>
            <span className="font-button-text text-button-text">Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}
