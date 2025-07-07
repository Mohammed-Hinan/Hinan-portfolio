import React from "react";

interface GlassTopBarProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassTopBar({ children, className = "" }: GlassTopBarProps) {
  return (
    <div
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90vw] max-w-3xl bg-white/20 dark:bg-background/30 backdrop-blur-lg border border-white/30 dark:border-border shadow-lg rounded-3xl px-6 py-3 flex items-center justify-between ${className}`}
      style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)", border: "1px solid rgba(255,255,255,0.18)" }}
    >
      {children}
    </div>
  );
} 