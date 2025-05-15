"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowLeft,
  Globe,
  CuboidIcon as Cube,
  Presentation,
  Building,
  Building2,
  Sofa,
  Video,
  LayoutDashboard,
  Badge,
} from "lucide-react"
import ProjectImageCarousel from "@/components/project-image-carousel"
import RelatedProjects from "@/components/related-projects"
import CategoryBadge from "@/components/category-badge"
import AnimatedElement from "@/components/animated-element"

// Types pour les projets
interface Project {
  id: string
  title: string
  description: string
  category: "residential" | "commercial"
  location: string
  year: number
  area: string
  client: string
  fullDescription: string
  images: string[]
  services: Array<{
    name: string
    icon: string
    description?: string
  }>
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    // Simuler les données d'un projet (à remplacer par les vraies données)
    const projects: Record<string, Project> = {
      halys: {
        id: "halys",
        title: "HALYS RESIDENCE",
        description:
          "Un complexe résidentiel de luxe avec des finitions haut de gamme et des espaces communs élégants.",
        category: "residential",
        location: "Casablanca",
        year: 2022,
        area: "1300 m²",
        client: "M.B",
        fullDescription: `
          Établi à Conakry en Guinée, Halys est un immeuble résidentiel contemporain de 9 étages conçu pour offrir confort, sécurité et qualité de vie. Doté d’une architecture élégante et de larges ouvertures vitrées, il se distingue par sa luminosité naturelle et son design moderne. Entouré de jardins paysagers et équipé de parkings privés, Halys constitue un choix idéal pour les familles, les professionnels et les investisseurs recherchant un cadre de vie raffiné en plein cœur de la ville.
        `,
        
        images: [
          "https://www.vizirgroup.com/wp-content/uploads/2025/05/halys-_facade.webp",
          "https://www.vizirgroup.com/wp-content/uploads/2025/05/studio1_halys.webp",
          "https://www.vizirgroup.com/wp-content/uploads/2025/05/back-side-av-gig-gigapixel-hq-scale-2_00x-1_halys.webp",
          "https://www.vizirgroup.com/wp-content/uploads/2025/05/lounge_sauna_halys.webp",
          "https://www.vizirgroup.com/wp-content/uploads/2025/05/lounge_halys.webp",
          "https://www.vizirgroup.com/wp-content/uploads/2025/05/salon20av20gig-gigapixel-art-scale-2_00x-jF7w5_halys.webp",
          "https://www.vizirgroup.com/wp-content/uploads/2025/05/salon-ang-3-2-av-gig-gigapixel-hq-scale-2_00x-1_halys.webp",
          "https://www.vizirgroup.com/wp-content/uploads/2025/05/hall-av-gig-gigapixel-hq-scale-2_00x_halys.webp",
          "https://www.vizirgroup.com/wp-content/uploads/2025/05/hall2-av-gig-gigapixel-hq-scale-2_00x_halys.webp",
          "https://www.vizirgroup.com/wp-content/uploads/2025/05/gym2-av-gig-gigapixel-hq-scale-2_00x_halys.webp",
          "https://www.vizirgroup.com/wp-content/uploads/2025/05/salon-studioav-gig-gigapixel-art-scale-2_00x_halys.webp",
          "https://www.vizirgroup.com/wp-content/uploads/2025/05/salon-angle-2-tablavgig-gigapixel-art-scale-2_00x-halys.webp",
          "https://www.vizirgroup.com/wp-content/uploads/2025/05/studio_2_halys.webp",
        ],
        services: [
          {
            name: "Site Web",
            icon: "globe",
            description: "Conception et développement d'un site web vitrine pour le projet",
          },
          {
            name: "Rendus 3D",
            icon: "cube",
            description: "Création de visualisations 3D photoréalistes des espaces intérieurs et extérieurs",
          },
          {
            name: "Architecture",
            icon: "building",
            description: "Conception architecturale du complexe résidentiel",
          },
        ],
      },
      "anfa-realties": {
        id: "anfa-realties",
        title: "ANFA REALTIES",
        description: "Un projet immobilier moderne offrant des espaces de vie et de travail dans un quartier prisé.",
        category: "residential",
        location: "Casablanca",
        year: 2021,
        area: "20,000 m²",
        client: "Anfa Development",
        fullDescription: `
          Anfa Realties est un projet immobilier mixte situé dans le quartier prestigieux d'Anfa à Casablanca.
          Ce développement comprend des appartements de luxe, des espaces de bureaux et des commerces,
          créant ainsi un environnement dynamique où vie, travail et loisirs se côtoient harmonieusement.
          
          L'architecture contemporaine du projet se distingue par ses lignes épurées et ses grandes baies vitrées,
          offrant une luminosité exceptionnelle et des vues imprenables sur la ville.
          
          Les espaces communs ont été conçus pour favoriser les interactions sociales et le bien-être des résidents,
          avec des jardins, des terrasses et des installations de loisirs de premier ordre.
        `,
       
        images: [
          "/anfa-realties.jpg",
          "/anfa-interior-1.png",
          "/anfa-interior-2.png",
          "/anfa-interior-3.png",
          "/modern-office-building.png",
        ],
        services: [
          {
            name: "Architecture",
            icon: "building",
            description: "Conception architecturale du complexe mixte",
          },
          {
            name: "Design d'Intérieur",
            icon: "sofa",
            description: "Aménagement et décoration des espaces intérieurs",
          },
          {
            name: "Rendus 3D",
            icon: "cube",
            description: "Visualisations 3D des espaces résidentiels et commerciaux",
          },
        ],
      },
      "marina-tower": {
        id: "marina-tower",
        title: "MARINA TOWER",
        description: "Une tour emblématique avec des appartements de luxe offrant une vue imprenable sur l'océan.",
        category: "residential",
        location: "Casablanca",
        year: 2023,
        area: "18,000 m²",
        client: "Marina Development",
        fullDescription: `
          Marina Tower est une tour résidentielle de luxe située en front de mer à Casablanca.
          Avec ses 25 étages, elle offre des vues panoramiques exceptionnelles sur l'océan Atlantique et la ville.
          
          Le projet comprend 80 appartements de luxe, des penthouses exclusifs et des espaces communs
          conçus pour offrir une expérience de vie incomparable.
          
          L'architecture avant-gardiste de la tour, caractérisée par ses lignes fluides et ses balcons en cascade,
          en fait un nouveau repère dans le paysage urbain de Casablanca.
        `,
        images: [
          "/marina-tower.jpg",
          "/halys-interior-1.png",
          "/halys-interior-2.png",
          "/anfa-interior-3.png",
          "/modern-office-building.png",
        ],
        services: [
          {
            name: "Architecture",
            icon: "building",
            description: "Conception architecturale de la tour",
          },
          {
            name: "Marketing Immobilier",
            icon: "presentation",
            description: "Campagne marketing complète pour le lancement du projet",
          },
          {
            name: "Site Web",
            icon: "globe",
            description: "Site web avec visite virtuelle des appartements",
          },
          {
            name: "Vidéo Promotionnelle",
            icon: "video",
            description: "Production d'une vidéo promotionnelle avec vues aériennes",
          },
        ],
      },
      "business-center": {
        id: "business-center",
        title: "BUSINESS CENTER",
        description:
          "Un centre d'affaires moderne avec des espaces de bureaux flexibles et des installations de pointe.",
        category: "commercial",
        location: "Rabat",
        year: 2020,
        area: "12,000 m²",
        client: "Rabat Business Group",
        fullDescription: `
          Le Business Center est un complexe de bureaux moderne situé au cœur du quartier d'affaires de Rabat.
          Ce projet offre des espaces de travail flexibles et innovants, conçus pour répondre aux besoins des entreprises contemporaines.
          
          Le bâtiment comprend des bureaux privatifs, des espaces de coworking, des salles de réunion équipées des dernières technologies,
          ainsi que des services de conciergerie et de restauration.
          
          L'architecture du bâtiment met l'accent sur la durabilité et l'efficacité énergétique, avec des systèmes de gestion intelligents
          et des matériaux respectueux de l'environnement.
        `,
        images: [
          "/business-center.jpg",
          "/modern-office-building.png",
          "/anfa-interior-1.png",
          "/anfa-interior-2.png",
          "/anfa-interior-3.png",
        ],
        services: [
          {
            name: "Architecture Commerciale",
            icon: "building-2",
            description: "Conception architecturale adaptée aux besoins professionnels",
          },
          {
            name: "Design d'Espaces de Travail",
            icon: "layout-dashboard",
            description: "Aménagement ergonomique des espaces de travail",
          },
          {
            name: "Branding",
            icon: "badge",
            description: "Développement de l'identité visuelle du Business Center",
          },
          {
            name: "Site Web",
            icon: "globe",
            description: "Plateforme web avec système de réservation d'espaces",
          },
        ],
      },
    }

