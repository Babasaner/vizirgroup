"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FavoriteButtonProps {
  projectId: string
  className?: string
  size?: "sm" | "md" | "lg"
  onFavoriteChange?: (isFavorite: boolean) => void
}

export default function FavoriteButton({ projectId, className, size = "md", onFavoriteChange }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Tailles des icônes selon la prop size
  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 20,
  }

  // Classes selon la prop size
  const buttonClasses = {
    sm: "h-6 w-6 sm:h-7 sm:w-7",
    md: "h-8 w-8 sm:h-9 sm:w-9",
    lg: "h-10 w-10 sm:h-11 sm:w-11",
  }

  // Vérifier si nous sommes côté client pour éviter les erreurs d'hydratation
  useEffect(() => {
    setIsClient(true)
    const favorites = JSON.parse(localStorage.getItem("vizir-favorites") || "[]")
    setIsFavorite(favorites.includes(projectId))
  }, [projectId])

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault() // Empêcher la navigation si le bouton est dans un lien
    e.stopPropagation() // Empêcher la propagation de l'événement

    const favorites = JSON.parse(localStorage.getItem("vizir-favorites") || "[]")
    let newFavorites

    if (isFavorite) {
      newFavorites = favorites.filter((id: string) => id !== projectId)
    } else {
      newFavorites = [...favorites, projectId]
    }

    localStorage.setItem("vizir-favorites", JSON.stringify(newFavorites))
    setIsFavorite(!isFavorite)

    // Notifier le parent du changement si nécessaire
    if (onFavoriteChange) {
      onFavoriteChange(!isFavorite)
    }
  }

  // Ne rien rendre côté serveur pour éviter les erreurs d'hydratation
  if (!isClient) {
    return null
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        buttonClasses[size],
        "rounded-full bg-background/80 backdrop-blur-sm border-primary/30 hover:bg-background/90 transition-all",
        isFavorite ? "text-primary border-primary" : "text-muted-foreground",
        className,
      )}
      onClick={toggleFavorite}
      aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
      title={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
    >
      <Heart
        size={iconSizes[size]}
        className={cn("transition-all", isFavorite ? "fill-primary scale-110" : "fill-none scale-100")}
      />
    </Button>
  )
}
