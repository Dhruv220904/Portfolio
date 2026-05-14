"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export function Footer() {
  const [time, setTime] = useState("")
  const [isHovered, setIsHovered] = useState(false)
  const linkedInUrl = "https://www.linkedin.com/in/dhruv220904/"
  const githubUrl = "https://github.com/Dhruv220904"
  const profileLinks = [
    {
      label: "LinkedIn",
      href: linkedInUrl,
      note: "",
    },
    {
      label: "GitHub",
      href: githubUrl,
      note: "",
    },
  ]

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      const seconds = now.getSeconds().toString().padStart(2, "0")
      const milliseconds = now.getMilliseconds().toString().padStart(3, "0")
      setTime(`${hours}:${minutes}:${seconds}.${milliseconds}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 10)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer id="contact" className="relative">
      {/* Main CTA */}
      <motion.a
        href="mailto:dhruvsaxena220904@gmail.com"
        data-cursor-hover
        className="relative block overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Curtain */}
        <motion.div
          className="absolute inset-0 bg-violet"
          initial={{ y: "100%" }}
          animate={{ y: isHovered ? "0%" : "100%" }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Content */}
        <div className="relative py-16 md:py-24 px-8 md:px-12 border-t border-ink/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.h2
              className="font-sans text-4xl md:text-6xl lg:text-8xl font-light tracking-tight text-center md:text-left text-paper"
              animate={{ color: "var(--palette-paper)" }}
              initial={{ color: "var(--palette-paper)" }}
              transition={{ duration: 0.3 }}
            >
              Let's <span className="italic">Collaborate</span>
            </motion.h2>

            <motion.div
              className="text-paper"
              animate={{
                rotate: isHovered ? 45 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight className="w-12 h-12 md:w-16 md:h-16" />
            </motion.div>
          </div>
        </div>
      </motion.a>

      {/* Footer Info */}
      <div className="px-8 md:px-12 py-8 border-t border-ink/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Local Time */}
          <div className="font-mono text-xs tracking-widest text-muted-foreground">
            <span className="mr-2">LOCAL TIME</span>
            <span className="text-ink tabular-nums">{time}</span>
          </div>

          <a
            href="tel:+918349752249"
            data-cursor-hover
            className="font-mono text-xs tracking-widest text-muted-foreground hover:text-ink/70 transition-colors duration-300"
          >
            +91 8349752249
          </a>

          {/* Links */}
          <p className="font-mono text-xs tracking-widest text-muted-foreground">
            Let's build product experiences that improve real outcomes.
          </p>

          {/* Links */}
          <div className="flex gap-8">
            {profileLinks.map((link) => (
              <span key={link.label} className="font-mono text-xs tracking-widest text-muted-foreground">
                {link.href ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-hover
                    aria-label={`${link.label} profile`}
                    className="hover:text-paper transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ) : (
                  <span className="text-muted-foreground/80" title={link.note}>
                    {link.label}
                  </span>
                )}
              </span>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-mono text-xs tracking-widest text-muted-foreground">© {new Date().getFullYear()} Dhruv Saxena</p>
        </div>
      </div>
    </footer>
  )
}
