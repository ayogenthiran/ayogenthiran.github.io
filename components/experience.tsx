import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Data Science and Engineering Intern",
      company: (
        <>
          <a href="https://www.kaidu.ai/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            Kaidu.ai
          </a>
        </>
      ),
      period: "Jan 2025 – Apr 2025",
      location: "Toronto, Ontario",
      logo: "/images/resume/kaidu.png",
      description: (
        <>
          As a Data Science and Engineering Intern, I developed and deployed an end-to-end pipeline for a real-time IoT
          project. I used a machine learning approach with technologies including <strong>FastAPI</strong>,{" "}
          <strong>Docker</strong>, <strong>PostgreSQL</strong>, and <strong>MLflow</strong> to deliver a
          high-performance motion classification system.
        </>
      ),
    },
    {
      title: "Research Associate",
      company: (
        <>
          <a href="https://a-narayan.github.io/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            Intelligence Data Science Lab, Western University
          </a>
        </>
      ),
      period: "Apr 2024 – Dec 2024",
      location: "London, Ontario",
      logo: "/images/resume/uwo.png",
      description: (
        <>
          Advancing genomic research by pioneering the use of frontier <strong>LLMs</strong> (<strong>LLaMA 3.1</strong>
          , <strong>Mistral-7B</strong>) and <strong>Deep Learning</strong> models (<strong>CNNs</strong>,{" "}
          <strong>VAEs</strong>) to automate <strong>DNA sequence processing</strong> and improve gene prediction
          accuracy.
        </>
      ),
    },
    {
      title: "Associate AI/ML Engineer",
      company: (
        <>
          <a href="https://hehealth.ai/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            HeHealth
          </a>
        </>
      ),
      period: "Oct 2022 – Oct 2023",
      location: "Singapore",
      logo: "/images/resume/hehealth.png",
      description: (
        <>
          Core team member developing medical imaging models (<strong>ResNet</strong>, <strong>VGG16</strong>) and
          enhancing robustness with <strong>GAN-based augmentation</strong> (<strong>SinGAN</strong>,{" "}
          <strong>ConSinGAN</strong>), achieving <strong>96% accuracy</strong> in STD detection.
          <br />
          <br />I worked across <strong>MLOps pipelines</strong> (<strong>GitHub Actions</strong>,{" "}
          <strong>AWS SageMaker</strong>) and <strong>XAI methods</strong> (<strong>Grad-CAM</strong>), automating
          retraining, improving dataset balance, and integrating explainability into clinical dashboards.
        </>
      ),
    },
    {
      title: "Associate ML Engineer",
      company: (
        <>
          <a href="https://www.senzmate.com/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            SenzMate AIoT Intelligence
          </a>
        </>
      ),
      period: "Dec 2021 – Sep 2022",
      location: "Colombo, Sri Lanka",
      logo: "/images/resume/senzmate.png",
      description: (
        <>
          I worked on large-scale projects for the <strong>IoT sector</strong>. I used <strong>big data</strong> and{" "}
          <strong>deep learning</strong> approaches with <strong>PySpark</strong>, <strong>Dask</strong>,{" "}
          <strong>TensorFlow</strong>, and <strong>LSTMs</strong> to engineer distributed pipelines and deploy
          predictive models for real-time anomaly detection.
        </>
      ),
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
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
                        <div className="w-16 h-16 rounded-lg border border-border/50 flex items-center justify-center overflow-hidden p-2 shadow-sm bg-white">
                          <img
                            src={experience.logo || "/placeholder.svg"}
                            alt={`${experience.company} logo`}
                            className="w-12 h-12 object-contain"
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
