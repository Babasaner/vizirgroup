"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { motion, AnimatePresence } from "framer-motion"
import AnimatedButton from "@/components/animated-button"

// Données des projets pour le slider hero
const heroProjects = [
  {
    id: "halys",
    title: "HALYS RESIDENCE",
    description: "Un complexe résidentiel de luxe avec des finitions haut de gamme et des espaces communs élégants.",
    image: "https://www.vizirgroup.com/wp-content/uploads/2025/05/studio1_halys.webp",
    location: "Guinée Conakry",
  },
  {
    id: "spitower",
    title: "Spy Tower",
    description: "Un projet immobilier moderne offrant des espaces de vie et de travail dans un quartier prisé.",
    image: "https://www.vizirgroup.com/wp-content/uploads/2025/05/salon-outdoor-av-gig-gigapixel-hq-scale-2_00x.webp",
    location: "congo",
  },
  {
    id: "elcamino",
    title: "El Camino",
    description: "Une tour emblématique avec des appartements de luxe offrant une vue imprenable sur l'océan.",
    image: "https://www.vizirgroup.com/wp-content/uploads/2024/08/entree-final-2.webp",
    location: "Nguerigne, Mbour, Senegal",
  },

   {
    id: "sanou-lodge",
    title: "Sanou Lounge",
    description: "Sanou Lodge est un ensemble résidentiel à l’architecture élégante et naturelle, pensé pour offrir un lieu de vie paisible et authentique.",
    image: "https://www.vizirgroup.com/wp-content/uploads/2025/05/facade-v4.jpg",
    location: "Dakar, SENEGAL"
  },
  {
    id: "akwa-residence",
    title: "Akwa Résidence",
    description: "La résidence Akwa, au cœur des Almadies à Dakar, offre une position centrale privilégiée, permettant aux résidents de profiter pleinement des plages magnifiques et des vues spectaculaires sur l'océan Atlantique. ",
    image: "https://www.vizirgroup.com/wp-content/uploads/2024/05/HALL.jpg",
    location: "Ngor, Dakar- Sénégal",
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const isMobile = useMediaQuery("(max-width: 640px)")

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroProjects.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroProjects.length - 1 : prev - 1))
  }

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(interval)
  }, [currentSlide])

  // Set loaded state after component mounts
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="relative overflow-hidden h-[70vh] sm:h-[80vh] md:h-[90vh]">
      <AnimatePresence mode="wait">
        {heroProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{ zIndex: currentSlide === index ? 1 : 0 }}
          >
            <div className="absolute inset-0">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0"></div>
            </div>

            {currentSlide === index && (
              <div className="container relative z-10 flex min-h-full flex-col items-start justify-end pb-16 sm:pb-20 md:pb-24">
                <div className="max-w-xl space-y-4 sm:space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-background/80 backdrop-blur-sm p-3 sm:p-4 inline-block"
                  >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-light">{project.title}</h1>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-base sm:text-lg  max-w-md bg-background/70 backdrop-blur-sm p-3 sm:p-4"
                  >
                    {project.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex gap-4"
                  >
                    <AnimatedButton
                      variant="outline"
                      className="vizir-button border-4  border-primary p-4 px-4 bg-background/70 backdrop-blur-sm"
                      asChild
                    >
                      <Link href={`/projets/${project.id}`}>Découvrir le projet</Link>
                    </AnimatedButton>
                  </motion.div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 flex gap-2 sm:gap-4 z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/30 text-white hover:bg-white/10 transition-colors"
          aria-label="Projet précédent"
        >
          <ArrowLeft size={isMobile ? 16 : 20} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/30 text-white hover:bg-white/10 transition-colors"
          aria-label="Projet suivant"
        >
          <ArrowRight size={isMobile ? 16 : 20} />
        </motion.button>
      </div>

      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2 justify-center">
        {heroProjects.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-8 h-2 sm:w-10 sm:h-2 transition-colors ${
              currentSlide === index ? "bg-white" : "bg-white/30"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Aller au projet ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
