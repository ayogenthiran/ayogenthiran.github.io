import { Card, CardContent } from "@/components/ui/card"

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["Python", "SQL", "JavaScript", "TypeScript", "C++", "Java", "MATLAB", "R"],
  },
  {
    category: "GenAI & LLMs",
    skills: [
      "RAG",
      "Graph RAG",
      "Agentic AI",
      "Model Chaining",
      "LLM Fine-Tuning",
      "Prompt Engineering",
      "LLM Evaluation",
      "LangChain",
      "LangGraph",
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Deep Learning",
      "Predictive Modeling",
      "Feature Engineering",
      "Model Evaluation",
      "Classification",
      "Hyperparameter Tuning",
    ],
  },
  {
    category: "Natural Language Processing",
    skills: [
      "Transformers",
      "Semantic Search",
      "Text Classification",
      "Named Entity Recognition",
      "Sentiment Analysis",
      "Embeddings",
    ],
  },
  {
    category: "Responsible AI",
    skills: [
      "Guardrails",
      "Human-in-the-Loop Review",
      "PII Redaction",
      "Prompt Injection Defense",
      "Model Explainability",
      "Bias Detection",
      "Fairness Metrics",
      "AI Ethics",
      "Audit Trails",
    ],
  },
  {
    category: "Cloud Platforms — AWS & Azure",
    skills: [
      "AWS",
      "Azure",
      "SageMaker",
      "Bedrock",
      "Lambda",
      "S3",
      "EC2",
      "CloudWatch",
      "Azure OpenAI",
    ],
  },
  {
    category: "MLOps & Infrastructure",
    skills: [
      "Docker",
      "Kubernetes",
      "CI/CD",
      "GitHub Actions",
      "GitLab CI/CD",
      "MLflow",
      "Optuna",
      "OpenEvals",
      "Model Deployment",
      "API Development",
    ],
  },
  {
    category: "Data Science & Analytics",
    skills: [
      "Data Analysis",
      "Statistical Modeling",
      "Data Visualization",
      "Exploratory Data Analysis",
      "Power BI",
      "Tableau",
    ],
  },
  {
    category: "Development Tools",
    skills: [
      "Git",
      "Jupyter Notebook",
      "VS Code",
      "Linux",
      "FastAPI",
      "PostgreSQL",
      "ChromaDB",
      "Vector Databases",
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
              Core technologies and areas I work in across AI, ML, and software development
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
