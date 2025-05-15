"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

interface ThemeToggleProps {
  className?: string
  variant?: "default" | "outline" | "ghost"
}

export function ThemeToggle({ className, variant = "outline" }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Éviter les erreurs d'hydratation
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant={variant}
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={className}
      aria-label={theme === "dark" ? "Passer au thème clair" : "Passer au thème sombre"}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">{theme === "dark" ? "Passer au thème clair" : "Passer au thème sombre"}</span>
    </Button>
  )
}
