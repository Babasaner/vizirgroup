"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Vérifier que les services dans le composant Services correspondent bien aux trois services principaux
  const services = [
    {
      id: "architecture",
      title: "ARCHITECTURE",
      description: "Conception architecturale innovante qui allie esthétique, fonctionnalité et durabilité.",
      image: "https://www.vizirgroup.com/wp-content/uploads/2024/03/vizir-groupvillatraore-terasse-sunset-final.jpg",
      link: "/services/architecture",
    },
    {
      id: "marketing-immobilier",
      title: "MARKETING IMMOBILIER",
      description:
        "Stratégies de marketing efficaces pour promouvoir vos projets immobiliers et atteindre votre public cible.",
      image: "https://www.vizirgroup.com/wp-content/uploads/2024/03/4.jpg",
      link: "/services/marketing-immobilier",
    },
    {
      id: "webdesign",
      title: "WEBDESIGN",
      description:
        "Création de sites web modernes et attrayants pour présenter vos projets immobiliers de manière optimale.",
      image: "https://www.vizirgroup.com/wp-content/uploads/2024/03/Mockup.jpg",
      link: "/services/webdesign",
    },
  ]

  return (
    <section ref={ref} className="vizir-section bg-background/80 backdrop-blur-sm">
      <div className="container">
        <div className="space-y-12">
          <div className={`space-y-4 ${inView ? "animate-fade-in" : "opacity-0"}`}>
            <h2 className="vizir-subheading">Nos Services</h2>
            <div className="w-20 h-1 bg-primary"></div>
          </div>

          <div className="vizir-grid">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className={`vizir-card ${inView ? `animate-slide-up stagger-${index + 1}` : "opacity-0"}`}
              >
                <div className="vizir-card-image">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="vizir-card-content">
                  <h3 className="vizir-card-title">{service.title}</h3>
                  <p className="vizir-card-description">{service.description}</p>
                </CardContent>
                <CardFooter className="vizir-card-footer">
                  <Link href={service.link} className="vizir-link text-sm uppercase tracking-wider">
                    En savoir plus
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className={`text-center ${inView ? "animate-fade-in stagger-4" : "opacity-0"}`}>
            <Button asChild variant="outline" className="vizir-button">
              <Link href="/services">Tous nos services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
