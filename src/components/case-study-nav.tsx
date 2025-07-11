"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

export function CaseStudyNav() {
  const [activeSection, setActiveSection] = useState("challenge");
  const pathname = usePathname();
  const isLoomyPage = pathname?.toLowerCase().includes("loomy") || false;

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "challenge",
        "research",
        "developing",
        isLoomyPage ? "wireframes" : "mid-fidelity",
        "design-system",
        "high-fidelity",
        isLoomyPage ? "avatar-story" : "final-solution",
        "reflection"
      ];
      
      // Find which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoomyPage]);

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border py-2 px-4 sm:px-6 md:ml-16">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between py-2 sm:py-4">
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors mb-3 sm:mb-0"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </Link>
        
        <div className="w-full sm:w-auto flex overflow-x-auto gap-3 sm:gap-4 text-xs sm:text-sm font-medium no-scrollbar pb-1 sm:pb-0">
          <a href="#challenge" className={`transition-colors whitespace-nowrap px-1 sm:px-2 ${activeSection === "challenge" ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}>The Challenge</a>
          <a href="#research" className={`transition-colors whitespace-nowrap px-1 sm:px-2 ${activeSection === "research" ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}>Research</a>
          <a href="#developing" className={`transition-colors whitespace-nowrap px-1 sm:px-2 ${activeSection === "developing" ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}>Developing</a>
          {isLoomyPage ? (
            <a href="#wireframes" className={`transition-colors whitespace-nowrap px-1 sm:px-2 ${activeSection === "wireframes" ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}>Wireframes</a>
          ) : (
            <a href="#mid-fidelity" className={`transition-colors whitespace-nowrap px-1 sm:px-2 ${activeSection === "mid-fidelity" ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}>Mid-Fidelity</a>
          )}
          <a href="#design-system" className={`transition-colors whitespace-nowrap px-1 sm:px-2 ${activeSection === "design-system" ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}>Design</a>
          <a href="#high-fidelity" className={`transition-colors whitespace-nowrap px-1 sm:px-2 ${activeSection === "high-fidelity" ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}>High-Fi</a>
          {isLoomyPage ? (
            <a href="#avatar-story" className={`transition-colors whitespace-nowrap px-1 sm:px-2 ${activeSection === "avatar-story" ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}>Avatar</a>
          ) : (
            <a href="#final-solution" className={`transition-colors whitespace-nowrap px-1 sm:px-2 ${activeSection === "final-solution" ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}>Final</a>
          )}
          <a href="#reflection" className={`transition-colors whitespace-nowrap px-1 sm:px-2 ${activeSection === "reflection" ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}>Reflection</a>
        </div>
      </div>
    </div>
  );
}