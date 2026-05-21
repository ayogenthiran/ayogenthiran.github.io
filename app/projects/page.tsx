import { ExternalLink, Github } from "lucide-react"

export const metadata = {
  title: "Projects - Anojan Yogenthiran",
  description: "Selected AI/ML, GenAI, RAG, and agentic AI projects by Anojan Yogenthiran.",
}

const projects = [
  {
    id: 0,
    title: "AI Physician Scheduling Agent",
    description:
      "A healthcare AI assistant that turns physician scheduling preferences into structured, validated inputs for clinical operations.",
    keyFeatures: [
      "Extracts availability, constraints, and preferences from natural-language conversations.",
      "Combines LangGraph orchestration, retrieval, validation guardrails, and human review.",
      "Designed for secure deployment into production healthcare scheduling workflows.",
    ],
    date: "Jan 2026 – Present",
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
    confidentialityNote: "Code not public due to healthcare and partner confidentiality.",
    demoUrl: "https://drive.google.com/file/d/1SwkAuyqbm2zfD5U_XYb7pN2c51pkQSOe/view?usp=sharing",
    demoLabel: "View Demo",
  },
  {
    id: 1,
    title: "arXivLens — AI Research Paper Assistant",
    description:
      "An AI research assistant for faster literature discovery across arXiv papers using semantic search, reranking, and grounded answers.",
    keyFeatures: [
      "Supports natural-language questions over scientific paper collections.",
      "Uses metadata filters, embeddings, and cross-encoder reranking to improve retrieval quality.",
      "Generates grounded answers from retrieved paper context instead of unsupported summaries.",
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
          <div className="mx-auto mb-12 max-w-3xl space-y-3 text-center">
            <h1 className="text-4xl font-bold text-primary">Featured Projects</h1>
            <p className="text-muted-foreground">
              Selected work focused on agentic AI, RAG, evaluation, guardrails, and deployment-ready ML systems.
            </p>
          </div>

          <div className="mx-auto grid w-full grid-cols-1 items-stretch justify-items-stretch gap-6 lg:grid-cols-[repeat(2,minmax(360px,460px))] lg:justify-center lg:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/30"
              >
                <div className="flex min-h-[28rem] flex-1 flex-col p-5 md:p-6">
                  <div className="mb-2 space-y-1">
                    <span className="text-sm text-muted-foreground">{project.date}</span>
                    <h2 className="text-xl font-semibold leading-snug text-foreground break-words">
                      {project.title}
                    </h2>
                  </div>

                  <p className="mb-2.5 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

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
