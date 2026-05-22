import { ExternalLink, Github } from "lucide-react"
import { projects } from "@/lib/portfolio"

export const metadata = {
  title: "Projects - Anojan Yogenthiran",
  description: "Selected AI/ML, GenAI, RAG, and agentic AI projects by Anojan Yogenthiran.",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl space-y-3 text-center">
            <h1 className="text-4xl font-bold text-primary">Featured Projects</h1>
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

                  {project.keyFeatures && (
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
                    {project.confidentialityNote && (
                      <p className="text-xs italic leading-snug text-muted-foreground md:text-sm">
                        {project.confidentialityNote}
                      </p>
                    )}
                    {(project.codeUrl || project.demoUrl) && (
                      <div className="flex gap-4">
                        {project.codeUrl && (
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
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
                          >
                            <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
                            {project.demoLabel ?? "Live Demo"}
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
