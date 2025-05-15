import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const services = [
    {
      id: "architecture",
      title: "ARCHITECTURE",
      description: "Conception architecturale innovante qui allie esthétique, fonctionnalité et durabilité.",
      image: "https://www.vizirgroup.com/wp-content/uploads/2024/03/vizir-groupvillatraore-terasse-sunset-final.jpg",
      features: [
        "Conception architecturale sur mesure",
        "Design d'intérieur",
        "Planification urbaine",
        "Modélisation 3D et visualisation",
        "Études de faisabilité",
        "Consultation en design durable",
      ],
      link: "/services/architecture",
    },
    {
      id: "marketing-immobilier",
      title: "MARKETING IMMOBILIER",
      description:
        "Stratégies de marketing efficaces pour promouvoir vos projets immobiliers et atteindre votre public cible.",
      image: "https://www.vizirgroup.com/wp-content/uploads/2024/03/4.jpg",
      features: [
        "Stratégies de marketing digital",
        "Création de contenu immobilier",
        "Campagnes publicitaires ciblées",
        "Gestion des réseaux sociaux",
        "Organisation d'événements promotionnels",
        "Analyse de marché et positionnement",
      ],
      link: "/services/marketing-immobilier",
    },
    {
      id: "webdesign",
      title: "WEBDESIGN",
      description:
        "Création de sites web modernes et attrayants pour présenter vos projets immobiliers de manière optimale.",
      image: "https://www.vizirgroup.com/wp-content/uploads/2024/03/Mockup.jpg",
      features: [
        "Conception de sites web responsifs",
        "Expérience utilisateur (UX) optimisée",
        "Intégration de visites virtuelles",
        "Optimisation pour les moteurs de recherche",
        "Maintenance et mises à jour régulières",
        "Intégration de systèmes de gestion de contenu",
      ],
      link: "/services/webdesign",
    },
  ]

  return (
    <div>
      <div className="relative min-h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src="https://www.vizirgroup.com/wp-content/uploads/2022/11/Signature-8-scaled.jpg" alt="Nos Services" fill className="object-cover brightness-[0.6]" />
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="vizir-heading text-white">Nos Services</h1>
        </div>
      </div>

      <div className="container py-16 md:py-24">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className="scroll-mt-20">
              <div
                className={`grid gap-12 md:grid-cols-2 md:gap-16 items-center ${index % 2 !== 0 ? "md:grid-flow-dense" : ""}`}
              >
                <div className={`space-y-6 ${index % 2 !== 0 ? "md:col-start-2" : ""}`}>
                  <div className="space-y-4">
                    <h2 className="vizir-subheading">{service.title}</h2>
                    <div className="w-20 h-1 bg-primary"></div>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>

                  <ul className="grid gap-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild variant="outline" className="vizir-button">
                    <Link href={service.link}>En savoir plus</Link>
                  </Button>
                </div>

                <div className={`relative aspect-video overflow-hidden ${index % 2 !== 0 ? "md:col-start-1" : ""}`}>
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
