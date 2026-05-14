"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"
import type { CaseStudyItem } from "@/lib/medium-feed"
import { fallbackCaseStudies } from "@/lib/medium-feed"

type CaseStudiesProps = {
  caseStudies: CaseStudyItem[]
  mediumProfileUrl: string
  linkedinUrl: string
}

const CASE_STUDY_FALLBACK_IMAGE = "/Case%20Study.png"

function CaseStudyImage({
  src,
  alt,
}: {
  src: string
  alt: string
}) {
  const [imageSrc, setImageSrc] = useState(src || CASE_STUDY_FALLBACK_IMAGE)

  return (
    <img
      src={imageSrc}
      alt={alt}
      loading="lazy"
      onError={() => {
        if (imageSrc !== CASE_STUDY_FALLBACK_IMAGE) {
          setImageSrc(CASE_STUDY_FALLBACK_IMAGE)
        }
      }}
      className="absolute inset-0 h-full w-full object-cover"
    />
  )
}

export function CaseStudies({ caseStudies, mediumProfileUrl, linkedinUrl }: CaseStudiesProps) {
  const studiesToRender = caseStudies.length > 0 ? caseStudies : fallbackCaseStudies

  return (
    <section id="case-studies" className="relative py-28 px-8 md:px-12 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">08 — CASE STUDIES</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic">Featured Outcomes</h2>
      </motion.div>

      <div className="space-y-12">
        {studiesToRender.map((study, index) => (
          <motion.article
            key={`${study.articleUrl}-${index}`}
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.12 }}
            className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] border border-ink/12 rounded-lg overflow-hidden bg-card"
          >
            <div className="relative min-h-72 bg-ink">
              <CaseStudyImage src={study.image} alt={study.title} />
              <div className="absolute inset-0 bg-ink/10" />
            </div>

            <div className="flex flex-col justify-between p-8">
              <div>
                <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground">{study.year}</p>
                <h3 className="mt-3 font-sans text-2xl md:text-4xl font-light tracking-tight">{study.title}</h3>
                <div className="mt-6 space-y-4 text-foreground/85 text-sm md:text-base leading-relaxed">
                  <p>
                    <strong className="font-sans">Summary:</strong> {study.summary}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={study.articleUrl}
                  data-cursor-hover
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs md:text-sm font-mono tracking-widest border border-ink/25 px-4 py-2 rounded-full hover:bg-violet hover:text-paper transition-colors duration-300"
                >
                  READ CASE ON MEDIUM <ArrowUpRight className="h-3 w-3" />
                </a>
                <a
                  href={mediumProfileUrl}
                  data-cursor-hover
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs md:text-sm font-mono tracking-widest border border-ink/25 px-4 py-2 rounded-full hover:bg-violet hover:text-paper transition-colors duration-300"
                >
                  VISIT MEDIUM PROFILE <ArrowUpRight className="h-3 w-3" />
                </a>
                <a
                  href={linkedinUrl}
                  data-cursor-hover
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs md:text-sm font-mono tracking-widest border border-ink/25 px-4 py-2 rounded-full hover:bg-violet hover:text-paper transition-colors duration-300"
                >
                  VIEW LINKEDIN UPDATES <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
