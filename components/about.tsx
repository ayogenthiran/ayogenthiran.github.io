function AboutBody() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid gap-12 md:grid-cols-[220px,1fr] md:items-center">
        <div className="flex justify-center">
          <img
            src="/images/profile/anojan-profile.png"
            alt="Anojanyogenthiran profile picture"
            className="h-52 w-48 rounded-2xl object-cover object-center shadow-md ring-2 ring-primary/20"
            loading="lazy"
          />
        </div>

        <div className="space-y-6 md:pl-6">
          <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-justify">
            I'm an experienced Machine Learning Engineer with a Master's in Computer Science from Western University,
            specializing in Artificial Intelligence. Over the past 3+ years, I've developed and deployed AI-driven
            solutions across research, healthcare, and IoT—blending technical expertise with a passion for solving
            complex, real world problems.
          </p>

          <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-justify">
            As a Research Assistant at the Intelligence Data Science Lab, I had the opportunity to work under the
            guidance of{" "}
            <a
              href="https://a-narayan.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium cursor-pointer"
            >
              Dr. Apurva Narayan
            </a>
            , focusing on generative AI research to accelerate drug discovery by identifying optimal aptamers. I'm
            driven by the mission to craft AI solutions that not only tackle challenges but also create a positive
            impact on millions of lives.
          </p>

          <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-justify">
            Outside of work, I enjoy playing soccer, hiking, experimenting with new recipes, and watching anime ⚽ 🏔️ 🍳
            📺 🏆.
          </p>
          <blockquote className="text-center text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed italic font-semibold">
            If you can dream it, you can do it.
            <span className="mt-2 block not-italic text-primary/80 font-semibold">- Walt Disney</span>
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <div className="w-full bg-muted/30">
      <section id="about" className="py-20 w-full">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">About Me</h2>
            </div>

            <AboutBody />
          </div>
        </div>
      </section>
    </div>
  )
}
