import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Monitor, Smartphone, Search, Code, Gauge, Palette } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function WebdesignPage() {
  // Données du service Webdesign
  const service = {
    id: "webdesign",
    title: "WEBDESIGN",
    description:
      "Création de sites web modernes et attrayants pour présenter vos projets immobiliers de manière optimale.",
    image: "/webdesign-service.png",
    fullDescription: `
      Dans l'ère numérique actuelle, un site web performant et esthétique est essentiel pour toute entreprise immobilière. 
      Chez Vizir Group, notre service de webdesign est spécialisé dans la création de sites web qui non seulement 
      captent l'attention, mais convertissent également les visiteurs en clients.
      
      Nous concevons des sites web sur mesure qui reflètent l'identité de votre marque et mettent en valeur vos 
      projets immobiliers de manière optimale. Notre approche combine design attrayant, expérience utilisateur 
      intuitive et fonctionnalités techniques avancées.
      
      De la conception initiale au déploiement final, en passant par l'optimisation pour les moteurs de recherche, 
      nous vous accompagnons à chaque étape pour créer une présence en ligne qui vous démarque de la concurrence.
    `,
    features: [
      {
        title: "Conception de sites web responsifs",
        description:
          "Création de sites web qui s'adaptent parfaitement à tous les appareils, des ordinateurs de bureau aux smartphones.",
        icon: Monitor,
      },
      {
        title: "Expérience utilisateur (UX) optimisée",
        description:
          "Conception d'interfaces intuitives qui facilitent la navigation et améliorent l'engagement des utilisateurs.",
        icon: Smartphone,
      },
      {
        title: "Intégration de visites virtuelles",
        description:
          "Implémentation de technologies de pointe pour offrir des visites virtuelles immersives de vos propriétés.",
        icon: Palette,
      },
      {
        title: "Optimisation pour les moteurs de recherche",
        description:
          "Mise en œuvre de techniques SEO pour améliorer la visibilité de votre site dans les résultats de recherche.",
        icon: Search,
      },
      {
        title: "Maintenance et mises à jour régulières",
        description:
          "Services de maintenance continue pour garantir la sécurité, la performance et l'actualité de votre site web.",
        icon: Code,
      },
      {
        title: "Intégration de systèmes de gestion de contenu",
        description:
          "Mise en place de CMS intuitifs qui vous permettent de mettre à jour facilement le contenu de votre site.",
        icon: Gauge,
      },
    ],
    portfolio: [
      {
        title: "Site Vitrine Immobilier de Luxe",
        description: "Site web élégant pour une agence spécialisée dans l'immobilier haut de gamme.",
        image: "/luxury-real-estate-website.png",
      },
      {
        title: "Plateforme de Projets Résidentiels",
        description: "Site interactif présentant un portfolio de projets résidentiels avec visites virtuelles.",
        image: "/placeholder.svg?key=9v6tf",
      },
      {
        title: "Site E-commerce Immobilier",
        description: "Plateforme permettant la réservation et l'achat en ligne de biens immobiliers.",
        image: "/placeholder.svg?key=cuo0m",
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
                <Link href="/contact">Discuter de votre projet web</Link>
              </Button>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="vizir-subheading">Nos Services</h2>
                <div className="w-20 h-1 bg-primary"></div>
              </div>

              <div className="grid gap-6">
                {service.features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-medium">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Portfolio */}
          <div className="mt-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="vizir-subheading">Notre Portfolio</h2>
                <div className="w-20 h-1 bg-primary"></div>
                <p className="text-muted-foreground">Découvrez quelques-unes de nos réalisations web récentes.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.portfolio.map((item, index) => (
                  <Card key={index} className="overflow-hidden bg-card border-none">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6 space-y-2">
                      <h3 className="font-medium text-lg">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center">
                <Button asChild variant="outline" className="vizir-button">
                  <Link href="/contact">Demander un devis pour votre site web</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Processus de travail */}
          <div className="mt-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="vizir-subheading">Notre Processus</h2>
                <div className="w-20 h-1 bg-primary"></div>
                <p className="text-muted-foreground">
                  Découvrez comment nous travaillons pour créer votre site web parfait.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 bg-secondary/50 space-y-4 relative">
                  <div className="absolute -top-3 -left-3 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <h3 className="font-medium text-lg pt-2">Consultation</h3>
                  <p className="text-muted-foreground text-sm">
                    Nous discutons de vos besoins, objectifs et préférences pour comprendre votre vision.
                  </p>
                </div>
                <div className="p-6 bg-secondary/50 space-y-4 relative">
                  <div className="absolute -top-3 -left-3 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <h3 className="font-medium text-lg pt-2">Conception</h3>
                  <p className="text-muted-foreground text-sm">
                    Nous créons des maquettes visuelles de votre site pour validation avant développement.
                  </p>
                </div>
                <div className="p-6 bg-secondary/50 space-y-4 relative">
                  <div className="absolute -top-3 -left-3 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <h3 className="font-medium text-lg pt-2">Développement</h3>
                  <p className="text-muted-foreground text-sm">
                    Nous développons votre site avec des technologies modernes pour des performances optimales.
                  </p>
                </div>
                <div className="p-6 bg-secondary/50 space-y-4 relative">
                  <div className="absolute -top-3 -left-3 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <h3 className="font-medium text-lg pt-2">Lancement</h3>
                  <p className="text-muted-foreground text-sm">
                    Après tests rigoureux, nous mettons votre site en ligne et assurons son suivi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-secondary/50 p-8 sm:p-12">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="vizir-subheading">Prêt à créer votre présence en ligne?</h2>
              <p className="text-muted-foreground">
                Contactez notre équipe de webdesign pour discuter de votre projet et découvrir comment nous pouvons vous
                aider à créer un site web qui convertit.
              </p>
              <Button asChild variant="outline" className="vizir-button">
                <Link href="/contact">Demander un devis</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
