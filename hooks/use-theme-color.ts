"use client"

import { useState, useEffect } from "react"

// Définition des palettes de couleurs disponibles
export type ColorPalette = {
  id: string
  name: string
  primary: string
  primaryHue: number
  primarySaturation: number
  primaryLightness: number
  accent?: string
  accentHue?: number
  accentSaturation?: number
  accentLightness?: number
}

export const colorPalettes: ColorPalette[] = [
  {
    id: "gold",
    name: "Or",
    primary: "#c0a060",
    primaryHue: 36,
    primarySaturation: 30,
    primaryLightness: 60,
  },
  {
    id: "blue",
    name: "Bleu",
    primary: "#3b82f6",
    primaryHue: 217,
    primarySaturation: 91,
    primaryLightness: 60,
  },
  {
    id: "emerald",
    name: "Émeraude",
    primary: "#10b981",
    primaryHue: 160,
    primarySaturation: 84,
    primaryLightness: 39,
  },
  {
    id: "purple",
    name: "Violet",
    primary: "#8b5cf6",
    primaryHue: 259,
    primarySaturation: 90,
    primaryLightness: 66,
  },
  {
    id: "rose",
    name: "Rose",
    primary: "#f43f5e",
    primaryHue: 350,
    primarySaturation: 89,
    primaryLightness: 60,
  },
  {
    id: "amber",
    name: "Ambre",
    primary: "#f59e0b",
    primaryHue: 38,
    primarySaturation: 92,
    primaryLightness: 50,
  },
]

export function useThemeColor() {
  const [currentPalette, setCurrentPalette] = useState<ColorPalette>(colorPalettes[0])
  const [isLoaded, setIsLoaded] = useState(false)

  // Charger la préférence de couleur depuis localStorage au montage du composant
  useEffect(() => {
    const storedColorId = localStorage.getItem("vizir-color-theme")
    if (storedColorId) {
      const savedPalette = colorPalettes.find((palette) => palette.id === storedColorId)
      if (savedPalette) {
        setCurrentPalette(savedPalette)
        applyColorToDocumentRoot(savedPalette)
      }
    }
    setIsLoaded(true)
  }, [])

  // Appliquer les couleurs au document
  const applyColorToDocumentRoot = (palette: ColorPalette) => {
    const root = document.documentElement

    // Appliquer les variables de couleur primaire
    root.style.setProperty("--primary-hue", palette.primaryHue.toString())
    root.style.setProperty("--primary-saturation", `${palette.primarySaturation}%`)
    root.style.setProperty("--primary-lightness", `${palette.primaryLightness}%`)

    // Si la palette a des couleurs d'accent spécifiques, les appliquer aussi
    if (palette.accentHue !== undefined) {
      root.style.setProperty("--accent-hue", palette.accentHue.toString())
      root.style.setProperty("--accent-saturation", `${palette.accentSaturation}%`)
      root.style.setProperty("--accent-lightness", `${palette.accentLightness}%`)
    } else {
      // Sinon, utiliser la couleur primaire comme accent
      root.style.setProperty("--accent-hue", palette.primaryHue.toString())
      root.style.setProperty("--accent-saturation", `${palette.primarySaturation}%`)
      root.style.setProperty("--accent-lightness", `${palette.primaryLightness}%`)
    }
  }

  // Changer la palette de couleurs
  const changeColorPalette = (paletteId: string) => {
    const newPalette = colorPalettes.find((palette) => palette.id === paletteId)
    if (newPalette) {
      setCurrentPalette(newPalette)
      localStorage.setItem("vizir-color-theme", newPalette.id)
      applyColorToDocumentRoot(newPalette)
    }
  }

  return {
    currentPalette,
    colorPalettes,
    changeColorPalette,
    isLoaded,
  }
}
