"use client"

const galleryItems = [
  {
    title: "Team Discovery Session",
    image: "/abstract-neural-network-visualization-dark-theme.jpg",
  },
  {
    title: "Field Research Walkthrough",
    image: "/abstract-memory-storage-visualization.jpg",
  },
  {
    title: "Technical Planning",
    image: "/futuristic-data-dashboard-dark-minimal.jpg",
  },
  {
    title: "Learning Session",
    image: "/sound-wave-visualization-dark-theme.jpg",
  },
  {
    title: "Pitch and Strategy",
    image: "/placeholder-user.jpg",
  },
]

const galleryLoop = [...galleryItems, ...galleryItems]

export function Gallery() {
  return (
    <section id="gallery" className="relative py-28 px-8 md:px-12 md:py-32">
      <div className="mb-12">
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">07 — ME IN ACTION</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic">Gallery</h2>
        <p className="mt-3 max-w-2xl text-sm md:text-base text-foreground/80">
          Replace these visuals with real action shots from your work.
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="overflow-hidden">
          <div className="flex gap-6 animate-marquee-left w-max" style={{ width: "fit-content" }}>
            {galleryLoop.map((item, index) => (
              <img
                key={`${item.title}-${index}`}
                src={item.image}
                alt={item.title}
                className="h-60 w-[80vw] max-w-[28rem] md:h-72 md:w-[36rem] object-cover flex-shrink-0"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
