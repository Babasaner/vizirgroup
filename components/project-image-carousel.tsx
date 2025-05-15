"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import CategoryBadge from "@/components/category-badge"

// Mettre à jour l'interface des props pour inclure le titre et la catégorie
interface ProjectImageCarouselProps {
  images: string[]
  alt: string
  fullWidth?: boolean
  title?: string
  category?: "residential" | "commercial"
}

// Mettre à jour la signature de la fonction pour inclure les nouveaux props
export default function ProjectImageCarousel({
  images,
  alt,
  fullWidth = false,
  title,
  category,
}: ProjectImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }, [images.length])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }, [images.length])

  const goToIndex = (index: number) => {
    setCurrentIndex(index)
  }

  const openFullscreen = () => {
    setIsFullscreen(true)
    document.body.style.overflow = "hidden" // Prevent scrolling when fullscreen is open
  }

  const closeFullscreen = () => {
    setIsFullscreen(false)
    document.body.style.overflow = "" // Restore scrolling
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isFullscreen) return

      switch (e.key) {
        case "ArrowLeft":
          goToPrevious()
          break
        case "ArrowRight":
          goToNext()
          break
        case "Escape":
          closeFullscreen()
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "" // Ensure scrolling is restored on unmount
    }
  }, [isFullscreen, goToNext, goToPrevious])

  return (
    <>
      <div className={`flex flex-col h-full w-full ${fullWidth ? "container-fluid px-0" : ""}`}>
        <div
          className={`relative w-full ${fullWidth ? "h-[70vh]" : "h-[50vh] md:h-[60vh] lg:h-[70vh]"} overflow-hidden bg-secondary/20 group mb-3 sm:mb-4`}
        >
          {title && (
            <div className="absolute bottom-0 left-0 right-0 z-30  p-6 sm:p-8 md:p-10">
              <div className="container mx-auto">
                {category && (
                  <div className="mb-3">
                    <CategoryBadge category={category} size="lg" />
                  </div>
                )}
                <h1 className="vizir-heading text-white">{title}</h1>
              </div>
            </div>
          )}
          <AnimatePresence mode="wait">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className={cn("absolute inset-0", currentIndex === index ? "z-10" : "z-0")}
                initial={{ opacity: 0 }}
                animate={{ opacity: currentIndex === index ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${alt} - Image ${index + 1}`}
                  fill
                  className="object-cover cursor-pointer"
                  priority={index === 0}
                  sizes="100vw"
                  onClick={openFullscreen}
                />
              </motion.div>
            ))}
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 z-20 -translate-y-1/2 bg-black/50 p-1 sm:p-2 text-white backdrop-blur-sm transition-all hover:bg-black/70 rounded-full"
            aria-label="Image précédente"
          >
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 z-20 -translate-y-1/2 bg-black/50 p-1 sm:p-2 text-white backdrop-blur-sm transition-all hover:bg-black/70 rounded-full"
            aria-label="Image suivante"
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={openFullscreen}
            className="absolute right-2 sm:right-4 bottom-2 sm:bottom-4 z-20 bg-black/50 p-1 sm:p-2 text-white backdrop-blur-sm transition-all hover:bg-black/70 opacity-0 group-hover:opacity-100 rounded-full"
            aria-label="Voir en plein écran"
          >
            <Maximize2 className="h-4 w-4 sm:h-5 sm:w-5" />
          </motion.button>
        </div>

        {/* Indicateur de progression */}
        <div className="flex justify-center items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={cn(
                "w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all",
                currentIndex === index ? "bg-primary scale-110" : "bg-muted-foreground/30 hover:bg-muted-foreground/50",
              )}
              aria-label={`Aller à l'image ${index + 1}`}
              aria-current={currentIndex === index ? "true" : "false"}
            />
          ))}
        </div>

        <div
          ref={carouselRef}
          className={cn(
            "flex gap-1 sm:gap-2 overflow-x-auto pb-2 transition-opacity duration-500 justify-center",
            isLoaded ? "opacity-100" : "opacity-0",
            fullWidth ? "container mx-auto px-4" : "",
          )}
        >
          {images.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => goToIndex(index)}
              className={cn(
                "relative h-14 w-20 sm:h-20 sm:w-32 flex-shrink-0 overflow-hidden transition-all",
                currentIndex === index
                  ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                  : "opacity-70 hover:opacity-100",
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Voir image ${index + 1}`}
              aria-current={currentIndex === index ? "true" : "false"}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${alt} - Vignette ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 80px, 128px"
              />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <div className="absolute inset-0 z-0" onClick={closeFullscreen}></div>

          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className={cn("absolute inset-0 flex items-center justify-center p-2 sm:p-4 md:p-8")}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: currentIndex === index ? 1 : 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ zIndex: currentIndex === index ? 10 : 0 }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${alt} - Image ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="100vw"
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 z-20 -translate-y-1/2 bg-black/50 p-2 sm:p-3 text-white backdrop-blur-sm transition-all hover:bg-black/70 rounded-full"
            aria-label="Image précédente"
          >
            <ChevronLeft className="h-5 w-5 sm:h-8 sm:w-8" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 z-20 -translate-y-1/2 bg-black/50 p-2 sm:p-3 text-white backdrop-blur-sm transition-all hover:bg-black/70 rounded-full"
            aria-label="Image suivante"
          >
            <ChevronRight className="h-5 w-5 sm:h-8 sm:w-8" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={closeFullscreen}
            className="absolute right-2 sm:right-4 top-2 sm:top-4 z-20 bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/70 rounded-full"
            aria-label="Fermer le plein écran"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </motion.button>

          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={cn(
                  "w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-colors",
                  currentIndex === index ? "bg-white" : "bg-white/30 hover:bg-white/50",
                )}
                aria-label={`Aller à l'image ${index + 1}`}
                aria-current={currentIndex === index ? "true" : "false"}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
