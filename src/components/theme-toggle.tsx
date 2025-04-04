"use client"

import { useTheme } from "@/components/theme-provider"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button 
      data-theme-toggle
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-5 w-5 p-0 transition-all duration-300 hover:bg-transparent"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </Button>
  )
}
