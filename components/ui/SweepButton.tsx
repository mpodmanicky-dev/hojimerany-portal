import React from "react";
import Link from "next/link";

export type SweepVariant = "clinical" | "mint" | "teal" | "solid-clinical" | "mesitran";

interface SweepBaseProps {
  variant?: SweepVariant;
  className?: string;
  children: React.ReactNode;
}

const VARIANT_STYLES: Record<
  SweepVariant,
  {
    container: string;
    sweep: string;
    text: string;
    textHover: string;
  }
> = {
  clinical: {
    container: "border border-clinical-blue text-clinical-blue bg-white shadow-md",
    sweep: "bg-clinical-blue",
    text: "text-clinical-blue",
    textHover: "group-hover:text-white",
  },
  mint: {
    container: "border border-accent-mint text-clinical-blue bg-white shadow-md",
    sweep: "bg-accent-mint",
    text: "text-clinical-blue",
    textHover: "group-hover:text-clinical-blue",
  },
  teal: {
    container: "border border-accent-teal text-accent-teal bg-white shadow-md",
    sweep: "bg-accent-teal",
    text: "text-accent-teal",
    textHover: "group-hover:text-white",
  },
  "solid-clinical": {
    container: "border border-clinical-blue bg-clinical-blue text-white shadow-md",
    sweep: "bg-accent-teal",
    text: "text-white",
    textHover: "group-hover:text-white",
  },
  mesitran: {
    container: "border border-amber-500/60 text-amber-900 bg-amber-50/50 shadow-md",
    sweep: "bg-amber-600",
    text: "text-amber-900",
    textHover: "group-hover:text-white",
  },
};

export interface SweepButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: SweepVariant;
}

export function SweepButton({
  variant = "clinical",
  className = "",
  children,
  ...props
}: SweepButtonProps) {
  const v = VARIANT_STYLES[variant];

  return (
    <button
      {...props}
      className={`group relative overflow-hidden rounded-full px-6 py-3 font-bold text-sm tracking-wide inline-flex items-center justify-center gap-2 transition-all duration-300 select-none ${v.container} ${className}`}
    >
      {/* Background sweep progress layer moving left to right */}
      <span
        className={`absolute inset-y-0 left-0 w-0 ${v.sweep} transition-all duration-300 ease-out group-hover:w-full`}
        aria-hidden="true"
      />
      {/* Foreground content */}
      <span
        className={`relative z-10 inline-flex items-center justify-center gap-2 transition-colors duration-200 ${v.text} ${v.textHover}`}
      >
        {children}
      </span>
    </button>
  );
}

export interface SweepLinkProps extends SweepBaseProps {
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export function SweepLink({
  href,
  variant = "clinical",
  className = "",
  children,
  target,
  rel,
  onClick,
}: SweepLinkProps) {
  const v = VARIANT_STYLES[variant];

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-full px-6 py-3 font-bold text-sm tracking-wide inline-flex items-center justify-center gap-2 transition-all duration-300 select-none ${v.container} ${className}`}
    >
      <span
        className={`absolute inset-y-0 left-0 w-0 ${v.sweep} transition-all duration-300 ease-out group-hover:w-full`}
        aria-hidden="true"
      />
      <span
        className={`relative z-10 inline-flex items-center justify-center gap-2 transition-colors duration-200 ${v.text} ${v.textHover}`}
      >
        {children}
      </span>
    </Link>
  );
}
