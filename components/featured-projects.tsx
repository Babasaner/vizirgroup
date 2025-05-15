"use client"

// Types pour les projets
interface Project {
  id: string
  title: string
  description: string
  category: "residential" | "commercial"
  image: string
  location: string
}

// Données de projets
const featuredProjects: Project[] = [
  {
    id: "halys",
    title: "HALYS RESIDENCE",
    description: "Un complexe résidentiel de luxe avec des finitions haut de gamme et des espaces communs élégants.",
    category: "residential",
    image: "/halys-residence.jpg",
    location: "Casablanca",
  },
  {
    id: "anfa-realties",
    title: "ANFA REALTIES",
    description: "Un projet immobilier moderne offrant des espaces de vie et de travail dans un quartier prisé.",
    category: "residential",
    image: "/anfa-realties.jpg",
    location: "Casablanca",
  },
  {
    id: "marina-tower",
    title: "MARINA TOWER",
    description: "Une tour emblématique avec des appartements de luxe offrant une vue imprenable sur l'océan.",
    category: "residential",
    image: "/marina-tower.jpg",
    location: "Casablanca",
  },
]

export default function FeaturedProjects() {
  return null
}
