import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <div className="w-full bg-background">
      <section id="contact" className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Contact Me</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Feel free to reach out if you'd like to discuss opportunities, have a quick coffee chat, or just say hi!
                I'm always looking forward to meeting new people.
              </p>
            </div>

            <form action="https://formspree.io/f/xanoenzo" method="POST" className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 h-12"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@domain.com"
                  required
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 h-12"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Type your message"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 min-h-[120px] resize-none"
                  required
                />
              </div>

              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-base font-medium"
                >
                  Submit
                </Button>
              </div>

              <noscript>
                <p className="text-sm text-center text-muted-foreground mt-2">
                  Please enable JavaScript to use the form, or email me directly.
                </p>
              </noscript>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
