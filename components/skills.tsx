import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Brain, Database, Wrench } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming",
      icon: Code,
      skills: ["Python", "SQL", "JavaScript", "TypeScript", "C++", "Java", "MATLAB"],
    },
    {
      category: "GenAI & LLMs",
      icon: Brain,
      skills: [
        "RAG",
        "Agentic AI",
        "LLM Fine-Tuning",
        "Prompt Engineering",
        "LLM Evaluation",
        "Guardrails",
        "HITL Workflows",
      ],
    },
    {
      category: "AI & Machine Learning",
      icon: Brain,
      skills: [
        "Predictive Modeling",
        "NLP",
        "Deep Learning",
        "Transformers",
        "Feature Engineering",
        "Model Evaluation",
        "Classification",
      ],
    },
    {
      category: "Frameworks",
      icon: Database,
      skills: [
        "PyTorch",
        "Scikit-learn",
        "Hugging Face",
        "LangChain",
        "LangGraph",
        "LlamaIndex",
        "LangSmith",
        "FastAPI",
        "vLLM",
      ],
    },
    {
      category: "MLOps & Cloud",
      icon: Wrench,
      skills: [
        "AWS",
        "Azure",
        "Docker",
        "Kubernetes",
        "MLflow",
        "Optuna",
        "OpenEvals",
        "GitHub Actions",
        "GitLab CI/CD",
      ],
    },
    {
      category: "Data & Retrieval",
      icon: Database,
      skills: [
        "PostgreSQL",
        "ChromaDB",
        "Vector Databases",
        "Metadata Filtering",
        "Cross-Encoder Reranking",
      ],
    },
  ]

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 bg-muted/30 scroll-mt-16">
      <div className="container px-4 md:px-6 mx-auto w-full">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Skills</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My expertise and technical proficiencies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <div key={index} className="skill-card">
                  <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-bold text-primary">{category.category}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-sm bg-muted/80 hover:bg-muted border border-border/30"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
