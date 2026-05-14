export type CaseStudyItem = {
  title: string
  summary: string
  year: string
  image: string
  articleUrl: string
}

const CASE_STUDY_PLACEHOLDER_IMAGE = "/Case%20Study.png"

const fallbackCaseStudies: CaseStudyItem[] = [
  {
    title: "Medilift: AI-assisted Rural Health Ops",
    summary:
      "Rural ASHA workers were spending high manual effort capturing and tracking patient updates, with delayed follow-up decisions. Mapped workflows, designed a digital data capture path, and shipped role-based dashboards with prioritised follow-up queues.",
    year: "2026",
    image: CASE_STUDY_PLACEHOLDER_IMAGE,
    articleUrl: "https://medium.com/",
  },
  {
    title: "Oris: Product-to-Market Strategy Engine",
    summary:
      "Early-stage teams struggled to convert customer interviews into a coherent MVP plan with shared execution sequencing. Created a repeatable framework: customer problem map, feature tradeoff matrix, and launch readiness checks across tech, operations, and retention KPIs.",
    year: "2026",
    image: CASE_STUDY_PLACEHOLDER_IMAGE,
    articleUrl: "https://medium.com/",
  },
]

const fallbackImages = [
  CASE_STUDY_PLACEHOLDER_IMAGE,
]

function stripCData(value: string) {
  return value.replace("<![CDATA[", "").replace("]]>", "").trim()
}

function decodeEntities(value: string) {
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
}

function normalize(value: string) {
  return decodeEntities(value)
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function extractTag(xml: string, tag: string) {
  const match = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"))
  return match?.[1] ? stripCData(match[1]).trim() : ""
}

function extractImageFromHtml(html: string) {
  const imgMatch = html.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i)
  if (imgMatch) {
    return decodeEntities(imgMatch[1])
  }

  const ogMatch = html.match(
    /<meta[^>]+(?:property|name)=["']og:image["'][^>]+content=["']([^"']+)["'][^>]*>/i,
  )
  if (ogMatch) {
    return decodeEntities(ogMatch[1])
  }

  const mediaMatch = html.match(/<media:[^>]+url=["']([^"']+)["'][^>]*>/i)
  return mediaMatch ? decodeEntities(mediaMatch[1]) : null
}

function extractImageFromItem(item: string) {
  const mediaContent = item.match(/<media:content[^>]+url=["']([^"']+)["'][^>]*>/i)?.[1]
  if (mediaContent) {
    return decodeEntities(mediaContent)
  }

  const mediaThumb = item.match(/<media:thumbnail[^>]+url=["']([^"']+)["'][^>]*>/i)?.[1]
  if (mediaThumb) {
    return decodeEntities(mediaThumb)
  }

  const enclosure = item.match(/<enclosure[^>]+url=["']([^"']+)["'][^>]*>/i)?.[1]
  if (enclosure) {
    return decodeEntities(enclosure)
  }

  const imageTag = item.match(/<image>(.*?)<\/image>/is)?.[1]
  if (imageTag) {
    const inner = imageTag.match(/<url>([^<]+)<\/url>/i)?.[1]
    if (inner) return decodeEntities(inner)
  }

  return null
}

function excerptFromText(value: string, maxLength = 260) {
  if (value.length <= maxLength) {
    return value
  }
  return `${value.slice(0, maxLength - 1).trimEnd()}…`
}

export async function getCaseStudiesFromMedium(
  username: string,
  limit = 3,
): Promise<CaseStudyItem[]> {
  const cleanUsername = username.replace("@", "").trim()
  if (!cleanUsername) {
    return fallbackCaseStudies.slice(0, limit)
  }

  try {
    const response = await fetch(`https://medium.com/feed/@${cleanUsername}`, {
      cache: "no-store",
    })

    if (!response.ok) {
      return fallbackCaseStudies.slice(0, limit)
    }

    const rss = await response.text()
    const articleMatches = rss.match(/<item\b[^>]*>[\s\S]*?<\/item>/gi) || []
    const articles: CaseStudyItem[] = []

    for (let index = 0; index < articleMatches.length && articles.length < limit; index += 1) {
      const item = articleMatches[index]
      if (!item) continue

      const title = normalize(extractTag(item, "title"))
      const link = extractTag(item, "link")
      const description = normalize(extractTag(item, "description"))
      const encoded = normalize(extractTag(item, "content:encoded"))
      const year = (() => {
        const rawDate = extractTag(item, "pubDate")
        if (!rawDate) return ""
        const parsed = new Date(rawDate)
        return Number.isNaN(parsed.getTime()) ? "" : parsed.getFullYear().toString()
      })()

      if (!title || !link) continue

      const sourceHtml = encoded || description
      const image =
        extractImageFromItem(item) || extractImageFromHtml(sourceHtml) || fallbackImages[index % fallbackImages.length]
      const summarySource = normalize(sourceHtml || description)

      articles.push({
        title,
        summary: excerptFromText(summarySource),
        year: year || String(new Date().getFullYear()),
        image,
        articleUrl: link,
      })
    }

    if (articles.length > 0) {
      return articles
    }

    return fallbackCaseStudies.slice(0, limit)
  } catch (error) {
    return fallbackCaseStudies.slice(0, limit)
  }
}

export { fallbackCaseStudies }
