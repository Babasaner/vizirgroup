import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle } from "lucide-react"

export default function ArchitecturePage() {
  // Données du service Architecture
  const service = {
    id: "architecture",
    title: "ARCHITECTURE",
    description: "Conception architecturale innovante qui allie esthétique, fonctionnalité et durabilité.",
    image: "/architecture-service.png",
    fullDescription: `
      Notre service d'architecture est au cœur de notre offre chez Vizir Group. Nous concevons des espaces qui 
      transcendent le simple aspect fonctionnel pour créer des environnements qui inspirent, stimulent et enrichissent 
      la vie quotidienne.
      
      Notre approche combine créativité artistique et rigueur technique. Chaque projet est abordé avec une vision 
      holistique, prenant en compte non seulement les besoins immédiats du client, mais aussi les aspects 
      environnementaux, culturels et sociaux.
      
      Nous travaillons en étroite collaboration avec nos clients à chaque étape du processus, de la conception 
      initiale à la réalisation finale, en veillant à ce que chaque détail soit soigneusement pensé et exécuté.
    `,
    features: [
      {
        title: "Conception architecturale sur mesure",
        description:
          "Des solutions architecturales personnalisées qui répondent parfaitement à vos besoins et aspirations.",
      },
      {
        title: "Design d'intérieur",
        description: "Création d'espaces intérieurs harmonieux qui allient esthétique, confort et fonctionnalité.",
      },
      {
        title: "Planification urbaine",
        description:
          "Développement de plans d'urbanisme qui favorisent la cohésion sociale et le respect de l'environnement.",
      },
      {
        title: "Modélisation 3D et visualisation",
        description:
          "Représentations visuelles détaillées qui vous permettent de visualiser votre projet avant sa réalisation.",
      },
      {
        title: "Études de faisabilité",
        description: "Analyses approfondies pour évaluer la viabilité technique et financière de votre projet.",
      },
      {
        title: "Consultation en design durable",
        description: "Conseils experts pour intégrer des principes de durabilité dans votre projet architectural.",
      },
    ],
    projects: [
      {
        id: "halys",
        title: "HALYS RESIDENCE",
        image: "/halys-residence.jpg",
        location: "Casablanca",
      },
      {
        id: "anfa-realties",
        title: "ANFA REALTIES",
        image: "/anfa-realties.jpg",
        location: "Casablanca",
      },
      {
        id: "marina-tower",
        title: "MARINA TOWER",
        image: "/marina-tower.jpg",
        location: "Casablanca",
      },
    ],
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-[50vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 py-12 sm:py-16">
          <h1 className="vizir-heading text-white">{service.title}</h1>
          <p className="text-white/90 text-lg mt-4 max-w-2xl">{service.description}</p>
        </div>
      </div>

      <div className="container py-16 md:py-24">
        <div className="grid gap-12">
          <Button variant="ghost" asChild className="w-fit">
            <Link href="/services" className="flex items-center gap-2 text-primary">
              <ArrowLeft size={16} />
              Retour aux services
            </Link>
          </Button>

          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-start">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <h2 className="vizir-subheading">Notre Approche</h2>
                <div className="w-20 h-1 bg-primary"></div>
              </div>

              <div className="space-y-4 text-muted-foreground text-sm sm:text-base">
                {service.fullDescription.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <Button asChild variant="outline" className="vizir-button w-full sm:w-auto">
                <Link href="/contact">Discuter de votre projet</Link>
              </Button>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="vizir-subheading">Nos Services</h2>
                <div className="w-20 h-1 bg-primary"></div>
              </div>

              <div className="grid gap-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Projets liés */}
          <div className="mt-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="vizir-subheading">Projets d'Architecture</h2>
                <div className="w-20 h-1 bg-primary"></div>
                <p className="text-muted-foreground">Découvrez quelques-uns de nos projets d'architecture récents.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {service.projects.map((project) => (
                  <Link key={project.id} href={`/projets/${project.id}`} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40"></div>
                      <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white font-medium text-lg">{project.title}</h3>
                        <p className="text-white/80 text-sm">{project.location}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="flex justify-center">
                <Button asChild variant="outline" className="vizir-button">
                  <Link href="/projets?category=residential">Voir tous nos projets</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-secondary/50 p-8 sm:p-12">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="vizir-subheading">Prêt à concrétiser votre vision architecturale?</h2>
              <p className="text-muted-foreground">
                Contactez notre équipe d'architectes pour discuter de votre projet et découvrir comment nous pouvons
                vous aider à le réaliser.
              </p>
              <Button asChild variant="outline" className="vizir-button">
                <Link href="/contact">Demander une consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
