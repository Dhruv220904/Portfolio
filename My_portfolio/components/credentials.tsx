"use client"

import { motion } from "framer-motion"

const education = [
  {
    title: "KIIT University, Bhubaneswar, India",
    subtitle: "B.Tech in Computer Science, CGPA: 8.16 / 10",
    period: "2023 – 2027 (Expected)",
    notes: "Relevant Coursework: DSA, OOP, DBMS, Operating Systems, Networks, AI, ML",
  },
  {
    title: "Kendriya Vidyalaya O.F. Khamaria, Jabalpur, India",
    subtitle: "Class X: 92.4% | Class XII: 75%",
    period: "Earlier Education",
  },
]

const achievements = [
  "Enactus National Cup Winner; Mature Stage – 2025",
  "Hackathons: Codex – OpenAI 2026 | Lyzr Agentathon 2026 | IIT KGP Hackathon 2024",
  "Certifications: Strategy & Game Theory (IIM Ahmedabad), Business Analytics (University of Colorado Boulder), Machine Learning Specialization (DeepLearning.AI)",
]

export function Credentials() {
  return (
    <section id="credentials" className="relative py-24 px-8 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">05 — EDUCATION & CREDENTIALS</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic">Education, Achievements & Certifications</h2>
      </motion.div>

      <div className="space-y-10">
        <div className="space-y-8 border-t border-ink/10 pt-8">
          {education.map((entry) => (
            <motion.div
              key={entry.title + entry.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid gap-2"
            >
              <p className="font-mono text-xs tracking-widest text-muted-foreground">{entry.period}</p>
              <h3 className="font-sans text-2xl md:text-4xl font-light tracking-tight">{entry.title}</h3>
              <p className="font-mono text-sm text-foreground/85">{entry.subtitle}</p>
              {entry.notes && <p className="font-sans text-base md:text-lg text-foreground/80">{entry.notes}</p>}
            </motion.div>
          ))}
        </div>

        <div className="border-t border-ink/10 pt-8">
            <h3 className="font-sans text-2xl md:text-3xl font-light tracking-tight mb-6">Achievements</h3>
          <ul className="space-y-3">
            {achievements.map((item) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border-l border-ink/25 pl-4 text-foreground/85"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
