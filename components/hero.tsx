"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpCircle, Github, Linkedin, Twitter, FileText } from "lucide-react"
import Link from "next/link"

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
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/anojan-yogenthiran/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-8 w-8" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/ayogenthiran" target="_blank" rel="noopener noreferrer">
                <Github className="h-8 w-8" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://medium.com/@ayogenthiran" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-current">
                  <path d="M4 6h2.2l4 7.6L14.2 6H16v12h-2V10l-3 6h-1.6l-3-6v8H4V6z" />
                </svg>
                <span className="sr-only">Medium</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://x.com/ayogenth" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-8 w-8" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/Anojan_Yogenthiran_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="h-8 w-8" />
                <span className="sr-only">Resume</span>
              </Link>
            </Button>
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
