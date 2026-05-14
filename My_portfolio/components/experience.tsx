"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const experiences = [
  {
    role: "Product Intern",
    company: "Why School On Site",
    period: "Jan 2026 – Apr 2026",
    logo: "/whyschool-logo.png",
    logoClass: "h-20 w-56 md:h-24 md:w-64",
    bullets: [
      "Conducted user research and discovery to identify learning pain points and shape roadmap priorities.",
      "Converted user insights into PRDs, product flows, user stories, and execution-ready engineering requirements.",
      "Prioritised feature ideas through impact-effort tradeoffs, product metrics, and stakeholder feedback.",
    ],
  },
  {
    role: "Director of Projects",
    company: "Enactus KIIT Bhubaneswar, India",
    period: "2024 – Present",
    logo: "/552_enactus.jpg",
    logoClass: "h-20 w-56 md:h-24 md:w-64",
    bullets: [
      "Led 3+ end-to-end technology and impact projects for national competition timelines.",
      "Defined KPIs, success metrics, and execution roadmaps across research, product, and delivery teams.",
      "Managed cross-functional teams of 100+ people across operations, strategy, and execution workstreams.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "BITS Pilani IOT Lab Remote",
    period: "2025",
    logo: "/BITS%20Pilani%20Logo-b73417195f5945c0988827a5a07a5419.jpeg",
    logoClass: "h-28 w-72 md:h-32 md:w-80",
    bullets: [
      "Built typed REST APIs for a 6-member engineering team, reducing frontend-backend integration rework by 30%.",
      "Collaborated with developers to define contracts, debug integration issues, and align backend workflows with product goals.",
      "Implemented modular Node.js/Express services with versioned routes and structured handoff documentation.",
    ],
  },
]

export function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="experience" className="relative py-24 px-8 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">04 — EXPERIENCE</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic">Roles & Impact</h2>
      </motion.div>

      <div className="space-y-10">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.company + experience.role}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.12 }}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            className="border-t border-ink/10 pt-8 md:pt-10"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="space-y-3 md:w-2/5">
                <div className={`overflow-hidden ${experience.logoClass || "h-20 w-56 md:h-24 md:w-64"}`}>
                  <img
                    src={experience.logo || "/placeholder-logo.png"}
                    alt={`${experience.company} logo`}
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="font-mono text-xs tracking-widest text-muted-foreground">{experience.period}</p>
                <h3 className="font-sans text-3xl md:text-4xl font-light tracking-tight">
                  {experience.role}
                </h3>
                <p className="font-mono text-sm text-muted-foreground">{experience.company}</p>
              </div>

              <ul className="md:w-3/5 space-y-3">
                {experience.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="font-sans text-base md:text-lg leading-relaxed text-foreground/85 border-l border-ink/20 pl-4"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: activeIndex === index ? 1 : 0.2 }}
              transition={{ duration: 0.35 }}
              className="mt-8 h-px bg-gradient-to-r from-accent/80 via-foreground/40 to-transparent origin-left"
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
