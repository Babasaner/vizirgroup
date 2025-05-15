"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import { useEffect, useState } from "react"

interface LogoProps {
  width?: number
  height?: number
  className?: string
}

export default function Logo({ width = 120, height = 30, className = "" }: LogoProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Éviter les erreurs d'hydratation
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Rendu côté serveur ou pendant l'hydratation - utiliser le logo par défaut
    return (
      <div style={{ width, height }} className={className}>
        <Image src="/vizir-logo.png" alt="VIZIR GROUP" width={width} height={height} priority />
      </div>
    )
  }

  // Choisir le logo en fonction du thème
  const logoSrc = theme === "dark" ? "/vizir-logo.png" : "/vizir-logo-black.png"

  return (
    <div className={className}>
      <Image src={logoSrc || "/placeholder.svg"} alt="VIZIR GROUP" width={width} height={height} priority />
    </div>
  )
}
