import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Brain, Database, Wrench } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: Code,
      skills: ["Python", "SQL", "JavaScript", "C++", "Java", "MATLAB"],
    },
    {
      category: "AI & Machine Learning",
      icon: Brain,
      skills: [
        "LLM Fine-tuning (LoRA, QLoRA)",
        "RAG",
        "Prompt Engineering",
        "CNNs",
        "LSTMs",
        "GANs",
        "NLP",
        "XAI",
        "Statistical Modeling",
        "LangChain",
        "LangGraph",
      ],
    },
    {
      category: "Libraries & Frameworks",
      icon: Database,
      skills: [
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Scikit-learn",
        "PyTorch",
        "TensorFlow",
        "Hugging Face",
        "OpenAI API",
        "NLTK",
        "Dask",
        "PySpark",
        "TypeScript",
        "React",
      ],
    },
    {
      category: "Tools & Technologies",
      icon: Wrench,
      skills: [
        "Docker",
        "Kubernetes",
        "FastAPI",
        "Flask",
        "Streamlit",
        "Apache Airflow",
        "Kafka",
        "Git",
        "CI/CD (GitHub Actions)",
        "DVC",
        "MLflow",
        "Databricks",
        "AWS",
        "Azure",
        "SageMaker",
        "Vector Databases",
        "Grafana",
        "PowerBI",
        "Tableau",
        "React",
        "Next.js",
        "Node.js",
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
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
