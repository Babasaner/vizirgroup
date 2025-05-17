'use client'

import Link from "next/link"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"

// Si tu utilises des composants animés
const AnimatedElement = dynamic(() => import("@/components/animated-element"), { ssr: false })

export default function NotFound() {
  return (
    <AnimatedElement type="fade-in">
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">Page non trouvée</h1>
        <p className="text-muted-foreground mb-6">
          Désolé, la page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Button asChild>
          <Link href="/">Retour à l&apos;accueil</Link>
        </Button>
      </div>
    </AnimatedElement>
  )
}
