"use client"

import { useState, useEffect, useRef } from "react"
import { MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useFavorites } from "@/hooks/use-favorites"
import FavoriteButton from "@/components/favorite-button"
import CategoryBadge from "@/components/category-badge"

// Types pour les projets
interface Project {
  id: string
  title: string
  description: string
  category: "residential" | "commercial"
  image: string
  location: string
  year: number
  coordinates: {
    lat: number
    lng: number
  }
}

interface MapViewProps {
  projects: Project[]
}

export default function MapView({ projects }: MapViewProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [activeMarker, setActiveMarker] = useState<string | null>(null)
  const [map, setMap] = useState<any>(null)
  const [markers, setMarkers] = useState<any[]>([])
  const { favorites } = useFavorites()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Initialiser la carte
  useEffect(() => {
    if (typeof window === "undefined" || !mapRef.current) return

    // Dynamiquement importer Leaflet seulement côté client
    import("leaflet").then((L) => {
      // Importer les styles de Leaflet
      import("leaflet/dist/leaflet.css")

      // Vérifier si une carte existe déjà
      if (map) return

      // Créer une nouvelle carte
      const leafletMap = L.map(mapRef.current).setView([33.5731, -7.5898], 12) // Coordonnées de Casablanca

      // Ajouter la couche de tuiles OpenStreetMap
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(leafletMap)

      // Stocker la référence à la carte
      setMap(leafletMap)

      // Corriger le problème d'icône de Leaflet
      const defaultIcon = L.icon({
        iconUrl: "/marker-icon.png",
        iconRetinaUrl: "/marker-icon-2x.png",
        shadowUrl: "/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      })

      L.Marker.prototype.options.icon = defaultIcon

      // Créer les marqueurs pour chaque projet
      const projectMarkers = projects.map((project) => {
        const marker = L.marker([project.coordinates.lat, project.coordinates.lng])
          .addTo(leafletMap)
          .on("click", () => {
            setActiveMarker(project.id)
          })

        return {
          id: project.id,
          marker,
        }
      })

      setMarkers(projectMarkers)

      // Ajuster la vue pour montrer tous les marqueurs
      if (projects.length > 0) {
        const bounds = L.latLngBounds(projects.map((p) => [p.coordinates.lat, p.coordinates.lng]))
        leafletMap.fitBounds(bounds, { padding: [50, 50] })
      }

      // Nettoyer la carte lors du démontage du composant
      return () => {
        if (leafletMap) {
          leafletMap.remove()
        }
      }
    })
  }, [])

  // Mettre à jour les marqueurs lorsque les projets changent
  useEffect(() => {
    if (!map) return

    // Supprimer les anciens marqueurs
    markers.forEach((marker) => {
      marker.marker.remove()
    })

    // Importer Leaflet pour créer de nouveaux marqueurs
    import("leaflet").then((L) => {
      // Créer de nouveaux marqueurs
      const newMarkers = projects.map((project) => {
        const marker = L.marker([project.coordinates.lat, project.coordinates.lng])
          .addTo(map)
          .on("click", () => {
            setActiveMarker(project.id)
          })

        return {
          id: project.id,
          marker,
        }
      })

      setMarkers(newMarkers)

      // Ajuster la vue pour montrer tous les marqueurs
      if (projects.length > 0) {
        const bounds = L.latLngBounds(projects.map((p) => [p.coordinates.lat, p.coordinates.lng]))
        map.fitBounds(bounds, { padding: [50, 50] })
      }
    })
  }, [projects, map])

  // Trouver le projet actif
  const activeProject = projects.find((p) => p.id === activeMarker)

  return (
    <div className="relative w-full h-[600px] bg-secondary/20 rounded-lg overflow-hidden">
      {/* Carte */}
      <div ref={mapRef} className="w-full h-full z-0" />

      {/* Panneau d'information du projet */}
      {activeProject && (
        <div className="absolute top-4 right-4 w-full max-w-xs bg-background/95 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden z-10">
          <div className="relative h-40">
            <Image
              src={activeProject.image || "/placeholder.svg"}
              alt={activeProject.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 384px"
            />
            <div className="absolute top-2 right-2 flex gap-2">
              {isClient && <FavoriteButton projectId={activeProject.id} size="sm" />}
              <button
                onClick={() => setActiveMarker(null)}
                className="h-7 w-7 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Fermer"
              >
                <ExternalLink size={14} />
              </button>
            </div>

            {/* Badges de catégorie et favoris */}
            <div className="absolute top-2 left-2 flex flex-col gap-2">
              <CategoryBadge category={activeProject.category} size="sm" />

              {/* Badge Favoris */}
              {isClient && favorites.includes(activeProject.id) && <CategoryBadge category="favorite" size="sm" />}
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg text-primary">{activeProject.title}</h3>
            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
              <MapPin size={14} />
              <span>{activeProject.location}</span>
              <span>•</span>
              <span>{activeProject.year}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{activeProject.description}</p>
            <div className="mt-4">
              <Link
                href={`/projets/${activeProject.id}`}
                className="text-sm text-primary hover:underline flex items-center gap-1"
              >
                Voir le projet <ExternalLink size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
