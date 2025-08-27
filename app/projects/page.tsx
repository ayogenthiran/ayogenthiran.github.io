import { ExternalLink, Github } from "lucide-react"

export const metadata = {
  title: "Projects - Anojan Yogenthiran",
  description: "A selection of my personal and professional AI/ML projects and software development work.",
}

const projects = [
  {
    id: 1,
    title: "Neural Network from Scratch",
    description:
      "Built a complete neural network library in Python without using any ML frameworks, implementing backpropagation, various optimizers, and regularization techniques.",
    date: "August 2024",
    technologies: ["Python", "NumPy", "Matplotlib"],
    image: "/placeholder.svg?height=120&width=120",
    codeUrl: "#",
    demoUrl: "#",
  },
  {
    id: 2,
    title: "Transformer for Language Translation",
    description:
      "Implemented the Transformer architecture for English-French translation, achieving competitive BLEU scores on standard benchmarks.",
    date: "July 2024",
    technologies: ["PyTorch", "Transformers", "CUDA"],
    image: "/placeholder.svg?height=120&width=120",
    codeUrl: "#",
    demoUrl: "#",
  },
  {
    id: 3,
    title: "End-to-End MLOps Pipeline",
    description:
      "Designed and implemented a complete MLOps pipeline with automated training, testing, and deployment using cloud-native technologies.",
    date: "June 2024",
    technologies: ["AWS", "Docker", "Kubernetes", "MLflow"],
    image: "/placeholder.svg?height=120&width=120",
    codeUrl: "#",
    demoUrl: "#",
  },
  {
    id: 4,
    title: "CiteRight – Literature Review Assistant",
    description:
      "Built a GPT-4-powered RAG pipeline integrating arXiv API to auto-generate literature reviews from user-defined inputs, reducing research time by 70%. Applied prompt engineering and integrated semantic keyword extraction, document retrieval, and summarization modules.",
    date: "May 2024",
    technologies: ["GPT-4", "RAG", "arXiv API", "Python", "Prompt Engineering"],
    image: "/placeholder.svg?height=120&width=120",
    codeUrl: "#",
    demoUrl: "#",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-12 text-primary">Featured Projects</h1>

          <div className="space-y-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/20 transition-colors"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-32 h-32 rounded-lg object-cover bg-muted"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <h2 className="text-xl font-semibold text-foreground mb-2 md:mb-0">{project.title}</h2>
                      <span className="text-sm text-muted-foreground">{project.date}</span>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.codeUrl}
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                      <a
                        href={project.demoUrl}
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </div>
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
