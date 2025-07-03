"use client";

import { useSidebar } from "@/components/sidebar";
import { useEffect, useState } from "react";

interface ResponsiveContentProps {
  children: React.ReactNode;
}

export function ResponsiveContent({ children }: ResponsiveContentProps) {
  const { open } = useSidebar();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    // Check initial screen size
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div 
      className="relative transition-all duration-300"
      style={{
        marginLeft: isDesktop ? (open ? '300px' : '60px') : '0px'
      }}
    >
      {children}
    </div>
  );
}