import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import CategoryBadge from "@/components/category-badge"

interface Project {
  id: string
  title: string
  description: string
  category: "residential" | "commercial"
  image: string
  year: number
  location: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[4/3]">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <CategoryBadge category={project.category} size="md" />
        </div>
      </div>
      <CardHeader>
        <div className="space-y-1">
          <h3 className="font-bold text-lg text-primary">{project.title}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{project.location}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{project.description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href={`/projets/${project.id}`}>Voir le projet</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
