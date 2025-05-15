"use client"

import { useState, useEffect } from "react"

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)

    // Définir la valeur initiale
    setMatches(media.matches)

    // Définir un callback pour mettre à jour l'état
    const listener = () => {
      setMatches(media.matches)
    }

    // Écouter les changements
    media.addEventListener("change", listener)

    // Nettoyer
    return () => {
      media.removeEventListener("change", listener)
    }
  }, [query])

  return matches
}
