import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import Input from "../ui/Input";

export default function AuthCard() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (email.trim() && password.trim()) {
      try {
        // Axios makes the POST request and automatically parses the JSON response
        const response = await axios.post('http://localhost:8000/api/users/login', 
          // 1. The Payload
          { 
            email: email, 
            password: password 
          }, 
          // 2. The Configuration Options
          {
            headers: {
              'Content-Type': 'application/json',
            },
            // THIS is the magic line that allows cookies to be sent and received!
            withCredentials: true 
          }
        );

        // Unlike fetch, Axios throws an error for bad status codes (401, 404, etc.)
        // So if the code reaches this line, the login was a guaranteed 200 OK success!
        console.log("Login successful!", response.data);
        navigate("/dashboard");
        
      } catch (error) {
        // Axios packs the server's error response inside error.response
        console.error("Login failed:", error.response?.data || error.message);
        
        if (error.response?.status === 401 || error.response?.status === 404) {
          alert("Invalid email or password.");
        } else {
          alert("Cannot connect to the server. Is the backend running?");
        }
      }
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
            onClick={() => console.log("GitHub OAuth not yet wired")}
            className="flex-1 bg-transparent border border-border-subtle rounded-lg py-2 flex justify-center items-center gap-2 hover:bg-surface-variant transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">code</span>
            <span className="font-button-text text-button-text">GitHub</span>
          </button>
          <button
            type="button"
            onClick={() => console.log("Google OAuth not yet wired")}
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