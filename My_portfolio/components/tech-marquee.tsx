"use client"

import { motion } from "framer-motion"

const techItems = [
  "PRODUCT DISCOVERY",
  "USER RESEARCH",
  "PRDs",
  "ROADMAP PLANNING",
  "NODE.JS",
  "REACT",
  "PYTHON",
  "LLM PIPELINES",
  "MULTI AGENT",
  "WEBAPIs",
  "REST APIs",
  "JAVASCRIPT",
]

const concepts = [
  "IMPACT-EFFORT",
  "PRODUCT METRICS",
  "Funnel Analysis",
  "MVP DEFINITION",
  "MARKET RESEARCH",
  "KPI DESIGN",
  "CHURN MITIGATION",
  "RBAC",
  "MACHINE LEARNING",
  "SLA SAFETY",
  "ROADMAP EXECUTION",
  "RETENTION STRATEGY",
]

function MarqueeRow({ items, direction = "left" }: { items: string[]; direction?: "left" | "right" }) {
  const duplicatedItems = [...items, ...items, ...items, ...items]

  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        className={`flex gap-8 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        style={{ width: "fit-content" }}
      >
        {duplicatedItems.map((item, index) => (
          <span
            key={index}
            className="group font-sans text-5xl md:text-7xl lg:text-8xl font-light tracking-tight whitespace-nowrap cursor-default"
            style={{
              WebkitTextStroke: "1px color-mix(in srgb, var(--palette-paper) 35%, transparent)",
              color: "var(--palette-paper)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--palette-paper)"
              e.currentTarget.style.WebkitTextStroke = "1px color-mix(in srgb, var(--palette-paper) 35%, transparent)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--palette-paper)"
              e.currentTarget.style.WebkitTextStroke = "1px color-mix(in srgb, var(--palette-paper) 35%, transparent)"
            }}
          >
            {item}
            <span className="mx-8 text-paper/40">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function TechMarquee() {
  return (
    <section id="tech-stack" className="relative py-24 overflow-hidden md:py-32">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-8 md:px-12 mb-16"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-paper mb-4">09 — TECHNICAL ARSENAL</p>
      </motion.div>

      {/* Marquee Rows */}
      <div className="space-y-4">
        <MarqueeRow items={techItems} direction="left" />
        <MarqueeRow items={concepts} direction="right" />
      </div>
    </section>
  )
}
