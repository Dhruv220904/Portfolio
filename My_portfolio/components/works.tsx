"use client"

import { motion } from "framer-motion"

const projects = [
  {
    title: "Oris",
    description:
      "AI strategy engine that converts product ideas into MVP scope, market positioning, differentiation analysis, and execution roadmaps.",
    tags: ["Python", "LLM Pipelines", "Multi-Agent Systems", "JSON Workflows"],
    image: "/abstract-neural-network-visualization-dark-theme.jpg",
    year: "2026",
    link: "#",
  },
  {
    title: "Medilift",
    description:
      "Full-stack health-tech platform digitising ASHA documentation and providing dashboard-driven rural health insights.",
    tags: ["React", "Node.js", "REST APIs", "Machine Learning"],
    image: "/futuristic-data-dashboard-dark-minimal.jpg",
    year: "2026",
    link: "https://github.com/Dhruv220904/MediLift",
  },
  {
    title: "Prescription Tracker & Insurance Manager",
    description:
      "RBAC platform for prescriptions and insurance records with role-specific data access and user-friendly clinical workflows.",
    tags: ["Node.js", "Express.js", "REST APIs", "RBAC"],
    image: "/abstract-memory-storage-visualization.jpg",
    year: "2025",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7373347095438639104/",
  },
  {
    title: "Customer Churn Prediction",
    description:
      "Built churn models and translated ML outputs into retention actions, funnel improvements, and retention strategy recommendations.",
    tags: ["Random Forest", "XGBoost", "SMOTE", "PCA", "Python"],
    image: "/sound-wave-visualization-dark-theme.jpg",
    year: "2026",
    link: "https://ieeexplore.ieee.org/document/11502610",
  },
  {
    title: "LCAO: Latency Constrained Agent Orchestration",
    description:
      "Co-authored research on autonomous 5G/6G slicing with safety guarantees using multi-agent RL and formal constraints.",
    tags: ["MADDPG", "ADMM", "Z3 SMT", "SHAP", "Brax"],
    image: "/placeholder.jpg",
    year: "2024 – Present",
    link: "#",
  },
]

export function Works() {
  return (
    <section id="works" className="relative py-32 px-8 md:px-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">06 — PROJECTS</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic">Portfolio Highlights</h2>
      </motion.div>

      <div className="relative">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative border-t border-ink/10 py-8 md:py-12"
          >
            <a
              href={project.link}
              data-cursor-hover
              target={project.link.startsWith("http") ? "_blank" : "_self"}
              rel={project.link.startsWith("http") ? "noreferrer" : undefined}
              className="group flex flex-col md:flex-row md:items-start justify-between gap-4"
            >
              <span className="font-mono text-xs text-muted-foreground tracking-widest order-1 md:order-none md:w-1/5">
                {project.year}
              </span>

              <motion.div className="md:w-3/5 transition-colors duration-300">
                <h3 className="font-sans text-3xl md:text-5xl lg:text-6xl font-light tracking-tight group-hover:text-foreground/70 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-3xl text-base md:text-lg text-foreground/80 leading-relaxed">
                  {project.description}
                </p>
              </motion.div>

              <div className="flex gap-2 flex-wrap order-2 md:order-none md:w-1/5 md:justify-end">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] tracking-wider px-3 py-1 border border-ink/18 rounded-full text-muted-foreground"
                >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </motion.div>
        ))}
      </div>

      <div className="border-t border-ink/10" />
    </section>
  )
}
