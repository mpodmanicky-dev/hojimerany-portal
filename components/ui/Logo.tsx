import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
  onClick?: () => void;
}

export default function Logo({
  className = "",
  size = "md",
  variant = "light",
  onClick,
}: LogoProps) {
  const isLight = variant === "light";
  const iconSize = size === "sm" ? 24 : size === "lg" ? 36 : 28;

  return (
    <Link
      href="/"
      onClick={onClick}
      className={`group inline-flex items-center gap-2.5 select-none transition-transform duration-200 hover:scale-[1.02] ${className}`}
    >
      {/* Geometric Emblem: Medical Cross fused with organic healing droplet */}
      <div
        style={{ width: iconSize, height: iconSize }}
        className="relative shrink-0 flex items-center justify-center rounded-xl bg-clinical-blue text-accent-mint shadow-xs transition-colors duration-200 group-hover:bg-accent-teal"
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full p-1"
        >
          {/* Subtle healing droplet silhouette */}
          <path
            d="M16 6C13.5 10 10 15 10 19.5C10 23.09 12.69 26 16 26C19.31 26 22 23.09 22 19.5C22 15 18.5 10 16 6Z"
            fill="currentColor"
            fillOpacity="0.2"
          />
          {/* Clinical cross */}
          <path
            d="M16 9V23M9 16H23"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          {/* Inner focus nucleus */}
          <circle cx="16" cy="16" r="1.8" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Styled Wordmark typography: hojime + rany */}
      <div className="flex items-baseline tracking-tight">
        <span
          className={`font-black text-xl sm:text-2xl tracking-tighter ${
            isLight ? "text-background" : "text-clinical-blue"
          }`}
        >
          hojime
        </span>
        <span
          className={`font-medium text-xl sm:text-2xl tracking-tighter transition-colors duration-200 ${
            isLight
              ? "text-clinical-blue group-hover:text-background"
              : "text-accent-teal group-hover:text-clinical-blue"
          }`}
        >
          rany
        </span>
        <span
          className={`text-[11px] font-mono font-bold ml-0.5 uppercase tracking-widest ${
            isLight ? "text-background/80" : "text-accent-teal"
          }`}
        >
          .sk
        </span>
      </div>
    </Link>
  );
}

