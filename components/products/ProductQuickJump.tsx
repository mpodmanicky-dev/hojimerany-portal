"use client";

import { useState } from "react";

export default function ProductQuickJump() {
  const [selected, setSelected] = useState("");

  const handleSelect = (val: string) => {
    setSelected(val);
    if (!val) return;
    const el = document.querySelector(val);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pt-2 w-full">
      {/* Mobilný Dropdown (sm:hidden) */}
      <div className="sm:hidden flex flex-col gap-1.5 w-full">
        <label
          htmlFor="product-jump-select"
          className="text-xs font-bold uppercase tracking-wider text-slate-500"
        >
          Rýchly skok na produkt:
        </label>
        <div className="relative w-full">
          <select
            id="product-jump-select"
            value={selected}
            onChange={(e) => handleSelect(e.target.value)}
            className="w-full appearance-none bg-white border border-slate-300 text-slate-800 text-sm font-semibold rounded-xl px-4 py-3 pr-10 shadow-xs focus:outline-none focus:ring-2 focus:ring-clinical-blue focus:border-clinical-blue transition-all cursor-pointer"
          >
            <option value="">Vyberte produkt alebo sekciu...</option>
            <option value="#aqvitox">1. Aqvitox-D roztok (Výplach & Biofilm)</option>
            <option value="#mesitran">2. L-Mesitran Soft gél (Medicínsky med)</option>
            <option value="#aqvidine">3. Aqvidine jódové krytie (Antiseptický tyl)</option>
            <option value="#protokol">4. Kombinačný protokol a tabuľka</option>
          </select>
          {/* Šípka dropdownu */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Desktop Pills (hidden sm:flex) */}
      <nav aria-label="Rýchly skok na produkt" className="hidden sm:flex flex-wrap items-center gap-2.5">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-1">
          Rýchly skok:
        </span>
        <a
          href="#aqvitox"
          className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#085E95]/10 text-[#085E95] hover:bg-[#085E95]/20 transition-colors"
        >
          1. Aqvitox-D (Výplach & Biofilm) ↓
        </a>
        <a
          href="#mesitran"
          className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#FCB900]/25 text-[#92400E] hover:bg-[#FCB900]/40 transition-colors"
        >
          2. L-Mesitran Soft (Medicínsky med) ↓
        </a>
        <a
          href="#aqvidine"
          className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#F26F01]/10 text-[#F26F01] hover:bg-[#F26F01]/20 transition-colors"
        >
          3. Aqvidine (Antiseptický tyl) ↓
        </a>
        <a
          href="#protokol"
          className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors"
        >
          Kombinačný protokol ↓
        </a>
      </nav>
    </div>
  );
}
