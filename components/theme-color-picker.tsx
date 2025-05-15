"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Check, Palette } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useThemeColor, colorPalettes } from "@/hooks/use-theme-color"
import { cn } from "@/lib/utils"

interface ThemeColorPickerProps {
  className?: string
}

export function ThemeColorPicker({ className }: ThemeColorPickerProps) {
  const { currentPalette, changeColorPalette, isLoaded } = useThemeColor()
  const [mounted, setMounted] = useState(false)

  // Éviter les erreurs d'hydratation
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isLoaded) {
    return null
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={cn("relative", className)}
          aria-label="Changer les couleurs du thème"
        >
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span
            className="absolute bottom-1 right-1 h-2 w-2 rounded-full"
            style={{ backgroundColor: currentPalette.primary }}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {colorPalettes.map((palette) => (
          <DropdownMenuItem
            key={palette.id}
            onClick={() => changeColorPalette(palette.id)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="h-4 w-4 rounded-full" style={{ backgroundColor: palette.primary }} />
            <span>{palette.name}</span>
            {currentPalette.id === palette.id && <Check className="h-4 w-4 ml-auto" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
