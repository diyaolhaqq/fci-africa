"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/content";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="grid gap-3">
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="rounded-lg border border-line bg-white/[0.035]">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="focus-ring flex w-full items-center justify-between gap-4 rounded-lg px-5 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-foreground">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-accent transition ${isOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-7 text-muted">{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
