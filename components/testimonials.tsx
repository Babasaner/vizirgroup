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
      role: "Directeur Général, Akwa Résidence",
      content:
        "Vizir Group a totalement transformé notre manière de présenter nos biens immobiliers. Grâce à leurs visuels immersifs et à leur stratégie marketing, nous avons doublé nos demandes de visites en quelques semaines seulement. la différence.",
     
    },
    {
      id: "2",
      name: "M.A.DIOP",
      role: "Propriétaire, Residence Abbesses",
      content:
        "La collaboration avec Vizir Group a été un vrai moteur pour notre communication. Entre les rendus 3D, les campagnes ciblées et le storytelling de nos projets, tout a été pensé pour séduire nos clients potentiels.",
     
    },
    {
      id: "3",
      name: "Thierno K",
      role: "Promoteur immobilier",
      content:
        "Nous avons fait appel à Vizir Group pour la conception de nos supports marketing et de notre site de présentation. Le rendu est professionnel, élégant et surtout très efficace pour attirer les investisseurs.",
     
    
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
                        
                        <div>
                          <h3 className="font-semibold">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                       
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
                   
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                   
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
