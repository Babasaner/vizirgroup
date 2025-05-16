"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export default function PageTransitionFix() {
  const pathname = usePathname()
 let params = new URLSearchParams(document.location.search);

  useEffect(() => {
    // Ajouter une classe au body pendant la transition de page
    document.body.classList.add("page-transition-active")

    // Retirer la classe après un court délai pour permettre au rendu de se stabiliser
    const timer = setTimeout(() => {
      document.body.classList.remove("page-transition-active")
    }, 100)

    return () => {
      clearTimeout(timer)
      document.body.classList.remove("page-transition-active")
    }
  }, [pathname, params])

  return null
}
