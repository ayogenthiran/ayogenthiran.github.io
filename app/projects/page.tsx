import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

export const metadata = {
  title: "Projects - Anojan Yogenthiran",
  description: "A selection of my personal and professional AI/ML projects and software development work.",
}

const projects = [
  {
    id: 0,
    title: "AI Physician Scheduling Agent",
    description:
      "Built a conversational AI assistant that helps physicians share scheduling preferences in natural language and turns them into reliable scheduling inputs for clinical operations. The system uses retrieval, validation guardrails, and human-in-the-loop review to keep scheduling requests grounded, complete, and ready for submission.",
    date: "2026",
    technologies: [
      "Python",
      "LangGraph",
      "LangChain",
      "Azure OpenAI",
      "RAG",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "FastAPI",
    ],
    image: "/placeholder.svg",
    confidentialityNote: "Code not public due to healthcare and partner confidentiality.",
  },
  {
    id: 1,
    title: "ArxivLens — AI Research Paper Assistant",
    description:
      "Built an AI research assistant that helps users explore arXiv papers through natural-language questions. The system uses retrieval-augmented generation, semantic search, metadata filtering, and reranking to provide grounded answers from scientific papers.",
    date: "Apr 2026",
    technologies: [
      "Python",
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
      "Built a document assistant that helps users upload, search, summarize, and ask questions over policy documents. The system uses retrieval-augmented generation to provide citation-backed answers and reduce manual document review time.",
    date: "Sep 2025",
    technologies: ["Python", "LangChain", "FAISS", "AWS Lambda"],
    image: "/placeholder.svg",
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

                  {"confidentialityNote" in project && project.confidentialityNote ? (
                    <p className="mt-auto text-sm italic text-muted-foreground">{project.confidentialityNote}</p>
                  ) : (
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
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
