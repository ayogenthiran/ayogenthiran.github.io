import GalleryGrid from "@/components/gallery-grid"
import { galleryItems } from "@/lib/gallery"

export const metadata = {
  title: "Gallery - Anojan Yogenthiran",
  description: "A collection of memorable professional moments from projects, conferences, and milestones.",
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20 md:px-6">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-3 text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
              Gallery
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              A collection of memorable moments
            </p>
          </div>

          <GalleryGrid items={galleryItems} />
        </div>
      </div>
    </div>
  )
}
