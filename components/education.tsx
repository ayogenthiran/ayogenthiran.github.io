import { Card, CardContent } from "@/components/ui/card"
import { Calendar, GraduationCap } from "lucide-react"
import Image from "next/image"

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Education</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="overflow-hidden bg-card/50 border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2">
                      <Image
                        src="/images/resume/uwo.png"
                        alt="Western University"
                        width={64}
                        height={64}
                        className="rounded-lg object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-bold text-foreground">Master of Science in Computer Science</h3>
                    <p className="text-primary font-medium">Artificial Intelligence • GPA: 3.8/4.0</p>
                    <p className="text-lg font-semibold text-foreground">Western University</p>
                    <p className="text-muted-foreground">London, Ontario</p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Sep 2023 – Dec 2024</span>
                    </div>
                    <div className="flex items-start gap-2 text-muted-foreground mt-3">
                      <GraduationCap className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>Research: Generative AI-Driven Aptamer Discovery for Accelerated Drug Development</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-card/50 border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2">
                      <Image
                        src="/images/resume/sliit.png"
                        alt="SLIIT"
                        width={64}
                        height={64}
                        className="rounded-lg object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-bold text-foreground">
                      Bachelor of Science (Honours) in Electrical and Electronic Engineering
                    </h3>
                    <p className="text-lg font-semibold text-foreground">
                      Sri Lanka Institute of Information Technology
                    </p>
                    <p className="text-muted-foreground">Colombo, Sri Lanka</p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Jan 2018 – Dec 2021</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
