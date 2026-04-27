import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

export const metadata = {
  title: "Projects - Anojan Yogenthiran",
  description: "A selection of my personal and professional AI/ML projects and software development work.",
}

const projects = [
  {
    id: 1,
    title: "ArxivLens — AI Research Paper Assistant",
    description:
      "An AI-powered research assistant for exploring arXiv papers through natural language questions. It uses retrieval-augmented generation to find relevant paper excerpts and generate context-aware answers from scientific documents.",
    date: "April 2026",
    technologies: [
      "Python",
      "RAG",
      "FastAPI",
      "Streamlit",
      "ChromaDB",
      "Sentence-Transformers",
      "OpenAI API",
      "Cross-Encoder Reranker",
    ],
    image: "/images/projects/arxivlens.png",
    codeUrl: "https://github.com/ayogenthiran/arxivlens",
    demoUrl: "#",
  },
  {
    id: 2,
    title: "Policy Pilot — AI Document Assistant",
    description:
      "Upload, analyze, and chat with policy documents using an AI-powered RAG pipeline. Delivered citation-backed answers, summaries, and key clause extraction, cutting manual research time by ~70%.",
    date: "September 2025",
    technologies: ["Python", "FAISS", "LangChain", "AWS", "Lambda"],
    image: "/images/projects/pilot-icon.png",
    codeUrl: "https://github.com/ayogenthiran/policy-pilot",
    demoUrl: "#",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl font-bold text-center mb-12 text-primary">Featured Projects</h1>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/30"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 space-y-2">
                    <span className="text-sm text-muted-foreground">{project.date}</span>
                    <h2 className="text-xl font-semibold leading-tight text-foreground">{project.title}</h2>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-4">
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
