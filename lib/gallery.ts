/**
 * Gallery items — edit `src` and `caption` to update the gallery.
 * Place images in public/images/gallery/
 */
export interface GalleryItem {
  id: string
  src: string
  alt: string
  caption: string
}

export const galleryItems: GalleryItem[] = [
  {
    id: "vector-showcase",
    src: "/images/gallery/vector-showcase-01.jpg",
    alt: "Vector Institute project showcase",
    caption: "Vector Institute project showcase",
  },
  {
    id: "healthcare-ai-demo",
    src: "/images/gallery/healthcare-ai-demo.jpeg",
    alt: "Healthcare AI scheduling assistant demo",
    caption: "Healthcare AI scheduling assistant demo",
  },
  {
    id: "research-presentation",
    // Replace src when you add a dedicated image (e.g. research-presentation.jpg)
    src: "/images/gallery/conference-moment.jpg",
    alt: "Research and technical presentation",
    caption: "Research and technical presentation",
  },
  {
    id: "hackathon",
    src: "/images/gallery/no-name-hackathon.jpg",
    alt: "Team collaboration and hackathon",
    caption: "Team collaboration and hackathon",
  },
  {
    id: "conference-moment",
    src: "/images/gallery/conference-moment.jpg",
    alt: "AI/ML conference or networking moment",
    caption: "AI/ML conference or networking moment",
  },
  {
    id: "graduation",
    src: "/images/gallery/masters-graduation.JPG",
    alt: "Graduation",
    caption: "Graduation",
  },
]
