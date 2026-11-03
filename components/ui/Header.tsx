"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { NAV_ROUTES } from "@/constants/routes";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="relative">
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-accent-mint/90 backdrop-blur-xl border-b border-accent-mint/30 px-6 py-4 sm:px-10 flex flex-row items-center justify-between transition-all duration-300 shadow-xs">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2 select-none"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-clinical-blue transition-transform duration-200 group-hover:scale-125" />
          <span className="text-background font-bold text-2xl tracking-tight transition-colors duration-200 group-hover:text-clinical-blue">
            Hojímerany
          </span>
        </Link>

        {/* Desktop Quick Nav + Toggle Button */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ROUTES.map((route) => {
              const isActive = pathname === route.href;
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className={`text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
                    isActive
                      ? "text-clinical-blue underline underline-offset-8 decoration-2 decoration-clinical-blue"
                      : "text-background hover:text-clinical-blue"
                  }`}
                >
                  {route.label}
                </Link>
              );
            })}
          </nav>

          {/* Animated Toggle Button (Hamburger <-> X) */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Zatvoriť menu" : "Otvoriť menu"}
            aria-expanded={open}
            className="w-11 h-11 rounded-full bg-background/15 hover:bg-background/30 flex flex-col items-center justify-center gap-1.5 transition-colors duration-200 cursor-pointer select-none"
          >
            <span
              className={`w-5 h-0.5 bg-background transition-all duration-300 ease-out origin-center ${
                open ? "rotate-45 translate-y-2 bg-clinical-blue" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-background transition-all duration-200 ease-out ${
                open ? "opacity-0 -translate-x-2" : "w-4 self-end mr-3"
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-background transition-all duration-300 ease-out origin-center ${
                open ? "-rotate-45 -translate-y-2 bg-clinical-blue" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Fullscreen Overlay Navigation (z-40 so header is always on top z-50, and covers hero) */}
      <div
        className={`fixed inset-0 z-40 bg-accent-mint flex flex-col justify-center items-center transition-all duration-300 ease-out ${
          open
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-8 max-w-md w-full px-6 text-center">
          <div className="flex flex-col items-center gap-1 mb-2">
            <span className="w-12 h-1 bg-clinical-blue mb-2" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-clinical-blue/70">
              Navigácia portálu
            </span>
          </div>

          {/* Links list */}
          <nav className="flex flex-col items-center gap-5 w-full">
            {NAV_ROUTES.map((route, idx) => {
              const isActive = pathname === route.href;
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setOpen(false)}
                  className={`group relative text-3xl sm:text-4xl font-bold uppercase tracking-tight py-2 transition-all duration-200 ${
                    isActive
                      ? "text-clinical-blue"
                      : "text-background hover:text-clinical-blue"
                  }`}
                  style={{
                    transitionDelay: open ? `${idx * 50}ms` : "0ms",
                  }}
                >
                  <span className="relative z-10">{route.label}</span>
                  {/* Subtle underline hover expansion */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-clinical-blue transition-all duration-300 ease-out ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Footer note in overlay */}
          <div className="pt-8 border-t border-background/20 w-full flex flex-col items-center gap-2 text-xs text-background/80">
            <p className="font-semibold text-clinical-blue">Hojímerany.sk</p>
            <p>Odborný sprievodca liečbou akútnych a chronických rán</p>
          </div>
        </div>
      </div>

      {/* Spacer to push content below fixed header */}
      <div className="h-20" />
    </div>
  );
}
