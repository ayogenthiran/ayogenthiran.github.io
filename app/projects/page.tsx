import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

export const metadata = {
  title: "Projects - Anojan Yogenthiran",
  description: "A selection of my personal and professional AI/ML projects and software development work.",
}

const projects = [
  {
    id: 0,
    title: "AI Physician Scheduling Agent — Turning Doctor Preferences into Structured Scheduling Constraints",
    description:
      "Built a conversational AI assistant for healthcare scheduling that converts physician preferences and availability into structured scheduling constraints. The system uses agentic workflows, retrieval, validation guardrails, and human-in-the-loop review to support reliable clinical scheduling operations.",
    date: "Jan 2026",
    features: [
      "Designed a ReAct-style agent workflow using LangGraph, LangChain, and Azure OpenAI.",
      "Integrated RAG over scheduling context to improve grounded responses.",
      "Added validation guardrails and human review before scheduling constraints are submitted.",
      "Deployed as a Dockerized LangGraph server on Kubernetes.",
    ],
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
      "An AI-powered research assistant that helps users explore arXiv papers through natural-language questions. It uses a retrieval-augmented generation pipeline to retrieve relevant paper excerpts, rerank results, and generate grounded answers from scientific documents.",
    date: "Apr 2026",
    features: [
      "Built a RAG pipeline with ChromaDB, Sentence-Transformers embeddings, and the OpenAI API.",
      "Added metadata filtering and Cross-Encoder reranking to improve retrieval quality.",
      "Served the backend with FastAPI and built an interactive Streamlit interface.",
    ],
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
      "A RAG-based document assistant for uploading, analyzing, and chatting with policy documents. It generates citation-backed answers, document summaries, and key clause extraction to reduce manual review time.",
    date: "Sep 2025",
    features: [
      "Processed policy documents for semantic search and question answering.",
      "Generated summaries, clause extraction, and citation-backed responses.",
      "Reduced manual document review time by approximately 70%.",
    ],
    technologies: ["Python", "FAISS", "LangChain", "AWS Lambda"],
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

                  {"features" in project && project.features && (
                    <ul className="mb-4 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  )}

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
