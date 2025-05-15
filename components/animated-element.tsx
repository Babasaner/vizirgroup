"use client"

import type { ReactNode } from "react"
import { motion, type Variant } from "framer-motion"
import { useInView } from "react-intersection-observer"

type AnimationType = "fade-in" | "slide-up" | "slide-right" | "slide-left" | "zoom-in" | "bounce"

interface AnimatedElementProps {
  children: ReactNode
  type?: AnimationType
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  threshold?: number
}

export default function AnimatedElement({
  children,
  type = "fade-in",
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
  threshold = 0.1,
}: AnimatedElementProps) {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold,
  })

  const animations: Record<AnimationType, { initial: Variant; animate: Variant }> = {
    "fade-in": {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    "slide-up": {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
    },
    "slide-right": {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 },
    },
    "slide-left": {
      initial: { opacity: 0, x: 30 },
      animate: { opacity: 1, x: 0 },
    },
    "zoom-in": {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
    },
    bounce: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 15 } },
    },
  }

  const { initial, animate } = animations[type]

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? animate : initial}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
