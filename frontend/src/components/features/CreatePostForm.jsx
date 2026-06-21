import { useState } from "react";
import Input from "../ui/Input";

export default function CreatePostForm() {
  const [postType, setPostType] = useState("events");

  return (
    <div className="bg-surface-elevated border border-border-subtle rounded-xl p-6 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary-container/5 blur-[60px] rounded-full"></div>
      <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-6 relative z-10">
        Create a New Post
      </h2>
      <div className="mb-6 relative z-10">
        <label className="block font-label-code text-label-code text-on-surface-variant mb-2">
          Post Type
        </label>
        <select
          className="w-full bg-[#050505] border border-border-subtle rounded-lg py-3 px-4 text-on-surface focus:outline-none focus:border-tertiary focus:shadow-[0_0_8px_rgba(0,255,255,0.3)] transition-all font-body-md"
          value={postType}
          onChange={(e) => setPostType(e.target.value)}
        >
          <option value="events">Event</option>
          <option value="teammates">Teammate Request</option>
          <option value="buddies">Coding Buddy</option>
        </select>
      </div>

      {postType === "events" && (
        <form className="flex flex-col gap-4 relative z-10">
          <Input placeholder="Event Name" type="text" focusColor="primary" />
          <textarea
            className="w-full bg-[#050505] border border-border-subtle rounded-lg py-3 px-4 text-on-surface focus:outline-none focus:border-primary transition-all font-body-md placeholder-outline-variant min-h-[100px]"
            placeholder="Description"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Venue / Online" type="text" focusColor="primary" />
            <Input type="date" focusColor="primary" />
          </div>
          <Input placeholder="Registration Link" type="url" focusColor="primary" />
          <button
            type="button"
            className="mt-4 w-full py-3 rounded-lg bg-gradient-to-r from-primary-container to-secondary-container text-white font-button-text text-button-text hover:brightness-110 hover:shadow-[0_0_16px_rgba(138,43,226,0.5)] transition-all"
          >
            Post Event
          </button>
        </form>
      )}

      {postType === "teammates" && (
        <form className="flex flex-col gap-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Team Size (e.g. 2/4)" type="text" focusColor="tertiary" />
            <select className="w-full bg-[#050505] border border-border-subtle rounded-lg py-3 px-4 text-on-surface focus:outline-none focus:border-tertiary transition-all font-body-md">
              <option>Online</option>
              <option>Offline</option>
            </select>
          </div>
          <Input
            placeholder="Required Skills (e.g. React, Node.js)"
            type="text"
            focusColor="tertiary"
          />
          <Input type="date" focusColor="tertiary" />
          <textarea
            className="w-full bg-[#050505] border border-border-subtle rounded-lg py-3 px-4 text-on-surface focus:outline-none focus:border-tertiary transition-all font-body-md placeholder-outline-variant min-h-[100px]"
            placeholder="Project Description"
          />
          <button
            type="button"
            className="mt-4 w-full py-3 rounded-lg bg-tertiary/20 border border-tertiary/50 text-tertiary hover:bg-tertiary/30 hover:shadow-[0_0_16px_rgba(0,255,255,0.3)] font-button-text text-button-text transition-all"
          >
            Find Teammates
          </button>
        </form>
      )}

      {postType === "buddies" && (
        <form className="flex flex-col gap-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder="Primary Language (e.g. Python)"
              type="text"
              focusColor="secondary"
            />
            <select className="w-full bg-[#050505] border border-border-subtle rounded-lg py-3 px-4 text-on-surface focus:outline-none focus:border-secondary transition-all font-body-md">
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <Input
            placeholder="Availability (e.g. Weekends, Evenings)"
            type="text"
            focusColor="secondary"
          />
          <textarea
            className="w-full bg-[#050505] border border-border-subtle rounded-lg py-3 px-4 text-on-surface focus:outline-none focus:border-secondary transition-all font-body-md placeholder-outline-variant min-h-[100px]"
            placeholder="Learning Goals"
          />
          <button
            type="button"
            className="mt-4 w-full py-3 rounded-lg bg-secondary-container/20 border border-secondary-container/50 text-secondary hover:bg-secondary-container/30 hover:shadow-[0_0_16px_rgba(68,143,255,0.3)] font-button-text text-button-text transition-all"
          >
            Find Buddy
          </button>
        </form>
      )}
    </div>
  );
}
