import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import MobileHeader from "../components/layout/MobileHeader";
import TrendingAside from "../components/layout/TrendingAside";

export default function Dashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="bg-surface-base text-on-surface font-body-md min-h-screen flex overflow-hidden">
      <MobileHeader onOpenMenu={() => setMobileOpen(true)} />
      <Sidebar mobileOpen={mobileOpen} onCloseMobile={() => setMobileOpen(false)} />

      <main className="ml-0 md:ml-64 flex-1 flex h-screen pt-16 md:pt-0 bg-[#0A0C10] relative">
        <div className="flex-1 overflow-y-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12 flex flex-col items-center">
          <Outlet />
        </div>

        <TrendingAside />
      </main>
    </div>
  );
}
