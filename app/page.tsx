import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Anojan Yogenthiran | AI/ML Software Engineer",
  description:
    "Portfolio of Anojan Yogenthiran, an AI/ML Software Engineer specializing in Machine Learning, Artificial Intelligence, and software development.",
}

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Contact />
    </div>
  )
}
