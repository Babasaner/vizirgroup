"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps {
  children: ReactNode
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

export default function AnimatedButton({
  children,
  className,
  variant = "default",
  size = "default",
  asChild = false,
  onClick,
  type,
  disabled,
}: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Button
        className={cn("transition-all", className)}
        variant={variant}
        size={size}
        asChild={asChild}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        {children}
      </Button>
    </motion.div>
  )
}
