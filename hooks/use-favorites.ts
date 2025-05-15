"use client"

import { useState, useEffect } from "react"

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Charger les favoris depuis localStorage au montage du composant
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("vizir-favorites") || "[]")
    setFavorites(storedFavorites)
    setIsLoaded(true)
  }, [])

  // Ajouter un projet aux favoris
  const addFavorite = (projectId: string) => {
    const newFavorites = [...favorites, projectId]
    localStorage.setItem("vizir-favorites", JSON.stringify(newFavorites))
    setFavorites(newFavorites)
    return newFavorites
  }

  // Retirer un projet des favoris
  const removeFavorite = (projectId: string) => {
    const newFavorites = favorites.filter((id) => id !== projectId)
    localStorage.setItem("vizir-favorites", JSON.stringify(newFavorites))
    setFavorites(newFavorites)
    return newFavorites
  }

  // Vérifier si un projet est dans les favoris
  const isFavorite = (projectId: string) => {
    return favorites.includes(projectId)
  }

  // Basculer l'état favori d'un projet
  const toggleFavorite = (projectId: string) => {
    if (isFavorite(projectId)) {
      return removeFavorite(projectId)
    } else {
      return addFavorite(projectId)
    }
  }

  return {
    favorites,
    isLoaded,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
  }
}
