import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Policy Pilot — AI Document Assistant",
      description:
        "Upload, analyze, and chat with policy documents using an AI-powered RAG pipeline. Delivered citation-backed answers, summaries, and key clause extraction, cutting manual research time by ~70%.",
      tags: ["Python", "FAISS", "LangChain", "AWS", "Lambda"],
      codeLink: "https://github.com/ayogenthiran/policy-pilot",
      liveLink: "#",
      icon: "/images/projects/pilot-icon.png",
    },
    {
      title: "CiteRight — Literature Review Assistant",
      description:
        "Built a GPT-4 powered RAG pipeline that integrates the arXiv API to automatically generate structured literature reviews from user-defined topics. Designed prompt engineering workflows with semantic keyword extraction, document retrieval, and summarization modules to deliver concise, citation-backed insights for researchers.",
      tags: ["GPT-4", "RAG", "arXiv API", "Python", "Prompt Engineering"],
      codeLink: "https://github.com/ayogenthiran/citeright-rag",
      liveLink: "#",
      icon: "/images/projects/CiteRight.jpg",
    },
  ]

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of my personal and professional projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <Card className="overflow-hidden h-full flex flex-col">
                  <CardContent className="project-content flex-1 flex flex-col p-5">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                          {project.icon ? (
                            <Image
                              src={project.icon}
                              alt={`${project.title} icon`}
                              width={64}
                              height={64}
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-8 h-8 bg-muted-foreground/20 rounded" />
                          )}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2">{project.description}</p>
                      </div>
                    </div>
                    <div className="project-tags mt-3">
                      {project.tags.slice(0, 5).map((tag, i) => (
                        <span key={i} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="project-links mt-4">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
                          🐙 View Code
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          🔗 Demo
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
