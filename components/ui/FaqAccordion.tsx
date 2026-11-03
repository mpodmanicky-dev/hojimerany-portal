"use client";

import { useState } from "react";
import { FaqItem } from "@/constants/healingGuide";

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="bg-white shadow-xl rounded-2xl border border-clinical-blue/10 overflow-hidden"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-clinical-blue/5 transition-colors duration-200"
              aria-expanded={isOpen}
            >
              <span className="font-bold text-sm sm:text-base text-clinical-blue">
                {item.question}
              </span>
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center bg-clinical-blue/10 text-clinical-blue font-bold shrink-0 text-sm transition-colors duration-200 ${
                  isOpen ? "bg-accent-mint text-background" : ""
                }`}
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {isOpen && (
              <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-foreground/85 leading-relaxed border-t border-clinical-blue/5 pt-4">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

