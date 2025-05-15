"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function AnimatedCard({ children, className = "", delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className={className}>{children}</Card>
    </motion.div>
  )
}
