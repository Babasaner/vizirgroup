"use client"

import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ContactCta() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="vizir-section bg-secondary/90 backdrop-blur-sm">
      <div className="container">
        <div
          className={`max-w-3xl mx-auto text-center space-y-6 sm:space-y-8 ${inView ? "animate-fade-in" : "opacity-0"}`}
        >
          <h2 className="vizir-heading">Prêt à concrétiser votre projet?</h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Contactez-nous dès aujourd'hui pour discuter de votre vision et découvrir comment Vizir Group peut vous
            aider à la réaliser.
          </p>
          <Button asChild variant="outline" className="vizir-button">
            <Link href="/contact">Demander mon projet</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
