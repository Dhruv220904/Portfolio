import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Credentials } from "@/components/credentials"
import { Works } from "@/components/works"
import { CaseStudies } from "@/components/case-studies"
import { TechMarquee } from "@/components/tech-marquee"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { SectionBlend } from "@/components/section-blend"
import { getCaseStudiesFromMedium } from "@/lib/medium-feed"

const DEFAULT_MEDIUM_PROFILE_URL = "https://medium.com/@dhruvsaxena220904"
const DEFAULT_LINKEDIN_URL = "https://www.linkedin.com/in/dhruv220904/"
const DEFAULT_RESUME_URL =
  "https://drive.google.com/file/d/1Ai_8EryTRoD08IbH32kyTvqB0RQzrMP_/view?usp=sharing"

function extractMediumUsername(profileUrl: string) {
  const cleaned = profileUrl.trim()
  const atIndex = cleaned.lastIndexOf("@")
  if (atIndex !== -1) {
    return cleaned.slice(atIndex + 1).split("/")[0].replace(/[^a-zA-Z0-9_]/g, "").trim()
  }
  return cleaned.replace(/^.*\/@?/, "").replace(/[^a-zA-Z0-9_]/g, "").trim()
}

export default async function Home() {
  const mediumProfileUrl =
    process.env.NEXT_PUBLIC_MEDIUM_PROFILE_URL || DEFAULT_MEDIUM_PROFILE_URL
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL || DEFAULT_LINKEDIN_URL
  const mediumUsername = extractMediumUsername(mediumProfileUrl)
  const caseStudies = await getCaseStudiesFromMedium(mediumUsername, 3)

  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero resumeUrl={DEFAULT_RESUME_URL} />
        <SectionBlend />
        <About />
        <Experience />
        <Credentials />
        <Works />
        <CaseStudies
          caseStudies={caseStudies}
          mediumProfileUrl={mediumProfileUrl}
          linkedinUrl={linkedinUrl}
        />
        <TechMarquee />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
