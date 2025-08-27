import * as LucideIcons from "lucide-react"
import Link from "next/link"
import { getAllPosts } from "@/lib/markdown"

export default function BlogPage() {
  const posts = getAllPosts()

  const getIconComponent = (iconName: string) => {
    // Default to Brain if icon doesn't exist
    const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.Brain
    return IconComponent
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container px-4 md:px-6 mx-auto py-20">
        <div className="space-y-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">My Blog</h1>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {posts.map((post) => {
              const IconComponent = getIconComponent(post.icon)
              return (
                <Link 
                  key={post.slug} 
                  href={`/blog/${post.slug}`}
                  className="block"
                >
                  <div className="flex items-start gap-4 p-6 rounded-lg hover:bg-muted/50 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2">
                          <h2 className="text-xl font-semibold leading-tight text-primary">
                            {post.title}
                          </h2>
                          <p className="text-muted-foreground">
                            {post.excerpt}{" "}
                            <span className="text-sm">({post.readingTime})</span>
                          </p>
                        </div>
                        <div className="text-sm text-muted-foreground whitespace-nowrap">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
