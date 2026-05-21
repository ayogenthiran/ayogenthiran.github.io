"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { GalleryItem } from "@/lib/gallery"

interface GalleryGridProps {
  items: GalleryItem[]
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const isOpen = lightboxIndex !== null

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const goTo = useCallback(
    (index: number) => {
      const total = items.length
      setLightboxIndex(((index % total) + total) % total)
    },
    [items.length],
  )

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return
    goTo(lightboxIndex + 1)
  }, [goTo, lightboxIndex])

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return
    goTo(lightboxIndex - 1)
  }, [goTo, lightboxIndex])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, goNext, goPrev])

  const activeItem = lightboxIndex !== null ? items[lightboxIndex] : null

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <motion.button
            key={item.id}
            type="button"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            onClick={() => openLightbox(index)}
            className="group w-full cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl"
            aria-label={`View ${item.caption}`}
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <p className="px-4 py-3 text-sm text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-foreground">
                {item.caption}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {isOpen && activeItem && lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label="Gallery lightbox"
          >
            <motion.button
              type="button"
              className="absolute inset-0 bg-background/90 backdrop-blur-sm"
              onClick={closeLightbox}
              aria-label="Close gallery"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="relative z-10 flex w-full max-w-5xl flex-col items-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-2 right-0 z-20 h-10 w-10 rounded-full border border-border bg-card/80 backdrop-blur-sm hover:bg-card sm:-right-2 sm:-top-12"
                onClick={closeLightbox}
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 rounded-full border border-border bg-card/80 backdrop-blur-sm hover:bg-card sm:flex sm:-left-14"
                onClick={goPrev}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 rounded-full border border-border bg-card/80 backdrop-blur-sm hover:bg-card sm:flex sm:-right-14"
                onClick={goNext}
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-card shadow-[0_0_40px_hsl(var(--primary)/0.12)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.id}
                    className="relative mx-auto flex min-h-[240px] w-full max-h-[70vh] items-center justify-center sm:min-h-[360px]"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Image
                      src={activeItem.src}
                      alt={activeItem.alt}
                      width={1200}
                      height={900}
                      sizes="(min-width: 1024px) 900px, 100vw"
                      className="max-h-[70vh] w-auto max-w-full object-contain p-4"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <motion.p
                key={`caption-${activeItem.id}`}
                className="mt-4 max-w-2xl text-center text-sm text-muted-foreground sm:text-base"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {activeItem.caption}
              </motion.p>

              <div className="mt-5 flex items-center gap-3 sm:hidden">
                <Button variant="outline" size="icon" onClick={goPrev} aria-label="Previous image">
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" onClick={goNext} aria-label="Next image">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2">
                {items.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goTo(index)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      index === lightboxIndex
                        ? "w-6 bg-primary"
                        : "w-2 bg-muted-foreground/40 hover:bg-primary/60",
                    )}
                    aria-label={`Go to image ${index + 1}: ${item.caption}`}
                    aria-current={index === lightboxIndex ? "true" : undefined}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
