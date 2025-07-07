"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

const SECTION_IDS = [
  "challenge",
  "research",
  "developing",
  "mid-fidelity",
  "wireframes",
  "design-system",
  "high-fidelity",
  "final-solution",
  "avatar-story",
  "reflection",
];

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      let found = false;
      for (const item of navItems) {
        const id = item.link.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            setActiveSection(id);
            found = true;
            break;
          }
        }
      }
      if (!found) setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <motion.div
      initial={{
        opacity: 1,
        y: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.2,
      }}
      className={cn(
        "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-3xl dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-10 py-4 items-center justify-center space-x-8",
        className
      )}
    >
      {navItems.map((navItem) => {
        const id = navItem.link.replace("#", "");
        const isActive = activeSection === id;
        return (
          <a
            key={navItem.link}
            href={navItem.link}
            className={cn(
              "relative flex items-center space-x-1 text-lg font-semibold px-6 py-3 transition-all duration-200",
              isActive
                ? "bg-gradient-to-r from-primary to-green-400 text-white rounded-2xl shadow-2xl ring-4 ring-primary/40 z-10"
                : "text-neutral-600 dark:text-neutral-50 opacity-60 hover:opacity-100 z-1"
            )}
            style={{
              zIndex: isActive ? 10 : 1,
            }}
          >
            <span>{navItem.name}</span>
          </a>
        );
      })}
    </motion.div>
  );
}; 