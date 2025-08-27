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
                <span>AI/ML Software Engineer</span>
              </span>
              <noscript>
                <span>
                  AI/ML Software Engineer | Machine Learning Specialist | Python Expert | Data Science Professional
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
              <Link href="https://x.com/ayogenth" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-8 w-8" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
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
