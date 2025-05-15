"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectChange = (value: string) => {
    setFormState({
      ...formState,
      subject: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logique d'envoi du formulaire à implémenter
    console.log("Form submitted:", formState)
    alert("Votre message a été envoyé. Nous vous contacterons bientôt.")
    setFormState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div>
      <div className="relative min-h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src="/contact-hero.png" alt="Contactez-nous" fill className="object-cover brightness-[0.6]" />
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="vizir-heading text-white">Contactez-nous</h1>
        </div>
      </div>

      <div className="container py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="vizir-subheading">Nos Coordonnées</h2>
              <div className="w-20 h-1 bg-primary"></div>
              <p className="text-muted-foreground">
                Nous sommes là pour répondre à toutes vos questions et discuter de vos projets. N'hésitez pas à nous
                contacter.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Adresse</h3>
                  <p className="text-muted-foreground">123 Boulevard Mohammed V, Casablanca, Maroc</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Téléphone</h3>
                  <p className="text-muted-foreground">+212 5XX XX XX XX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">contact@vizirgroup.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Heures d'ouverture</h3>
                  <p className="text-muted-foreground">Lundi - Vendredi: 9h00 - 18h00</p>
                  <p className="text-muted-foreground">Samedi: 9h00 - 13h00</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-video overflow-hidden">
              {/* Remplacer par une carte Google Maps réelle */}
              <div className="absolute inset-0 bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Carte Google Maps à intégrer ici</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="vizir-subheading">Envoyez-nous un message</h2>
              <div className="w-20 h-1 bg-primary"></div>
              <p className="text-muted-foreground">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid gap-4">
                <label htmlFor="name" className="font-medium">
                  Nom complet
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  required
                  className="bg-secondary border-border/40"
                />
              </div>

              <div className="grid gap-4">
                <label htmlFor="email" className="font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  required
                  className="bg-secondary border-border/40"
                />
              </div>

              <div className="grid gap-4">
                <label htmlFor="phone" className="font-medium">
                  Téléphone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder="+212 5XX XX XX XX"
                  className="bg-secondary border-border/40"
                />
              </div>

              <div className="grid gap-4">
                <label htmlFor="subject" className="font-medium">
                  Sujet
                </label>
                <Select onValueChange={handleSelectChange} value={formState.subject}>
                  <SelectTrigger className="bg-secondary border-border/40">
                    <SelectValue placeholder="Sélectionnez un sujet" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="information">Demande d'information</SelectItem>
                    <SelectItem value="project">Nouveau projet</SelectItem>
                    <SelectItem value="partnership">Partenariat</SelectItem>
                    <SelectItem value="other">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-4">
                <label htmlFor="message" className="font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Votre message"
                  rows={5}
                  required
                  className="bg-secondary border-border/40"
                />
              </div>

              <Button type="submit" variant="outline" className="vizir-button">
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
