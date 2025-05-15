import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle } from "lucide-react"

export default function MarketingImmobilierPage() {
  // Données du service Marketing Immobilier
  const service = {
    id: "marketing-immobilier",
    title: "MARKETING IMMOBILIER",
    description:
      "Stratégies de marketing efficaces pour promouvoir vos projets immobiliers et atteindre votre public cible.",
    image: "/marketing-service.png",
    fullDescription: `
      Dans un marché immobilier de plus en plus compétitif, une stratégie de marketing efficace est essentielle pour 
      se démarquer. Chez Vizir Group, notre service de marketing immobilier est conçu pour mettre en valeur vos 
      projets et atteindre votre public cible de manière optimale.
      
      Nous combinons des techniques de marketing traditionnelles et digitales pour créer des campagnes sur mesure 
      qui génèrent des résultats tangibles. Notre approche est basée sur une compréhension approfondie du marché 
      immobilier et des comportements des acheteurs potentiels.
      
      De la création d'une identité de marque forte à la mise en œuvre de campagnes publicitaires ciblées, nous 
      vous accompagnons à chaque étape pour maximiser la visibilité et l'attractivité de vos projets immobiliers.
    `,
    features: [
      {
        title: "Stratégies de marketing digital",
        description:
          "Développement de stratégies digitales complètes pour promouvoir vos projets immobiliers en ligne.",
      },
      {
        title: "Création de contenu immobilier",
        description:
          "Production de contenu de qualité qui met en valeur les caractéristiques uniques de vos propriétés.",
      },
      {
        title: "Campagnes publicitaires ciblées",
        description:
          "Conception et mise en œuvre de campagnes publicitaires qui atteignent précisément votre public cible.",
      },
      {
        title: "Gestion des réseaux sociaux",
        description:
          "Animation professionnelle de vos réseaux sociaux pour créer une communauté engagée autour de vos projets.",
      },
      {
        title: "Organisation d'événements promotionnels",
        description: "Planification et exécution d'événements qui génèrent de l'intérêt et des opportunités de vente.",
      },
      {
        title: "Analyse de marché et positionnement",
        description: "Études approfondies du marché pour positionner stratégiquement vos projets immobiliers.",
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
        id: "ocean-view",
        title: "OCEAN VIEW",
        image: "/ocean-view.png",
        location: "Tanger",
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
                <Link href="/contact">Discuter de votre stratégie marketing</Link>
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
                <h2 className="vizir-subheading">Projets Marketing Réussis</h2>
                <div className="w-20 h-1 bg-primary"></div>
                <p className="text-muted-foreground">
                  Découvrez quelques-uns de nos projets de marketing immobilier récents.
                </p>
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
                  <Link href="/projets">Voir tous nos projets</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-secondary/50 p-8 sm:p-12">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="vizir-subheading">Prêt à booster la visibilité de vos projets immobiliers?</h2>
              <p className="text-muted-foreground">
                Contactez notre équipe de marketing pour discuter de votre projet et découvrir comment nous pouvons vous
                aider à atteindre vos objectifs commerciaux.
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
