"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Filter } from "lucide-react"
import CategoryBadge from "@/components/category-badge"
import FavoriteButton from "@/components/favorite-button"
import { cn } from "@/lib/utils"

// Types pour les projets
interface Project {
  id: string
  title: string
  description: string
  category: "residential" | "commercial"
  image: string
  location: string
  year: number
  featured: boolean
}

type FilterCategory = "all" | "residential" | "commercial"

export default function FeaturedProjectsGallery() {
  const [projects, setProjects] = useState<Project[]>([])
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all")
  const [isClient, setIsClient] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Vérifier si nous sommes côté client
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Simuler les données de projets
  useEffect(() => {
    const projectsData: Project[] = [
      {
        id: "halys",
        title: "HALYS RESIDENCE",
        description: "Établi à Conakry en Guinée, Halys est un immeuble résidentiel contemporain de 9 étages conçu pour offrir confort, sécurité et qualité de vie.",
        category: "residential",
        image: "https://www.vizirgroup.com/wp-content/uploads/2025/05/halys-_facade.webp",
        location: "Guinee Conakry",
        featured: true,
        year: 0
      },
      {
        id: "Sanoulodge",
        title: "Sanou Lodge",
        description: "Sanou Lodge est un ensemble résidentiel à l’architecture élégante et naturelle, pensé pour offrir un lieu de vie paisible et authentique.",
        category: "residential",
        image: "https://www.vizirgroup.com/wp-content/uploads/2025/05/facade-v4.jpg",
        location: "Dakar, Senegal",
        featured: true,
        year: 0
      },
      {
        id: "Les abbeses",
        title: "Les Abbeses",
        description: "Les Abbesses est un immeuble résidentiel de 7 étages avec mezzanine, situé à Sacré-Cœur, Dakar.",
        category: "residential",
        image: "https://www.vizirgroup.com/wp-content/uploads/2025/05/facade-2-av-gig-gigapixel-hq-scale-2_00x.webp",
        location: "Casablanca",
        featured: true,
        year: 0
      },
      {
        id: "e-loft",
        title: "E Loft",
        description: "Situé à Point E à Dakar, E Loft est un immeuble moderne au design distinctif mêlant brique, béton et végétation.",
        category: "residential",
        image: "https://www.vizirgroup.com/wp-content/uploads/2025/05/facade-face-av-giga-gigapixel-hq-scale-2_00xE-Loft.webp",
        location: "Point E, Dakar",
        featured: true,
        year: 0
      },
      {
        id: "mbadone",
        title: "MBADONE",
        description: "MBADONE est un immeuble résidentiel haut de gamme située à Abidjan, alliant design moderne, façades végétalisées et matériaux de qualité.",
        category: "residential",
        image: "https://www.vizirgroup.com/wp-content/uploads/2025/05/Sans-titre-2-gigapixel-hq-scale-2_00x_MBADONE.webp",
        location: "Abidjan, Côte d'Ivoire",
        year: 0,
        featured: true,
      },
      {
        id: "asante",
        title: "ASANTE",
        description: "Située à Somone, Asante est une cité résidentielle moderne alliant élégance, confort et cadre tropical.",
        category: "residential",
        image: "https://www.vizirgroup.com/wp-content/uploads/2024/11/HALL.webp",
        location: "Somone, Mbour,Senegal",
        year: 0,
        featured: true,
      },
    ]

    setProjects(projectsData)
    setFilteredProjects(projectsData)
  }, [])

  // Filtrer les projets lorsque le filtre change
  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === activeFilter))
    }
  }, [activeFilter, projects])

  // Fonction pour changer le filtre actif
  const handleFilterChange = (filter: FilterCategory) => {
    setActiveFilter(filter)
  }

  return (
    <section ref={ref} className="vizir-section bg-background/80 backdrop-blur-sm">
      <div className="container">
        <div className="space-y-12">
          <div className={`space-y-4 ${inView ? "animate-fade-in" : "opacity-0"}`}>
            <h2 className="vizir-subheading">Découvrez nos dernieres projets</h2>
            <div className="w-20 h-1 bg-primary"></div>
            <p className="text-muted-foreground max-w-2xl">
              Découvrez nos réalisations les plus emblématiques qui témoignent de notre expertise et de notre engagement
              envers l'excellence.
            </p>
          </div>

          <div
            className={`flex flex-wrap justify-center sm:justify-start gap-2 md:gap-4 ${inView ? "animate-fade-in stagger-2" : "opacity-0"}`}
          >
            <Button
              variant={activeFilter === "all" ? "default" : "outline"}
              className={cn(
                activeFilter === "all" ? "bg-primary text-primary-foreground" : "vizir-button",
                "flex items-center gap-1",
              )}
              onClick={() => handleFilterChange("all")}
            >
              <Filter size={16} className="mr-1" />
              Tous
            </Button>
            <Button
              variant={activeFilter === "residential" ? "default" : "outline"}
              className={cn(
                activeFilter === "residential" ? "bg-blue-500 text-white border-blue-500" : "vizir-button",
                "flex items-center gap-1",
              )}
              onClick={() => handleFilterChange("residential")}
            >
              Résidentiel
            </Button>
            <Button
              variant={activeFilter === "commercial" ? "default" : "outline"}
              className={cn(
                activeFilter === "commercial" ? "bg-emerald-600 text-white border-emerald-600" : "vizir-button",
                "flex items-center gap-1",
              )}
              onClick={() => handleFilterChange("commercial")}
            >
              Commercial
            </Button>
          </div>

          <div className={`${inView ? "animate-fade-in stagger-3" : "opacity-0"}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="group"
                  >
                    <div className="relative overflow-hidden bg-secondary/20">
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40"></div>

                        {/* Badges de catégorie */}
                        <div className="absolute top-3 left-3 z-10">
                          <CategoryBadge category={project.category} size="md" />
                        </div>

                        {/* Bouton Favoris */}
                        {isClient && (
                          <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <FavoriteButton projectId={project.id} size="md" />
                          </div>
                        )}

                        {/* Overlay avec informations */}
                        <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-background/80 backdrop-blur-sm p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-lg font-medium">{project.title}</h3>
                            <div className="flex justify-between items-center mt-1 text-sm text-muted-foreground">
                              <span>{project.location}</span>
                              <span>{project.year}</span>
                            </div>
                            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                            <Link
                              href={`/projets/${project.id}`}
                              className="mt-3 inline-flex items-center text-primary hover:underline"
                            >
                              Voir le projet <ArrowUpRight size={14} className="ml-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className={`text-center ${inView ? "animate-fade-in stagger-4" : "opacity-0"}`}>
            <Button asChild variant="outline" className="vizir-button">
              <Link href="/projets">Voir tous nos projets</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
