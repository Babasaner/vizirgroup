"use client"
import { motion } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  staggerChildren?: number
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
}

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
  duration = 0.05,
  staggerChildren = 0.02,
  tag = "div",
}: AnimatedTextProps) {
  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren, delayChildren: delay },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  const Tag = tag as keyof JSX.IntrinsicElements

  return (
    <Tag className={className}>
      <motion.span
        style={{ display: "inline-block", whiteSpace: "pre-wrap" }}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {words.map((word, index) => (
          <motion.span key={index} variants={child} style={{ display: "inline-block", marginRight: "0.25em" }}>
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  )
}
