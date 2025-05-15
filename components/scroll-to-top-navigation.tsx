"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTopNavigation() {
  const pathname = usePathname()

  // Remonter en haut de la page à chaque changement de route
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant", // Utiliser "instant" au lieu de "smooth" pour éviter les conflits avec les transitions
    })
  }, [pathname])

  return null
}
