import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import FeaturedProjectsGallery from "@/components/featured-projects-gallery"

export default function FeaturedProjectsPage() {
  return (
    <div>
      <div className="relative min-h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src="/projects-hero.png" alt="Projets Phares" fill className="object-cover brightness-[0.6]" />
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="vizir-heading text-white">Projets Phares</h1>
          <p className="text-white/90 text-lg mt-4 max-w-2xl mx-auto">
            Découvrez nos réalisations les plus emblématiques qui témoignent de notre expertise et de notre engagement
            envers l'excellence.
          </p>
        </div>
      </div>

      <div className="container py-16 md:py-24">
        <Button variant="ghost" asChild className="w-fit mb-12">
          <Link href="/projets" className="flex items-center gap-2 text-primary">
            <ArrowLeft size={16} />
            Retour aux projets
          </Link>
        </Button>

        <FeaturedProjectsGallery />
      </div>
    </div>
  )
}
