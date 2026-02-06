"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpCircle, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

const MediumIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-current">
    <path d="M4 6h2.2l4 7.6L14.2 6H16v12h-2V10l-3 6h-1.6l-3-6v8H4V6z" />
  </svg>
)

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/anojan-yogenthiran/",
    label: "LinkedIn",
    icon: <Linkedin className="h-8 w-8" />,
  },
  {
    href: "https://github.com/ayogenthiran",
    label: "GitHub",
    icon: <Github className="h-8 w-8" />,
  },
  {
    href: "https://medium.com/@ayogenthiran",
    label: "Medium",
    icon: <MediumIcon />,
  },
  {
    href: "https://x.com/ayogenth",
    label: "Twitter",
    icon: <Twitter className="h-8 w-8" />,
  },
]

export default function Hero() {
  return (
    <section id="home" className="flex flex-col items-center justify-center h-screen">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              <span className="gradient-text">Anojan Yogenthiran</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-muted-foreground md:text-2xl">
              <span className="js-only">
                <span>AI/ML Engineer</span>
              </span>
              <noscript>
                <span>
                  AI Engineer | Machine Learning Engineer| Data Science Engineer
                </span>
              </noscript>
            </p>
          </div>
          <div className="max-w-[800px] text-muted-foreground text-center">
            <p className="text-lg leading-relaxed">
              Self-driven, quick starter, passionate AI/ML Engineer with a curious mind <br />
              who enjoys solving complex and challenging real-world problems.
            </p>
          </div>
          <div className="flex gap-4 mt-6">
            {socialLinks.map((link) => (
              <Button key={link.label} variant="ghost" size="icon" asChild>
                <Link href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                  <span className="sr-only">{link.label}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:block js-only">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            <ArrowUpCircle className="h-10 w-10 text-primary animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  )
}