    const projectData = projects[params.id]
    setProject(projectData || null)
    setLoading(false)
  }, [params.id])

  if (loading) {
    return (
      <div className="container py-16 text-center">
        <p>Chargement...</p>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="container py-16 text-center">
        <h1 className="vizir-heading">Projet non trouvé</h1>
        <p className="text-muted-foreground mt-4">Le projet que vous recherchez n'existe pas.</p>
        <Button asChild variant="outline" className="vizir-button mt-8">
          <Link href="/projets">Retour aux projets</Link>
        </Button>
      </div>
    )
  }

  // Ajouter cette fonction helper pour obtenir l'icône correspondante
  const getServiceIcon = (iconName: string, size = 24) => {
    switch (iconName) {
      case "globe":
        return <Globe size={size} className="text-primary" />
      case "cube":
        return <Cube size={size} className="text-primary" />
      case "presentation":
        return <Presentation size={size} className="text-primary" />
      case "building":
        return <Building size={size} className="text-primary" />
      case "building-2":
        return <Building2 size={size} className="text-primary" />
      case "sofa":
        return <Sofa size={size} className="text-primary" />
      case "video":
        return <Video size={size} className="text-primary" />
      case "layout-dashboard":
        return <LayoutDashboard size={size} className="text-primary" />
      case "badge":
        return <Badge size={size} className="text-primary" />
      default:
        return <Globe size={size} className="text-primary" />
    }
  }

  return (
    <div>
      <div className="py-16 md:py-0">
        {/* Galerie d'images en full width */}
        <div className="mb-16">
          <ProjectImageCarousel
            images={project.images}
            alt={project.title}
            fullWidth={true}
            title={project.title}
            category={project.category}
          />
        </div>

        <div className="container">
          <div className="grid gap-12">
            <Button variant="ghost" asChild className="w-fit">
              <Link href="/projets" className="flex items-center gap-2 text-primary">
                <ArrowLeft size={16} />
                Retour aux projets
              </Link>
            </Button>

            <AnimatedElement type="fade-in">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4">
                  <h2 className="vizir-subheading">À Propos du Projet</h2>
                  <div className="w-20 h-1 bg-primary"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Catégorie</p>
                    <div>
                      <CategoryBadge category={project.category} size="md" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Localisation</p>
                    <p className="font-medium">{project.location}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Année</p>
                    <p className="font-medium">{project.year}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Superficie</p>
                    <p className="font-medium">{project.area}</p>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <p className="text-sm text-muted-foreground">Client</p>
                    <p className="font-medium">{project.client}</p>
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground text-sm sm:text-base">
                  {project.fullDescription.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Section des services */}
                {project.services && project.services.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-xl font-medium mb-6">Services fournis pour ce projet</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {project.services.map((service, index) => (
                        <AnimatedElement key={service.name} type="zoom-in" delay={0.1 * index}>
                          <div className="bg-secondary/30 p-6 space-y-4 hover:bg-secondary/50 transition-colors">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                              {getServiceIcon(service.icon, 24)}
                            </div>
                            <h4 className="font-medium">{service.name}</h4>
                            {service.description && (
                              <p className="text-sm text-muted-foreground">{service.description}</p>
                            )}
                          </div>
                        </AnimatedElement>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </AnimatedElement>

            <div className="mt-16">
              <RelatedProjects currentProjectId={project.id} category={project.category} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
