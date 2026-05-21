import GalleryGrid from "@/components/gallery-grid"
import { galleryItems } from "@/lib/gallery"

export const metadata = {
  title: "Gallery - Anojan Yogenthiran",
  description: "Professional moments from AI project showcases, demos, conferences, and academic milestones.",
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20 md:px-6">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-3 text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
              Professional Gallery
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Selected moments from AI project showcases, healthcare demos, conferences, hackathons, and academic
              milestones.
            </p>
          </div>

          <GalleryGrid items={galleryItems} />
        </div>
      </div>
    </div>
  )
}
