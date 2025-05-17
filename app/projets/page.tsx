"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"
import { Grid2X2, List, ArrowUpRight, Heart, Map, Home, Building2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import FavoriteButton from "@/components/favorite-button"
import { useFavorites } from "@/hooks/use-favorites"
import { cn } from "@/lib/utils"
import MapView from "@/components/map-view"
import CategoryBadge from "@/components/category-badge"

// Types pour les projets
type ProjectCategory = "all" | "residential" | "commercial" | "favorites"
type ViewMode = "masonry" | "list" | "map"
type SortOption = "newest" | "oldest" | "name-asc" | "name-desc" | "location"

interface Project {
  id: string
  title: string
  description: string
  category: "residential" | "commercial"
  image: string
  location: string
  year: number
  aspectRatio?: "portrait" | "landscape" | "square" | "wide" | "tall"
  featured?: boolean
  coordinates: {
    lat: number
    lng: number
  }
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all")
  const [viewMode, setViewMode] = useState<ViewMode>("masonry")
  const [sortBy, setSortBy] = useState<SortOption>("newest")
  const [projects, setProjects] = useState<Project[]>([])
  const { favorites, isLoaded: favoritesLoaded } = useFavorites()
  const [isClient, setIsClient] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Vérifier si nous sommes côté client
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Simuler les données de projets avec différents ratios d'aspect et coordonnées
  useEffect(() => {
    const projectsData: Project[] = [
      {
        id: "halys",
        title: "HALYS RESIDENCE",
        description:
          "Un complexe résidentiel de luxe avec des finitions haut de gamme et des espaces communs élégants.",
        category: "residential",
        image: "/projet_galerie/halys/halys_facade.webp",
        location: "Guinée Conakry",
        year: 2022,
        featured: true,
        coordinates: {
          lat: 33.5731,
          lng: -7.6298,
        },
      },
    
  {
    id: "sanou-lodge",
    title: "SANOU LODGE",
    description: "Complexe résidentiel moderne offrant des espaces de vie lumineux et une architecture épurée.",
    category: "residential",
    image: "https://www.vizirgroup.com/wp-content/uploads/2025/05/facade-v4.jpg",
    location: "Dakar",
    year: 2023,
    featured: false,
    coordinates: {
      lat: 14.6928,
      lng: -17.4467,
    },
  },

  {
    id: "elcamino",
    title: "HACIENDA EL CAMINO",
    description: "La Hacienda El Camino, située à Nguerigne, M'bour, offre un refuge paisible loin de l'agitation urbaine.",
    category: "residential",
    image: "/projet_galerie/el-camino/elcamino1.webp",
    location: "Nguerigne - M'bour – Sénégal",
    year: 2024,
    featured: false,
    coordinates: {
      lat: 14.6928,
      lng: -17.4467,
    },
  },
  {
    id: "wabi",
    title: "WABI",
    description: "Résidence haut de gamme avec des finitions de luxe et des équipements modernes.",
    category: "residential",
    image: "/projet_galerie/wabi/wabi_façade.webp",
    location: "Congo",
    year: 2024,
    featured: true,
    coordinates: {
      lat: 14.6928,
      lng: -17.4467,
    },
  },
  {
    id: "les-abbesses",
    title: "LES ABBESSES",
    description: "Ensemble résidentiel offrant des appartements spacieux et bien situés.",
    category: "residential",
    image: "/projet_galerie/abbesses/facade-2-av-gig-gigapixel-hq-scale-2_00x.webp",
    location: "Dakar",
    year: 2023,
    featured: false,
    coordinates: {
      lat: 14.6928,
      lng: -17.4467,
    },
  },
  {
    id: "spi-tower",
    title: "SPI TOWER",
    description: "SPI Tower est un immeuble résidentiel moderne situé au cœur du Congo. Conçu avec un design soigné et une organisation bien pensée, il offre des appartements spacieux et lumineux, chacun doté de balcons permettant de profiter d'une vue dégagée sur la ville. ",
    category: "residential",
    image: "/projet_galerie/spi-tower/spi-tower-facade.webp",
    location: "Congo",
    year: 2025,
    featured: true,
    coordinates: {
      lat: 14.6928,
      lng: -17.4467,
    },
  },
  {
    id: "e-loft",
    title: "E LOFT",
    description: "Espaces de travail collaboratifs offrant flexibilité et connectivité pour les professionnels.",
    category: "residential",
    image: "/projet_galerie/e-loft/e-loft-1.webp",
    location: "Dakar",
    year: 2024,
    featured: false,
    coordinates: {
      lat: 14.6928,
      lng: -17.4467,
    },
  },
  {
    id: "mbadone",
    title: "MBADONE",
    description: "MBADONE est un immeuble résidentiel haut de gamme située à Abidjan, alliant design moderne, façades végétalisées et matériaux de qualité.",
    category: "residential",
    image: "/projet_galerie/mbadone/mbadone-1.webp",
    location: "Abidjan, Côte d'Ivoire",
    year: 2023,
    featured: true,
    coordinates: {
      lat: 14.6928,
      lng: -17.4467,
    },
  },

  {
id: "asante",
title: "Asante",
description: "Située à Somone, Asante est une cité résidentielle moderne alliant élégance, confort et cadre tropical.",    
category: "residential",
image: "/projet_galerie/asante/Hall.webp",
location: "Dakar",
year: 2022,
featured: true,  
coordinates: {
  lat: 14.6928,
  lng: -17.4467,
}
  },
  {
    id: "villa-b-coulibaly",
    title: "VILLA B. COULIBALY",
    description: "L'architecture de cette villa a été conçue en tenant compte des moindres détails et des préférences du client. Elle est composé de pièces majestueuses à l’intérieur et d’une très grande terrasse avec piscine accompagné d’un beau salon extérieur.",
    category: "residential",
    image: "/projet_galerie/villa_b_coulibaly/villa-b-c1.jpg",
    location: "Dakar",
    year: 2022,
    featured: false,
    coordinates: {
      lat: 14.6928,
      lng: -17.4467,
    },
  },
  {
    id: "villa-coulibaly-2",
    title: "Villa Coulibaly 2",
    description: "Extension moderne de la villa Coulibaly avec des espaces supplémentaires et une vue panoramique.",
    category: "residential",
    image: "/projet_galerie/villa_b_coulibaly/villa_b_coulibaly2/villa-coulibaly-2.jpg",
    location: "Dakar",
    year: 2024,
    featured: true,
    coordinates: {
      lat: 14.6928,
      lng: -17.4467,
    },
  },
  {
    id: "immeuble-win-win",
    title: "IMMEUBLE WIN WIN",
    description: "Immeuble commercial offrant des espaces de bureaux flexibles et bien situés.",
    category: "residential",
    image: "/projet_galerie/win-win/win_win-1.webp",
    location: "CITE KEUR GORGUI - MERMOZ SACRE CŒUR - DAKAR",
    year: 2023,
    featured: false,
    coordinates: {
      lat: 14.6928,
      lng: -17.4467,
    },
  }

    ]

    setProjects(projectsData)
  }, [])

  // Filtrer les projets par catégorie et favoris
  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "all") return true
    if (activeCategory === "favorites") return favorites.includes(project.id)
    return project.category === activeCategory
  })

  // Trier les projets selon l'option sélectionnée
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return b.year - a.year
      case "oldest":
        return a.year - b.year
      case "name-asc":
        return a.title.localeCompare(b.title)
      case "name-desc":
        return b.title.localeCompare(a.title)
      case "location":
        return a.location.localeCompare(b.location)
      default:
        return 0
    }
  })

  // Fonction pour déterminer les classes CSS en fonction du ratio d'aspect
  const getAspectRatioClasses = (project: Project) => {
    const baseClasses =
      "group relative overflow-hidden transform transition-transform duration-300 hover:z-10 hover:shadow-xl"

    // Sur les petits écrans, tous les éléments prennent une colonne complète
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      return `${baseClasses} col-span-1`
    }

    switch (project.aspectRatio) {
      case "portrait":
        return `${baseClasses} col-span-1 sm:row-span-2`
      case "landscape":
        return `${baseClasses} col-span-1 sm:col-span-2`
      case "square":
        return `${baseClasses} col-span-1`
      case "wide":
        return `${baseClasses} col-span-1 sm:col-span-2 sm:row-span-2`
      case "tall":
        return `${baseClasses} col-span-1 sm:row-span-3`
      default:
        return `${baseClasses} col-span-1`
    }
  }

  // Fonction pour déterminer les classes de hauteur en fonction du ratio d'aspect
  const getHeightClass = (project: Project) => {
    // Sur les petits écrans, hauteur fixe pour tous les éléments
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      return "h-[250px]"
    }

    switch (project.aspectRatio) {
      case "portrait":
        return "h-[300px] sm:h-[400px] md:h-[500px]"
      case "landscape":
        return "h-[200px] sm:h-[250px] md:h-[300px]"
      case "square":
        return "h-[250px] sm:h-[300px]"
      case "wide":
        return "h-[250px] sm:h-[400px] md:h-[500px]"
      case "tall":
        return "h-[350px] sm:h-[500px] md:h-[600px]"
      default:
        return "h-[250px] sm:h-[300px]"
    }
  }

  // Rendu de la vue masonry
  const renderMasonryView = () => (
    <div
      ref={ref}
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ${
        inView ? "animate-fade-in" : "opacity-0"
      }`}
      style={{
        display: "grid",
        gridTemplateRows: "masonry",
        gridAutoFlow: "dense",
      }}
    >
      {sortedProjects.map((project, index) => (
        <div
          key={project.id}
          className={`${getAspectRatioClasses(project)} ${
            inView ? `animate-slide-up stagger-${index % 5}` : "opacity-0"
          }`}
        >
          <Link href={`/projets/${project.id}`} className={`block ${getHeightClass(project)} w-full`}>
            <div className="relative h-full w-full overflow-hidden group">
              <Image
                src={project.image || "https://www.vizirgroup.com/wp-content/uploads/2022/11/Lika-2.png"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40"></div>

              {/* Badges de catégorie et favoris */}
              <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                <CategoryBadge category={project.category} size="md" />

                {/* Badge Favoris */}
                {isClient && favorites.includes(project.id) && <CategoryBadge category="favorite" size="md" />}
              </div>

              {/* Bouton Favoris */}
              {isClient && (
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FavoriteButton projectId={project.id} size="sm" className="sm:hidden" />
                  <FavoriteButton projectId={project.id} size="md" className="hidden sm:flex" />
                </div>
              )}

              {/* Titre permanent avec overlay amélioré */}
              <div className="project-card-overlay opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="project-title text-white text-base sm:text-lg md:text-xl line-clamp-2">
                  {project.title}
                </h3>
                <div className="flex justify-between items-center mt-2">
                </div>
              </div>

              {/* Informations supplémentaires au survol */}
              <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/40">
                <p className="text-white/90 text-sm sm:text-base line-clamp-4">{project.description}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )

  // Rendu de la vue liste
  const renderListView = () => (
    <div ref={ref} className={`space-y-6 md:space-y-8 ${inView ? "animate-fade-in" : "opacity-0"}`}>
      {sortedProjects.map((project, index) => (
        <Card
          key={project.id}
          className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${
            inView ? `animate-slide-up stagger-${index % 5}` : "opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <div className="relative h-[200px] sm:h-[250px] md:h-full">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Badges de catégorie et favoris */}
              <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                <CategoryBadge category={project.category} size="md" />

                {/* Badge Favoris */}
                {isClient && favorites.includes(project.id) && <CategoryBadge category="favorite" size="md" />}
              </div>
            </div>
            <div className="md:col-span-2 p-4 sm:p-6 flex flex-col justify-between">
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="text-xl sm:text-2xl font-semibold text-primary">{project.title}</h3>
                    {isClient && <FavoriteButton projectId={project.id} size="sm" />}
                  </div>
                  <div className="flex items-center gap-4 mt-1">
                    <p className="text-xs sm:text-sm text-muted-foreground">{project.location}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{project.year}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3 sm:line-clamp-none">{project.description}</p>
              </div>
              <div className="flex justify-end mt-4">
                <Link
                  href={`/projets/${project.id}`}
                  className="flex items-center gap-2 text-primary hover:underline group"
                >
                  <span>Voir le projet</span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )

  // Rendu de la vue carte
  const renderMapView = () => <MapView projects={sortedProjects} />

  // Afficher un message si aucun favori n'est trouvé
  const renderEmptyFavorites = () => (
    <div className="text-center py-12 space-y-4">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/50">
        <Heart size={32} className="text-muted-foreground" />
      </div>
      <h3 className="text-xl font-medium">Aucun projet favori</h3>
      <p className="text-muted-foreground max-w-md mx-auto">
        Vous n'avez pas encore ajouté de projets à vos favoris. Cliquez sur l'icône de cœur pour ajouter un projet à vos
        favoris.
      </p>
    </div>
  )

  return (
    <div>
      <div className="relative min-h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src="/projects-hero.png" alt="Nos Projets" fill className="object-cover brightness-[0.6]" />
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="vizir-heading text-white">Nos Projets</h1>
        </div>
      </div>

      <div className="container py-16 md:py-24">
        <div className="space-y-12 pb-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:justify-between sm:items-center">
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 md:gap-4">
              <Button
                variant={activeCategory === "all" ? "default" : "outline"}
                className={activeCategory === "all" ? "bg-primary text-primary-foreground" : "vizir-button"}
                onClick={() => setActiveCategory("all")}
              >
                Mixtes
              </Button>
              <Button
                variant={activeCategory === "residential" ? "default" : "outline"}
                className={cn(
                  activeCategory === "residential" ? "bg-blue-500 text-white border-blue-500" : "vizir-button",
                  "flex items-center gap-1",
                )}
                onClick={() => setActiveCategory("residential")}
              >
                <Home size={16} className="mr-1" />
                Résidentiel
              </Button>
              <Button
                variant={activeCategory === "commercial" ? "default" : "outline"}
                className={cn(
                  activeCategory === "commercial" ? "bg-emerald-600 text-white border-emerald-600" : "vizir-button",
                  "flex items-center gap-1",
                )}
                onClick={() => setActiveCategory("commercial")}
              >
                <Building2 size={16} className="mr-1" />
                Commercial
              </Button>
              <Button
                variant={activeCategory === "favorites" ? "default" : "outline"}
                className={cn(
                  activeCategory === "favorites" ? "bg-primary text-primary-foreground" : "vizir-button",
                  "flex items-center gap-1",
                )}
                onClick={() => setActiveCategory("favorites")}
              >
                <Heart size={16} className={activeCategory === "favorites" ? "fill-current" : ""} />
                Favoris
                {isClient && favorites.length > 0 && (
                  <span className="ml-1 text-xs bg-secondary/50 px-1.5 py-0.5 rounded-full">{favorites.length}</span>
                )}
              </Button>
            </div>

              <div className="flex justify-center gap-2">
                <Button
                  variant={viewMode === "masonry" ? "default" : "outline"}
                  size="icon"
                  className={viewMode === "masonry" ? "bg-primary text-primary-foreground" : ""}
                  onClick={() => setViewMode("masonry")}
                  title="Vue mosaïque"
                >
                  <Grid2X2 size={18} />
                  <span className="sr-only">Vue mosaïque</span>
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  className={viewMode === "list" ? "bg-primary text-primary-foreground" : ""}
                  onClick={() => setViewMode("list")}
                  title="Vue liste"
                >
                  <List size={18} />
                  <span className="sr-only">Vue liste</span>
                </Button>
                
              </div>
            </div>
          </div>
          <div className="transition-opacity duration-300">
            {sortedProjects.length > 0
              ? viewMode === "masonry"
                ? renderMasonryView()
                : viewMode === "list"
                  ? renderListView()
                  : renderMapView()
              : activeCategory === "favorites" && renderEmptyFavorites()}
          </div>
        </div>
      </div>
  )
}
