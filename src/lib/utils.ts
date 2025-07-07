import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { GlassTopBar } from "@/components/GlassTopBar";
import { CaseStudyNav } from "@/components/case-study-nav";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
