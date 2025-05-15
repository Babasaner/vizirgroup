import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import AnimatedElement from "@/components/animated-element"
import AnimatedText from "@/components/animated-text"
import PageTransition from "@/components/page-transition"

export default function AboutPage() {
  return (
    <PageTransition>
      <div>
        <div className="relative min-h-[60vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image src="https://www.vizirgroup.com/wp-content/uploads/2022/11/Lika-2.png" alt="À Propos de Vizir Group" fill className="object-cover brightness-[0.6]" />
          </div>
          <div className="container relative z-10 text-center">
            <AnimatedText text="A propos" className="vizir-heading text-white" tag="h1" />
          </div>
        </div>

        <div className="container py-16 md:py-24">
          <div className="grid gap-16">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <AnimatedElement type="slide-right">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="vizir-subheading">Notre Histoire</h2>
                    <div className="w-20 h-1 bg-primary"></div>
                  </div>
                  <p className="text-muted-foreground">
                    Fondé en 2010, Vizir Group s'est rapidement imposé comme un leader dans le secteur de la
                    construction et du développement immobilier au Maroc. Notre parcours est marqué par une croissance
                    constante, des projets innovants et un engagement inébranlable envers la qualité.
                  </p>
                  <p className="text-muted-foreground">
                    Au fil des années, nous avons développé une expertise unique dans la réalisation de projets
                    résidentiels et commerciaux qui se distinguent par leur design, leur fonctionnalité et leur
                    durabilité.
                  </p>
                </div>
              </AnimatedElement>
              <AnimatedElement type="slide-left" delay={0.2}>
                <div className="relative aspect-video overflow-hidden">
                  <Image src="https://www.vizirgroup.com/wp-content/uploads/2024/03/asset-4.png" alt="Histoire de Vizir Group" fill className="object-cover" />
                </div>
              </AnimatedElement>
            </div>

            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <AnimatedElement type="slide-right" className="order-2 md:order-1">
                <div className="relative aspect-video overflow-hidden">
                  <Image src="https://www.vizirgroup.com/wp-content/uploads/2024/03/Img-1-1.jpg" alt="Notre vision" fill className="object-cover" />
                </div>
              </AnimatedElement>
              <AnimatedElement type="slide-left" delay={0.2} className="order-1 md:order-2">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="vizir-subheading">Notre Vision</h2>
                    <div className="w-20 h-1 bg-primary"></div>
                  </div>
                  <p className="text-muted-foreground">
                    Notre vision est de redéfinir les standards de l'industrie en créant des espaces qui allient
                    esthétique, fonctionnalité et durabilité. Nous aspirons à transformer le paysage urbain tout en
                    respectant l'environnement et en contribuant au bien-être des communautés.
                  </p>
                  <p className="text-muted-foreground">
                    Chaque projet est une opportunité de laisser une empreinte positive et durable, et nous nous
                    engageons à exploiter pleinement cette opportunité.
                  </p>
                </div>
              </AnimatedElement>
            </div>

            <div className="grid gap-12 items-center">
              <AnimatedElement type="fade-in">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="vizir-subheading">Notre Équipe</h2>
                    <div className="w-20 h-1 bg-primary"></div>
                  </div>
                  <p className="text-muted-foreground">
                    Chez Vizir Group, notre force réside dans notre équipe de professionnels passionnés et expérimentés.
                    Architectes, ingénieurs, designers et gestionnaires de projet travaillent en synergie pour donner
                    vie à vos projets.
                  </p>
                  <p className="text-muted-foreground">
                    Nous valorisons l'innovation, la créativité et l'excellence technique, ce qui nous permet de relever
                    les défis les plus complexes et de dépasser les attentes de nos clients.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {[
                      {
                        name: "Doro Diagne",
                        role: "Designer Principal",
                        image: "https://www.vizirgroup.com/wp-content/uploads/2024/03/Doro.jpg",
                      },
                      {
                        name: "Pathé Bocoum",
                        role: "Architecte Principal",
                        image: "https://www.vizirgroup.com/wp-content/uploads/2024/03/pathe_bocoum.jpg",
                      },
                      {
                        name: "Momar Fall",
                        role: "Gestionnaire administratif et financier",
                        image: "https://www.vizirgroup.com/wp-content/uploads/2024/03/Momar.jpg",
                      },
                      {
                        name: "Abdou Aziz Kane",
                        role: "Architecte Sénior",
                        image: "https://www.vizirgroup.com/wp-content/uploads/2024/03/MNV05627-scaled-1.jpg",
                      },
                      {
                        name: "Penda Kanté",
                        role: "Architecte Sénior",
                        image: "https://www.vizirgroup.com/wp-content/uploads/2024/03/Penda.jpg",
                      },
                      {
                        name: "Racine Yaya Ndiong",
                        role: "Designer d'Intérieur",
                        image: "https://www.vizirgroup.com/wp-content/uploads/2024/03/MNV05590-scaled-1.jpg",
                      },
                      {
                        name: "Arnold Warren",
                        role: "Architecte Sénior",
                        image: "https://www.vizirgroup.com/wp-content/uploads/2024/03/MNV05533-scaled-1.jpg",
                      },
                      {
                        name: "MOUTE Frédéric Jospin",
                        role: "Architecte Sénior",
                        image: "https://www.vizirgroup.com/wp-content/uploads/2024/03/MNV05557-scaled-1.jpg",
                      },
                      {
                        name: "Alpha Oumar Diallo",
                        role: "Architecte junior",
                        image: "https://www.vizirgroup.com/wp-content/uploads/2024/03/MNV05616.jpg",
                      },
                      {
                        name: "Komla Joakim",
                        role: "ARCHITECTE STAFF",
                        image: "https://www.vizirgroup.com/wp-content/uploads/2024/03/MNV05608-scaled-1.jpg",
                      },


                    {
                      name: "Ahamdou DIOUF",
                      role: "Designer",
                      image: "https://www.vizirgroup.com/wp-content/uploads/2024/03/MNV05546-1-scaled-1.jpg",
                    },
                    {
                      name: "DRO LOUANET HERMANN",
                      role: "Architecte Junior",
                      image: "https://www.vizirgroup.com/wp-content/uploads/2024/03/MNV05576d.jpg",
                    }
                    ].map((member, index) => (
                      <AnimatedElement key={member.name} type="zoom-in" delay={0.1 * index}>
                        <div className="space-y-3 group">
                          <div className="relative w-full aspect-[3/4] overflow-hidden">
                            <Image
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              fill
                              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/20"></div>
                          </div>
                          <h3 className="font-medium">{member.name}</h3>
                          <p className="text-sm text-primary">{member.role}</p>
                        </div>
                      </AnimatedElement>
                    ))}
                  </div>
                </div>
              </AnimatedElement>
            </div>

            <AnimatedElement type="bounce">
              <div className="text-center space-y-8">
                <h2 className="vizir-subheading">Prêt à Collaborer?</h2>
                <Button asChild variant="outline" className="vizir-button">
                  <Link href="/contact">Contactez-nous</Link>
                </Button>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
