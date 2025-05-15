"use client"

import { useEffect } from "react"
import { colorPalettes } from "@/hooks/use-theme-color"

export default function ThemeInit() {
  useEffect(() => {
    // Récupérer la préférence de couleur depuis localStorage
    const storedColorId = localStorage.getItem("vizir-color-theme") || "gold"
    const savedPalette = colorPalettes.find((palette) => palette.id === storedColorId) || colorPalettes[0]

    // Appliquer les couleurs au document
    const root = document.documentElement
    root.style.setProperty("--primary-hue", savedPalette.primaryHue.toString())
    root.style.setProperty("--primary-saturation", `${savedPalette.primarySaturation}%`)
    root.style.setProperty("--primary-lightness", `${savedPalette.primaryLightness}%`)

    if (savedPalette.accentHue !== undefined) {
      root.style.setProperty("--accent-hue", savedPalette.accentHue.toString())
      root.style.setProperty("--accent-saturation", `${savedPalette.accentSaturation}%`)
      root.style.setProperty("--accent-lightness", `${savedPalette.accentLightness}%`)
    } else {
      root.style.setProperty("--accent-hue", savedPalette.primaryHue.toString())
      root.style.setProperty("--accent-saturation", `${savedPalette.primarySaturation}%`)
      root.style.setProperty("--accent-lightness", `${savedPalette.primaryLightness}%`)
    }
  }, [])

  return null
}
