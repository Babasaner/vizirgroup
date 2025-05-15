"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Settings, X } from "lucide-react"
import { useThemeColor, colorPalettes } from "@/hooks/use-theme-color"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false)
  const { currentPalette, changeColorPalette, isLoaded } = useThemeColor()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Éviter les erreurs d'hydratation
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isLoaded) {
    return null
  }

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 z-50 rounded-full h-10 w-10 shadow-md"
        onClick={() => setIsOpen(true)}
        aria-label="Personnaliser le thème"
      >
        <Settings className="h-5 w-5" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="absolute inset-0" onClick={() => setIsOpen(false)} aria-hidden="true" />
          <div className="relative z-10 w-full max-w-md rounded-lg bg-card p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Personnaliser le thème</h2>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Fermer">
                <X className="h-5 w-5" />
              </Button>
            </div>

            <Tabs defaultValue="colors">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="colors">Couleurs</TabsTrigger>
                <TabsTrigger value="theme">Thème</TabsTrigger>
              </TabsList>

              <TabsContent value="colors" className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Couleur principale</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {colorPalettes.map((palette) => (
                      <button
                        key={palette.id}
                        onClick={() => changeColorPalette(palette.id)}
                        className={cn(
                          "h-10 rounded-md flex items-center justify-center transition-all",
                          currentPalette.id === palette.id
                            ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                            : "hover:scale-105",
                        )}
                        style={{ backgroundColor: palette.primary }}
                        aria-label={`Thème ${palette.name}`}
                      >
                        <span className="sr-only">{palette.name}</span>
                      </button>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-1">
                    {colorPalettes.map((palette) => (
                      <div key={palette.id} className="text-xs text-center text-muted-foreground">
                        {palette.name}
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="theme" className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Mode d'affichage</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setTheme("light")}
                      className={cn(
                        "flex h-10 items-center justify-center rounded-md border border-border",
                        theme === "light" && "ring-2 ring-primary ring-offset-2 ring-offset-background",
                      )}
                    >
                      <span>Clair</span>
                    </button>
                    <button
                      onClick={() => setTheme("dark")}
                      className={cn(
                        "flex h-10 items-center justify-center rounded-md border border-border bg-secondary",
                        theme === "dark" && "ring-2 ring-primary ring-offset-2 ring-offset-background",
                      )}
                    >
                      <span>Sombre</span>
                    </button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6 flex justify-end">
              <Button onClick={() => setIsOpen(false)}>Fermer</Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
