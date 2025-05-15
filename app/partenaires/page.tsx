import Image from "next/image"

export default function PartnersPage() {
  const partners = [
    {
      id: "partner1",
      name: "Partenaire 1",
      logo: "/partner1-logo.png",
      description: "Description du partenaire 1",
    },
    {
      id: "partner2",
      name: "Partenaire 2",
      logo: "/partner2-logo.png",
      description: "Description du partenaire 2",
    },
    {
      id: "partner3",
      name: "Partenaire 3",
      logo: "/partner3-logo.png",
      description: "Description du partenaire 3",
    },
    {
      id: "partner4",
      name: "Partenaire 4",
      logo: "/partner4-logo.png",
      description: "Description du partenaire 4",
    },
    {
      id: "partner5",
      name: "Partenaire 5",
      logo: "/partner5-logo.png",
      description: "Description du partenaire 5",
    },
    {
      id: "partner6",
      name: "Partenaire 6",
      logo: "/partner6-logo.png",
      description: "Description du partenaire 6",
    },
  ]

  return (
    <div>
      <div className="relative min-h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src="/partners-hero.png" alt="Nos Partenaires" fill className="object-cover brightness-[0.6]" />
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="vizir-heading text-white">Notre Réseau</h1>
        </div>
      </div>

      <div className="container py-16 md:py-24">
        <div className="space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="vizir-subheading">Nos Partenaires</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground">
              Chez Vizir Group, nous collaborons avec des partenaires de confiance qui partagent notre engagement envers
              l'excellence et la qualité. Notre réseau de partenaires nous permet d'offrir des solutions complètes et
              intégrées à nos clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <div key={partner.id} className="flex flex-col items-center text-center space-y-4">
                <div className="relative w-40 h-40 bg-secondary flex items-center justify-center p-4">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <h3 className="font-medium">{partner.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
