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
      "Built a conversational AI assistant that helps physicians share scheduling preferences in natural language and turns them into reliable scheduling inputs for clinical operations.",
    keyFeatures: [
      "Converts natural-language physician preferences into structured scheduling inputs.",
      "Uses retrieval, validation guardrails, and human review to improve reliability.",
      "Supports production-ready healthcare scheduling workflows with secure deployment.",
    ],
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
    image: "/images/projects/sch-agent-card.png",
    imageClassName: "object-cover object-center",
    confidentialityNote: "Code not public due to healthcare and partner confidentiality.",
    demoUrl: "https://drive.google.com/file/d/1SwkAuyqbm2zfD5U_XYb7pN2c51pkQSOe/view?usp=sharing",
    demoLabel: "View Demo",
  },
  {
    id: 1,
    title: "ArxivLens — AI Research Paper Assistant",
    description:
      "Built an AI research assistant that helps users explore arXiv papers through natural-language questions, semantic search, metadata filtering, and reranking. The system is designed for faster literature discovery and grounded answers from scientific papers.",
    keyFeatures: [
      "Helps users discover and understand relevant research papers.",
      "Uses metadata filtering and reranking to improve scientific paper retrieval.",
      "Provides grounded answers from retrieved paper context.",
    ],
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
    imageClassName: "object-cover object-center",
    codeUrl: "https://github.com/ayogenthiran/arxivlens",
    demoUrl: "#",
    demoLabel: "Live Demo",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl font-bold text-center mb-12 text-primary">Featured Projects</h1>

          <div className="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-7">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/30"
              >
                <div className="relative h-[11.25rem] w-full shrink-0 overflow-hidden bg-muted sm:h-[13.75rem] md:h-[15rem]">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className={
                      "imageClassName" in project && project.imageClassName
                        ? `${project.imageClassName} transition-transform duration-300 group-hover:scale-[1.03]`
                        : "object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                    }
                  />
                </div>

                <div className="flex flex-1 flex-col p-4 md:p-5">
                  <div className="mb-2 space-y-1">
                    <span className="text-sm text-muted-foreground">{project.date}</span>
                    <h2 className="text-xl font-semibold leading-snug text-foreground">{project.title}</h2>
                  </div>

                  <p className="mb-2.5 text-sm leading-snug text-muted-foreground">{project.description}</p>

                  {"keyFeatures" in project && project.keyFeatures && (
                    <div className="mb-3">
                      <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        Key Features
                      </p>
                      <ul className="list-disc space-y-1.5 pl-5 text-sm leading-snug text-muted-foreground marker:text-primary/50">
                        {project.keyFeatures.map((feature) => (
                          <li key={feature} className="pl-0.5">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-xs text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto space-y-2 pt-1">
                    {"confidentialityNote" in project && project.confidentialityNote && (
                      <p className="text-xs italic leading-snug text-muted-foreground md:text-sm">
                        {project.confidentialityNote}
                      </p>
                    )}
                    {("codeUrl" in project || "demoUrl" in project) && (
                      <div className="flex gap-4">
                        {"codeUrl" in project && project.codeUrl && (
                          <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
                          >
                            <Github className="h-4 w-4 shrink-0" aria-hidden="true" />
                            View Code
                          </a>
                        )}
                        {"demoUrl" in project && project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
                          >
                            <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
                            {"demoLabel" in project && project.demoLabel ? project.demoLabel : "Live Demo"}
                          </a>
                        )}
                      </div>
                    )}
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
