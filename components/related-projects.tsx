"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useInView } from "react-intersection-observer"
import CategoryBadge from "@/components/category-badge"

interface Project {
  id: string
  title: string
  description: string
  category: "residential" | "commercial"
  image: string
  location: string
}

interface RelatedProjectsProps {
  currentProjectId: string
  category: "residential" | "commercial"
}

export default function RelatedProjects({ currentProjectId, category }: RelatedProjectsProps) {
  const [projects, setProjects] = useState<Project[]>([])
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Simuler les données de projets (à remplacer par les vraies données)
  useEffect(() => {
    const allProjects: Project[] = [
      {
        id: "halys",
        title: "HALYS RESIDENCE",
        description: "Un complexe résidentiel de luxe avec des finitions haut de gamme et des espaces communs élégants.",
        image: "https://www.vizirgroup.com/wp-content/uploads/2025/05/studio1_halys.webp",
        location: "Guinée Conakry",
        category: "residential"
      },
  {
    id: "spitower",
    title: "Spy Tower",
    description: "Un projet immobilier moderne offrant des espaces de vie et de travail dans un quartier prisé.",
    image: "https://www.vizirgroup.com/wp-content/uploads/2025/05/WhatsApp-Image-2024-10-15-at-17.43.45.webp",
    location: "congo",
    category: "residential"
  },
  {
    id: "elamino",
    title: "El Camino",
    description: "Une tour emblématique avec des appartements de luxe offrant une vue imprenable sur l'océan.",
    image: "https://www.vizirgroup.com/wp-content/uploads/2024/08/entree-final-2.webp",
    location: "Nguerigne, Mbour, Senegal",
    category: "residential"
  },
      {
        id: "business-center",
        title: "BUSINESS CENTER",
        description:
          "Un centre d'affaires moderne avec des espaces de bureaux flexibles et des installations de pointe.",
        category: "commercial",
        image: "/business-center.jpg",
        location: "Rabat",
      },
      {
        id: "garden-plaza",
        title: "GARDEN PLAZA",
        description: "Un complexe commercial avec des espaces verts intégrés et une architecture durable.",
        category: "commercial",
        image: "/garden-plaza.jpg",
        location: "Marrakech",
      },
      {
        id: "ocean-view",
        title: "OCEAN VIEW",
        description: "Un ensemble résidentiel de luxe avec vue sur l'océan et des aménagements exclusifs.",
        category: "residential",
        image: "/ocean-view.png",
        location: "Tanger",
      },
    ]

    // Filtrer les projets similaires (même catégorie, mais pas le projet actuel)
    const relatedProjects = allProjects
      .filter((project) => project.id !== currentProjectId && project.category === category)
      .slice(0, 3) // Limiter à 3 projets

    setProjects(relatedProjects)
  }, [currentProjectId, category])

  if (projects.length === 0) return null

  return (
    <div ref={ref} className="space-y-8">
      <div className="space-y-4">
        <h2 className="vizir-subheading">Projets Similaires</h2>
        <div className="w-20 h-1 bg-primary"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((project, index) => (
          <Card
            key={project.id}
            className={`vizir-card ${inView ? `animate-slide-up stagger-${index + 1}` : "opacity-0"}`}
          >
            <div className="vizir-card-image aspect-[4/3] relative">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute top-3 left-3">
                <CategoryBadge category={project.category} size="sm" />
              </div>
            </div>
            <CardContent className="vizir-card-content p-4 sm:p-6">
              <h3 className="vizir-card-title text-base sm:text-lg md:text-xl font-semibold text-primary">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{project.location}</p>
            </CardContent>
            <CardFooter className="vizir-card-footer p-4 sm:p-6 pt-0">
              <Link href={`/projets/${project.id}`} className="vizir-link text-xs sm:text-sm uppercase tracking-wider">
                Voir le projet
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
