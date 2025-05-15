"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="vizir-section bg-background/80 backdrop-blur-sm">
      <div className="container">
        <div className="space-y-8 sm:space-y-12">
         
          <div
            className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center ${
              inView ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <div className="space-y-4 sm:space-y-6"> 
              
              <h2 className={`vizir-heading text-center sm:text-left ${inView ? "animate-fade-in" : "opacity-0"}`}>
            A propos
          </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Fondé en 2010, Vizir Group s'est imposé comme un leader dans le secteur de l'architecture et du
                développement immobilier à Dakar. Notre expertise s'étend de la conception architecturale innovante au
                marketing immobilier stratégique, en passant par le webdesign moderne.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base">
                Notre équipe de professionnels passionnés s'engage à créer des espaces qui allient esthétique,
                fonctionnalité et durabilité, transformant ainsi le paysage urbain tout en respectant l'environnement et
                en contribuant au bien-être des communautés.
              </p>
              <Button asChild variant="outline" className="vizir-button">
                            <Link href="/about">En savoir plus</Link>
                          </Button>
            </div>
            
            <div className="relative aspect-video overflow-hidden mt-6 sm:mt-0">
              <Image
                src="https://www.vizirgroup.com/wp-content/uploads/2025/05/salon-outdoor-av-gig-gigapixel-hq-scale-2_00x.webp"
                alt="À propos de Vizir Group"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
