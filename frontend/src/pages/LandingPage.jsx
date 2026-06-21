import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AuthCard from "../components/features/AuthCard";

export default function LandingPage() {
  return (
    <div className="bg-surface-base text-on-surface font-body-md antialiased min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />
      <main className="flex-grow pt-16 flex flex-col">
        <section className="relative flex-grow flex items-center pt-20 pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-container rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-tertiary-container rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
          <div className="max-w-[container-max-width] mx-auto px-margin-mobile md:px-margin-desktop w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="flex flex-col gap-8">
              <h1 className="font-display-lg text-[48px] md:text-[64px] leading-tight font-bold tracking-tighter">
                Find Your Team.
                <br />
                <span className="text-gradient">Build Together.</span>
              </h1>
              <p className="text-on-surface-variant font-body-md text-[18px] md:text-[20px] max-w-xl">
                The ultimate collaboration platform for students, developers,
                and creators to connect, build, and grow.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <button className="bg-gradient-to-r from-primary-container to-secondary-container text-white px-8 py-3 rounded-lg font-button-text text-button-text hover:brightness-110 shadow-[0_0_16px_rgba(138,43,226,0.4)] transition-all flex items-center gap-2">
                  Get Started
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </button>
              </div>
              <div className="flex gap-8 mt-8 border-t border-border-subtle pt-8">
                <div>
                  <div className="font-headline-lg text-headline-lg text-primary">
                    12K+
                  </div>
                  <div className="font-label-code text-label-code text-on-surface-variant uppercase tracking-wider mt-1">
                    Developers
                  </div>
                </div>
                <div>
                  <div className="font-headline-lg text-headline-lg text-tertiary">
                    3K+
                  </div>
                  <div className="font-label-code text-label-code text-on-surface-variant uppercase tracking-wider mt-1">
                    Projects
                  </div>
                </div>
                <div>
                  <div className="font-headline-lg text-headline-lg text-secondary">
                    500+
                  </div>
                  <div className="font-label-code text-label-code text-on-surface-variant uppercase tracking-wider mt-1">
                    Hackathons
                  </div>
                </div>
              </div>
            </div>

            <AuthCard />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
