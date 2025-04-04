"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface PlaygroundCardProps {
  title: string
  description: string
  label: string
  icon: React.ReactNode
  href: string
  gradient: string
  comingSoon?: boolean
}

export function PlaygroundCard({
  title,
  description,
  label,
  icon,
  href,
  gradient,
  comingSoon = false
}: PlaygroundCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={cn(
        "relative overflow-hidden rounded-lg border border-border bg-card p-6",
        "h-full flex flex-col filter blur-[2px]"
      )}
    >
      {/* Overlay for coming soon */}
      <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-lg">
        <div className="bg-card p-4 rounded-lg shadow-lg text-center filter blur-0">
          <h3 className="text-xl font-bold text-primary">Coming Soon!</h3>
          <p className="text-sm text-muted-foreground mt-1">This feature is under development</p>
        </div>
      </div>

      <div className={cn(
        "absolute inset-0 opacity-5 bg-gradient-to-br",
        gradient
      )} />

      <div className="relative z-10 flex-1">
        <div className="mb-4 flex items-center justify-between">
          <div className={cn(
            "flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br",
            gradient
          )}>
            {icon}
          </div>
          <span className="text-xs px-2 py-1 bg-secondary rounded-full">
            {label}
          </span>
        </div>

        <h3 className="text-lg font-semibold mb-2">{title}</h3>

        <p className="text-sm text-muted-foreground mb-4">
          {description}
        </p>
      </div>

      {comingSoon ? (
        <div className="relative z-10 mt-auto">
          <span className="block text-center py-2 px-4 bg-secondary rounded text-sm font-medium cursor-not-allowed">
            Coming Soon
          </span>
        </div>
      ) : (
        <Link
          href={href}
          className="relative z-10 mt-auto block text-center py-2 px-4 bg-primary text-primary-foreground rounded text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Explore
        </Link>
      )}
    </motion.div>
  )
}
