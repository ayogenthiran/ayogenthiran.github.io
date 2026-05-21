import { Card, CardContent } from "@/components/ui/card"

const skillCategories = [
  {
    category: "Agentic AI & RAG",
    skills: [
      "Agentic AI",
      "RAG",
      "Graph RAG",
      "LangChain",
      "LangGraph",
      "Tool Calling",
      "Prompt Engineering",
      "Semantic Search",
      "Vector Databases",
    ],
  },
  {
    category: "LLM Evaluation & Safety",
    skills: [
      "LLM Evaluation",
      "OpenEvals",
      "Guardrails",
      "Human-in-the-Loop Review",
      "PII Redaction",
      "Prompt Injection Defense",
      "Audit Trails",
      "Model Explainability",
    ],
  },
  {
    category: "Machine Learning & NLP",
    skills: [
      "Deep Learning",
      "Transformers",
      "Embeddings",
      "Text Classification",
      "Named Entity Recognition",
      "Predictive Modeling",
      "Feature Engineering",
      "Model Evaluation",
      "Hyperparameter Tuning",
    ],
  },
  {
    category: "MLOps & Deployment",
    skills: [
      "Docker",
      "Kubernetes",
      "FastAPI",
      "CI/CD",
      "GitHub Actions",
      "GitLab CI/CD",
      "MLflow",
      "Optuna",
      "Model Deployment",
      "API Development",
    ],
  },
  {
    category: "Cloud & Data Platforms",
    skills: [
      "AWS",
      "Azure",
      "Azure OpenAI",
      "SageMaker",
      "Bedrock",
      "Lambda",
      "S3",
      "EC2",
      "CloudWatch",
      "PostgreSQL",
      "ChromaDB",
    ],
  },
  {
    category: "Languages & Tools",
    skills: [
      "Python",
      "SQL",
      "TypeScript",
      "JavaScript",
      "C++",
      "Java",
      "Git",
      "Linux",
      "Jupyter Notebook",
      "VS Code",
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center py-20 bg-muted/30 scroll-mt-16">
      <div className="container px-4 md:px-6 mx-auto w-full">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Technical Skills
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Focused skills across GenAI systems, model reliability, and production ML deployment
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-6">
            {skillCategories.map((category) => (
              <div key={category.category} className="skill-card h-full">
                <Card className="skill-category-card flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-md">
                  <CardContent className="flex flex-1 flex-col p-5 md:p-6">
                    <h3 className="mb-3 text-base font-bold leading-snug text-primary sm:text-lg">
                      {category.category}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex max-w-full items-center rounded-full border border-border/60 bg-muted/40 px-2.5 py-1 text-xs leading-snug text-foreground/90 transition-colors duration-200 hover:border-primary/25 hover:bg-primary/10 hover:text-primary break-words"
                        >
                          {skill}
                        </span>
                      ))}
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
