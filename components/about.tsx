"use client"

import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const iconLinkClass =
  "group text-slate-300 hover:text-white hover:scale-125 transition-all duration-200 cursor-pointer flex items-center justify-center shrink-0 no-underline outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"

const socialLinks = [
  { href: "#contact", label: "Mail", type: "icon" as const, icon: faEnvelope },
  { href: "https://github.com/ayogenthiran", label: "GitHub", type: "icon" as const, icon: faGithub },
  { href: "https://www.linkedin.com/in/anojan-yogenthiran/", label: "LinkedIn", type: "icon" as const, icon: faLinkedin },
  { href: "https://medium.com/@anojanyogenthiran", label: "Medium", type: "medium" as const },
  { href: "/Anojan_Yogenthiran_Resume.pdf", label: "CV", type: "cv" as const },
]

function AboutBody() {

  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:max-w-7xl 2xl:px-16">
      <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-[300px_1fr] md:gap-14 lg:gap-16">
        {/* Left column: photo, name, role, social icons */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/images/profile/anojan-profile.png?v=2"
            alt="Anojan Yogenthiran profile picture"
            width={288}
            height={288}
            className="w-64 h-64 lg:w-72 lg:h-72 rounded-full object-cover object-[50%_65%] shadow-lg ring-2 ring-primary/20"
            loading="eager"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = "none"
              target.nextElementSibling?.classList.remove("hidden")
            }}
          />
          <div
            className="hidden w-64 h-64 lg:w-72 lg:h-72 rounded-full bg-muted flex items-center justify-center ring-2 ring-primary/20 shrink-0"
            aria-hidden="true"
          >
            <span className="text-4xl font-bold text-muted-foreground">AY</span>
          </div>
          <h3 className="mt-4 text-xl font-bold text-foreground sm:text-2xl">Anojan Yogenthiran</h3>
          <p className="mt-1 text-muted-foreground sm:text-lg">AI/ML Engineer</p>
          <p className="mt-0.5 text-muted-foreground text-base sm:text-lg">
            <a
              href="https://vectorinstitute.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              Vector Institute
            </a>
          </p>
          <div className="mt-4 flex flex-row flex-nowrap items-center justify-center gap-4 overflow-x-auto overflow-y-hidden border-0 border-b-0 border-none shadow-none [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [&>*]:border-0 [&>*]:border-none [&>*]:no-underline [&>*]:outline-none [&>*]:ring-0 [&>*]:shadow-none [&>*]:after:content-none [&>*]:after:hidden [&>*]:before:content-none [&>*]:before:hidden">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={iconLinkClass}
                aria-label={link.label}
              >
                {link.type === "icon" && (
                  <FontAwesomeIcon icon={link.icon} style={{ width: 30, height: 30 }} />
                )}
                {link.type === "medium" && (
                  <span className="font-bold text-xl text-slate-300 group-hover:text-white transition-all duration-200">M</span>
                )}
                {link.type === "cv" && (
                  <span className="text-slate-300 font-bold text-xl shrink-0">CV</span>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Right column: About Me heading + bio */}
        <div className="flex flex-col justify-center font-sans text-left">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl md:text-4xl">About Me</h2>
          <div className="mt-4 space-y-4 sm:mt-6 sm:space-y-5 text-justify hyphens-auto">
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
              &ldquo;If you can dream it, you can do it.&rdquo;
              <span className="mt-2 block not-italic text-primary/80">— Walt Disney</span>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <div className="min-h-screen w-full">
      <section id="home" className="min-h-screen w-full flex items-center scroll-mt-16">
        <div className="container mx-auto w-full">
          <AboutBody />
        </div>
      </section>
    </div>
  )
}
