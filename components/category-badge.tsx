import { Home, Building2, Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface CategoryBadgeProps {
  category: "residential" | "commercial" | "favorite"
  size?: "sm" | "md" | "lg"
  className?: string
}

export default function CategoryBadge({ category, size = "md", className }: CategoryBadgeProps) {
  // Définir les propriétés en fonction de la catégorie
  const categoryProps = {
    residential: {
      label: "Résidentiel",
      icon: Home,
      className: "bg-blue-500/90 hover:bg-blue-500 text-white dark:bg-blue-600/90 dark:hover:bg-blue-600",
    },
    commercial: {
      label: "Commercial",
      icon: Building2,
      className: "bg-emerald-600/90 hover:bg-emerald-600 text-white dark:bg-emerald-700/90 dark:hover:bg-emerald-700",
    },
    favorite: {
      label: "Favori",
      icon: Heart,
      className: "bg-primary/90 hover:bg-primary text-primary-foreground",
    },
  }

  const { label, icon: Icon, className: badgeClassName } = categoryProps[category]

  // Définir les tailles
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5 rounded-full",
    md: "text-xs px-2.5 py-1 rounded-full",
    lg: "text-sm px-3 py-1 rounded-full",
  }

  // Définir les tailles d'icônes
  const iconSizes = {
    sm: 10,
    md: 12,
    lg: 14,
  }

  return (
    <Badge
      className={cn(
        "font-medium backdrop-blur-sm shadow-sm transition-colors",
        sizeClasses[size],
        badgeClassName,
        className,
      )}
    >
      <Icon size={iconSizes[size]} className="mr-1" />
      {label}
    </Badge>
  )
}
