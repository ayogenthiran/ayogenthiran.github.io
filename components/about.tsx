import Image from "next/image"
import Link from "next/link"
import { FileText, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

const iconSize = "h-5 w-5 sm:h-6 sm:w-6"

const MediumIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={`${iconSize} fill-current`}>
    <path d="M4 6h2.2l4 7.6L14.2 6H16v12h-2V10l-3 6h-1.6l-3-6v8H4V6z" />
  </svg>
)

const socialLinks = [
  { href: "https://www.linkedin.com/in/anojan-yogenthiran/", label: "LinkedIn", icon: <Linkedin className={iconSize} /> },
  { href: "https://github.com/ayogenthiran", label: "GitHub", icon: <Github className={iconSize} /> },
  { href: "https://medium.com/@ayogenthiran", label: "Medium", icon: <MediumIcon /> },
  { href: "https://x.com/ayogenth", label: "Twitter", icon: <Twitter className={iconSize} /> },
  { href: "/Anojan_Yogenthiran_Resume.pdf", label: "CV", icon: <FileText className={iconSize} /> },
]

function AboutBody() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:max-w-7xl 2xl:px-16">
      <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-[300px_1fr] md:gap-14 lg:gap-16">
        {/* Left column: photo, name, role, social icons */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/profile/anojan-profile.png"
            alt="Anojan Yogenthiran profile picture"
            width={288}
            height={288}
            className="w-64 h-64 lg:w-72 lg:h-72 rounded-full object-cover object-top shadow-lg ring-2 ring-primary/20"
            loading="lazy"
            sizes="(max-width: 1024px) 256px, 288px"
          />
          <h3 className="mt-4 text-xl font-bold text-foreground sm:text-2xl">Anojan Yogenthiran</h3>
          <p className="mt-1 text-muted-foreground sm:text-lg">AI/ML Engineer</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2 sm:gap-3">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                size="icon"
                asChild
                className="h-10 w-10 sm:h-12 sm:w-12 [&_svg]:!h-5 [&_svg]:!w-5 sm:[&_svg]:!h-6 sm:[&_svg]:!w-6"
              >
                <Link
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {link.icon}
                  <span className="sr-only">{link.label}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>

        {/* Right column: About Me heading + bio */}
        <div className="flex flex-col justify-center font-sans text-left">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl md:text-4xl">About Me</h2>
          <div className="mt-4 space-y-4 sm:mt-6 sm:space-y-5">
            <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
              I'm an experienced Machine Learning Engineer with a Master's in Computer Science from Western University,
              specializing in Artificial Intelligence. Over the past 3+ years, I've developed and deployed AI-driven
              solutions across research, healthcare, and IoT—blending technical expertise with a passion for solving
              complex, real world problems.
            </p>

            <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
              As a Research Assistant at the Intelligence Data Science Lab, I had the opportunity to work under the
              guidance of{" "}
              <a
                href="https://a-narayan.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium cursor-pointer hover:underline"
              >
                Dr. Apurva Narayan
              </a>
              , focusing on generative AI research to accelerate drug discovery by identifying optimal aptamers. I'm
              driven by the mission to craft AI solutions that not only tackle challenges but also create a positive
              impact on millions of lives.
            </p>

            <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
              Outside of work, I enjoy playing soccer, hiking, experimenting with new recipes, and watching anime ⚽ 🏔️
              🍳 📺 🏆.
            </p>

            <blockquote className="border-l-2 border-primary/40 pl-4 text-muted-foreground text-base italic sm:text-lg">
              If you can dream it, you can do it.
              <span className="mt-2 block not-italic text-primary/80 font-semibold">- Walt Disney</span>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <div className="w-full bg-muted/30">
      <section id="home" className="w-full py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="container mx-auto">
          <AboutBody />
        </div>
      </section>
    </div>
  )
}
