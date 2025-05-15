"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { useEffect, useState } from "react"

export default function Testimonials() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [mounted, setMounted] = useState(false)

  // Éviter les erreurs d'hydratation
  useEffect(() => {
    setMounted(true)
  }, [])

  const testimonials = [
    {
      id: "1",
      name: "Mohammed Alami",
      role: "Directeur Général, Société XYZ",
      content:
        "Nous avons fait appel à Vizir Group pour la construction de notre nouveau siège social, et nous sommes extrêmement satisfaits du résultat. Leur professionnalisme, leur expertise et leur attention aux détails ont fait toute la différence.",
      avatar: "/professional-man-portrait.png",
      rating: 5,
    },
    {
      id: "2",
      name: "Leila Benali",
      role: "Propriétaire, Résidence Les Jardins",
      content:
        "L'équipe de Vizir Group a transformé notre vision en réalité. Notre résidence est exactement comme nous l'avions imaginée, voire mieux. Leur capacité à comprendre nos besoins et à proposer des solutions innovantes a été remarquable.",
      avatar: "/professional-woman-portrait.png",
      rating: 5,
    },
    {
      id: "3",
      name: "Karim Tazi",
      role: "Investisseur Immobilier",
      content:
        "J'ai collaboré avec Vizir Group sur plusieurs projets, et je suis toujours impressionné par leur efficacité et leur fiabilité. Ils respectent les délais et les budgets, tout en maintenant un niveau de qualité exceptionnel.",
      avatar: "/placeholder.svg?key=cg0ep",
      rating: 4,
    },
    {
      id: "4",
      name: "Sophia Mansouri",
      role: "Architecte d'intérieur",
      content:
        "Travailler avec Vizir Group a été une expérience enrichissante. Leur approche collaborative et leur vision créative ont permis de réaliser des projets qui dépassent les attentes. Je recommande vivement leurs services.",
      avatar: "/professional-woman-portrait.png",
      rating: 5,
    },
    {
      id: "5",
      name: "Youssef El Amrani",
      role: "Promoteur Immobilier",
      content:
        "La qualité du travail de Vizir Group est exceptionnelle. Leur équipe a su gérer efficacement notre projet complexe, en respectant les délais et le budget. Leur expertise en architecture et en marketing immobilier est inégalée.",
      avatar: "/middle-eastern-businessman.png",
      rating: 5,
    },
  ]

  return (
    <section ref={ref} className="vizir-section bg-secondary/90 backdrop-blur-sm">
      <div className="container">
        <div className="space-y-12">
          <div className={`space-y-4 text-center ${inView ? "animate-fade-in" : "opacity-0"}`}>
            <h2 className="vizir-subheading">Ce que disent nos clients</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Découvrez les témoignages de nos clients satisfaits qui ont fait confiance à Vizir Group pour leurs
              projets.
            </p>
          </div>

          {mounted ? (
            <div className={`${inView ? "animate-fade-in stagger-2" : "opacity-0"}`}>
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                className="testimonial-swiper pb-12"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <Card className="h-full bg-background/50 backdrop-blur-sm border-border/40">
                      <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < testimonial.rating ? "fill-primary text-primary" : "text-muted"
                              }`}
                            />
                          ))}
                        </div>
                        <div className="relative">
                          <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary/20 rotate-180" />
                          <p className="text-muted-foreground pt-2 pl-4">{testimonial.content}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.slice(0, 3).map((testimonial) => (
                <Card key={testimonial.id} className="h-full">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < testimonial.rating ? "fill-primary text-primary" : "text-muted"}`}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground">{testimonial.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
