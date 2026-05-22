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
    caption: "Vector Institute AI project showcase",
  },
  {
    id: "healthcare-ai-demo",
    src: "/images/gallery/healthcare-ai-demo.jpeg",
    alt: "Petal Health AI assistant project demo",
    caption: "Petal Health AI assistant project demo",
  },
  {
    id: "hackathon",
    src: "/images/gallery/no-name-hackathon.jpg",
    alt: "Team collaboration during a hackathon",
    caption: "Hackathon collaboration and rapid prototyping",
  },
  {
    id: "conference-moment",
    src: "/images/gallery/conference-moment.jpg",
    alt: "Vector Institute's Remarkable 2026 conference networking",
    caption: "Vector Institute Remarkable 2026 conference",
  },
  {
    id: "graduation",
    src: "/images/gallery/masters-graduation.JPG",
    alt: "Master's graduation ceremony",
    caption: "Master's graduation milestone",
  },
]
