import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { experiences } from "@/lib/portfolio"

export default function Experience() {
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
            {experiences.map((experience) => (
              <div key={`${experience.company}-${experience.period}`} className="timeline-item">
                <Card className="bg-card/50 border border-border/50 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                      <div className="flex-shrink-0">
                        <div
                          className={`w-16 h-16 rounded-lg border border-border/50 flex items-center justify-center overflow-hidden p-1 shadow-sm bg-muted ${
                            experience.logoContainerClassName ?? ""
                          }`}
                        >
                          <Image
                            src={experience.logo}
                            alt={experience.logoAlt}
                            width={64}
                            height={64}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="mb-4 flex flex-col lg:flex-row lg:items-start lg:justify-between">
                          <div>
                            <h3 className="mb-1 text-xl font-bold text-foreground">{experience.title}</h3>
                            <a
                              href={experience.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-lg font-medium text-primary hover:text-primary/80 hover:underline"
                            >
                              {experience.company}
                            </a>
                          </div>
                          <div className="mt-2 flex flex-col gap-2 lg:mt-0 lg:items-end">
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4" aria-hidden="true" />
                              {experience.location}
                            </div>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" aria-hidden="true" />
                              {experience.period}
                            </div>
                          </div>
                        </div>

                        <ul className="list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground">
                          {experience.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
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
