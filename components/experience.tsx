import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Machine Learning Associate",
      company: (
        <>
          <a href="https://vectorinstitute.ai/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 hover:underline cursor-pointer">
            Vector Institute
          </a>
        </>
      ),
      period: "Jan 2026 – Present",
      location: "Toronto, Ontario",
      logo: "/images/resume/Vector_Institute.png",
      description: (
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Collaborated with{" "}
            <a
              href="https://www.petal-health.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 hover:underline cursor-pointer"
            >
              Petal Solutions Inc.
            </a>{" "}
            to build a healthcare scheduling assistant that converts natural-language physician availability and
            preferences into structured scheduling inputs.
          </li>
          <li>
            Designed a ReAct-style agent using LangGraph, LangChain, and Azure OpenAI to manage conversational
            scheduling workflows.
          </li>
          <li>
            Added validation, guardrails, and human review steps to ensure scheduling requests were accurate, safe, and
            ready for downstream use.
          </li>
        </ul>
      ),
    },
    {
      title: "Applied AI Developer",
      company: (
        <>
          <a href="https://transpots.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 hover:underline cursor-pointer">
            Transpots
          </a>
        </>
      ),
      period: "May 2025 – Dec 2025",
      location: "Toronto, Ontario",
      logo: "/placeholder.svg",
      description: (
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Built agentic document automation workflows for invoice factoring, helping extract, validate, and process
            invoices and related factoring documents more efficiently.
          </li>
          <li>
            Designed LangChain and LangGraph-based AI pipelines using GPT-4o, rule-based validation, and human-in-the-loop
            checks.
          </li>
          <li>
            Deployed FastAPI microservices to support production document extraction, validation, and approval workflows.
          </li>
        </ul>
      ),
    },
    {
      title: "Data Science and Engineering Intern",
      company: (
        <>
          <a href="https://www.kaidu.ai/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 hover:underline cursor-pointer">
            Kaidu.ai
          </a>
        </>
      ),
      period: "Jan 2025 – Apr 2025",
      location: "Toronto, Ontario",
      logo: "/images/resume/kaidu.png",
      description: (
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Built an IoT motion classification system using Bluetooth RSSI sensor data to detect stationary and mobile
            activity patterns.
          </li>
          <li>
            Improved motion-detection reliability by applying signal preprocessing techniques, including Dynamic Fourier
            smoothing.
          </li>
          <li>
            Used MLflow and Optuna to track experiments, tune models, and support production-ready model iteration.
          </li>
        </ul>
      ),
    },
    {
      title: "Research Associate",
      company: (
        <>
          <a href="https://a-narayan.github.io/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 hover:underline cursor-pointer">
            Intelligence Data Science Lab, Western University
          </a>
        </>
      ),
      period: "Apr 2024 – Dec 2024",
      location: "London, Ontario",
      logo: "/images/resume/uwo.png",
      description: (
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Worked on AI-driven computational biology research focused on genomic sequence analysis and aptamer
            discovery.
          </li>
          <li>
            Fine-tuned LLaMA-3.2 and Mistral-7B models to support miRNA-target prediction and domain-specific biological
            sequence tasks.
          </li>
          <li>
            Built scalable data pipelines for HT-SELEX genomic workflows, enabling cleaner preprocessing, feature
            extraction, and model evaluation.
          </li>
        </ul>
      ),
    },
    {
      title: "Associate AI/ML Engineer",
      company: (
        <>
          <a href="https://hehealth.ai/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 hover:underline cursor-pointer">
            HeHealth
          </a>
        </>
      ),
      period: "Oct 2022 – Oct 2023",
      location: "Singapore",
      logo: "/images/resume/hehealth.png",
      description: (
        <ul className="list-disc space-y-2 pl-5">
          <li>Developed medical imaging models using ResNet and VGG16 for clinical image classification.</li>
          <li>
            Improved model robustness using GAN-based augmentation techniques, including SinGAN and ConSinGAN.
          </li>
          <li>
            Integrated explainability methods such as Grad-CAM into clinical dashboards to support model
            interpretation.
          </li>
        </ul>
      ),
    },
    {
      title: "Associate ML Engineer",
      company: (
        <>
          <a href="https://www.senzmate.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 hover:underline cursor-pointer">
            SenzMate AIoT Intelligence
          </a>
        </>
      ),
      period: "Dec 2021 – Sep 2022",
      location: "Colombo, Sri Lanka",
      logo: "/images/resume/senzmate.png",
      description: (
        <ul className="list-disc space-y-2 pl-5">
          <li>Built machine learning pipelines for IoT anomaly detection and predictive analytics.</li>
          <li>
            Used PySpark, Dask, TensorFlow, and LSTMs to process large-scale time-series sensor data.
          </li>
          <li>Supported deployment of real-time predictive models for industrial IoT use cases.</li>
        </ul>
      ),
    },
  ]

  return (
    <section id="experience" className="min-h-screen flex items-center py-20 bg-background scroll-mt-16">
      <div className="container px-4 md:px-6 mx-auto w-full">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Work Experience
            </h2>
          </div>

          <div className="space-y-8 mt-12">
            {experiences.map((experience, index) => (
              <div key={index} className="timeline-item">
                <Card className="bg-card/50 border border-border/50 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Company Logo */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-lg border border-border/50 flex items-center justify-center overflow-hidden p-1 shadow-sm bg-muted">
                          <img
                            src={experience.logo || "/placeholder.svg"}
                            alt={`${experience.company} logo`}
                            className="w-full h-full object-contain"
                            style={{ maxWidth: '100%', maxHeight: '100%' }}
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-foreground mb-1">{experience.company}</h3>
                            <p className="text-primary font-medium text-lg">{experience.title}</p>
                          </div>
                          <div className="mt-2 lg:mt-0 flex flex-col lg:items-end gap-2">
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <MapPin className="w-4 h-4" />
                              {experience.location}
                            </div>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              {experience.period}
                            </div>
                          </div>
                        </div>

                        <div className="text-muted-foreground leading-relaxed">{experience.description}</div>
                      </div>
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
