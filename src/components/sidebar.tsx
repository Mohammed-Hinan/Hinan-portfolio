"use client";
import { cn } from "@/lib/utils";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

// Icons
import {
  Home,
  GamepadIcon,
  User,
  BookOpen,
  Linkedin,
  Mail,
  Layers
} from "lucide-react";

// Custom icons for Dribbble and Behance
const DribbbleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <g clipPath="url(#clip0_67_12)">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12c6.612 0 12-5.375 12-12S18.612 0 12 0zm7.926 5.531a10.202 10.202 0 0 1 2.317 6.378c-.338-.065-3.722-.755-7.132-.325-.079-.17-.144-.352-.222-.534a30.53 30.53 0 0 0-.676-1.484c3.774-1.536 5.492-3.748 5.713-4.035zM12 1.771c2.603 0 4.985.975 6.794 2.576-.182.26-1.731 2.33-5.375 3.696-1.68-3.084-3.54-5.61-3.827-6A10.424 10.424 0 0 1 12 1.77zm-4.36.962c.273.365 2.095 2.903 3.8 5.922-4.79 1.276-9.02 1.25-9.475 1.25.664-3.176 2.812-5.818 5.675-7.172zm-5.896 9.28v-.312c.443.013 5.414.078 10.53-1.458.299.573.572 1.158.832 1.744-.13.039-.273.078-.403.117-5.284 1.705-8.096 6.364-8.33 6.755a10.226 10.226 0 0 1-2.629-6.846zM12 22.256c-2.369 0-4.555-.807-6.286-2.16.182-.378 2.264-4.387 8.043-6.404.026-.013.04-.013.065-.026 1.445 3.735 2.03 6.872 2.187 7.77-1.237.534-2.59.82-4.009.82zm5.714-1.757c-.104-.625-.651-3.618-1.992-7.302 3.215-.507 6.026.326 6.378.443-.443 2.85-2.083 5.31-4.386 6.859z"/>
    </g>
    <defs>
      <clipPath id="clip0_67_12">
        <rect width="24" height="24"/>
      </clipPath>
    </defs>
  </svg>
);

const BehanceIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" strokeWidth="2" className="h-5 w-5">
    <g clipPath="url(#clip0_1599_271)">
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
    </g>
    <defs>
      <clipPath id="clip0_1599_271">
        <rect width="24" height="24"/>
      </clipPath>
    </defs>
  </svg>
);

interface Links {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
  external?: boolean;
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const SidebarWrapper = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<"div">)} />
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <>
      <motion.div
        className={cn(
          "h-full px-4 py-4 hidden md:flex md:flex-col bg-card border-r border-border w-[300px] shrink-0 fixed left-0 top-0 z-50",
          className
        )}
        animate={{
          width: animate ? (open ? "300px" : "60px") : "300px",
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        {...props}
      >
        {children}
      </motion.div>
    </>
  );
};

export const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const { open, setOpen } = useSidebar();
  return (
    <>
      <div
        className={cn(
          "h-10 px-4 py-4 flex flex-row md:hidden items-center justify-between bg-card border-b border-border w-full"
        )}
        {...props}
      >
        <div className="flex justify-end z-20 w-full">
          <IconMenu2
            className="text-foreground"
            onClick={() => setOpen(!open)}
          />
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={cn(
                "fixed h-full w-full inset-0 bg-background p-10 z-[100] flex flex-col justify-between",
                className
              )}
            >
              <div
                className="absolute right-10 top-10 z-50 text-foreground"
                onClick={() => setOpen(!open)}
              >
                <IconX />
              </div>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export const SidebarLink = ({
  link,
  className,
  ...props
}: {
  link: Links;
  className?: string;
}) => {
  const { open, animate } = useSidebar();
  return (
    <Link
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noreferrer noopener" : undefined}
      className={cn(
        "flex items-center group/sidebar py-2 rounded-md transition-colors duration-200 hover:bg-secondary",
        open ? "justify-start px-3 gap-2" : "justify-center px-0 gap-0",
        className
      )}
      {...props}
    >
      {link.icon}

      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="text-foreground text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
      >
        {link.label}
      </motion.span>
    </Link>
  );
};

// Main Sidebar Component with Navigation
export function SidebarWithContent() {
  const links: Links[] = [
    {
      label: "Home",
      href: "/",
      icon: <Home className="h-5 w-5" />,
    },
    {
      label: "Case Studies",
      href: "/#casestudies",
      icon: <Layers className="h-5 w-5" />,
    },
    {
      label: "Playground",
      href: "/playground",
      icon: <GamepadIcon className="h-5 w-5" />,
    },
    {
      label: "About Me",
      href: "/about-me",
      icon: <User className="h-5 w-5" />,
    },
    {
      label: "Read CV",
      href: "https://drive.google.com/file/d/14aii4GIyyTVmF07Eunf7PLCL-jwOw6lN/view?usp=sharing",
      icon: <BookOpen className="h-5 w-5" />,
      external: true,
    },
  ];

  const socialLinks: Links[] = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohammed-hinan-a-k-b54967223",
      icon: <Linkedin className="h-5 w-5" />,
      external: true,
    },
    {
      label: "Behance",
      href: "https://www.behance.net/hinanak",
      icon: <BehanceIcon />,
      external: true,
    },
    {
      label: "Dribbble",
      href: "https://dribbble.com/Mohammed_Hinan_AK",
      icon: <DribbbleIcon />,
      external: true,
    },
    {
      label: "Email",
      href: "mailto:mohammedhinanak@gmail.com",
      icon: <Mail className="h-5 w-5" />,
      external: true,
    },
  ];

  const { open } = useSidebar();

  return (
    <>
      <SidebarBody>
        <div className="flex flex-col h-full">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-8">
            <Link href="/" className="mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                <Image
                  src="/images/profile-photo.jpg"
                  alt="Mohammed Hinan A K"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
            <motion.div
              animate={{
                opacity: open ? 1 : 0,
                display: open ? "block" : "none",
              }}
              className="text-center"
            >
              <h3 className="text-sm font-medium">Mohammed Hinan A K</h3>
              <p className="text-xs text-muted-foreground">Designer</p>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 mb-8">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </nav>

          {/* Theme Toggle */}
          <div className="mb-4">
            <div
              className={cn(
                "flex items-center transition-colors duration-200 cursor-pointer hover:bg-secondary rounded-md py-2",
                open ? "justify-start px-3 gap-2" : "justify-center px-0 gap-0"
              )}
              onClick={() => {
                const themeToggleElement = document.querySelector('[data-theme-toggle]');
                if (themeToggleElement) {
                  (themeToggleElement as HTMLElement).click();
                }
              }}
            >
              <span className="flex items-center justify-center w-5 h-5">
                <ThemeToggle />
              </span>
              <motion.span
                animate={{
                  opacity: open ? 1 : 0,
                  display: open ? "inline-block" : "none",
                }}
                className="text-sm"
              >
                Toggle theme
              </motion.span>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-auto flex flex-col gap-2">
            {socialLinks.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </div>
      </SidebarBody>
    </>
  );
}
