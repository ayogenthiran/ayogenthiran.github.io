import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  readingTime: string
  icon: string
  content: string
}

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return {
        slug,
        title: matterResult.data.title,
        date: matterResult.data.date,
        excerpt: matterResult.data.excerpt,
        readingTime: matterResult.data.readingTime,
        icon: matterResult.data.icon,
        content: matterResult.content,
      }
    })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      excerpt: matterResult.data.excerpt,
      readingTime: matterResult.data.readingTime,
      icon: matterResult.data.icon,
      content: matterResult.content,
    }
  } catch (error) {
    return null
  }
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(gfm)
    .use(html, { sanitize: false })
    .process(markdown)
  
  let htmlContent: string = result.toString()
  
  // Add references class to the References section
  htmlContent = htmlContent.replace(
    /<h2[^>]*>References<\/h2>/g,
    '<h2 class="references">References</h2>'
  )
  
  // Debug: Log the HTML structure for references
  if (htmlContent.includes('References')) {
    console.log('References HTML:', htmlContent.match(/<h2[^>]*>References<\/h2>[\s\S]*?<\/ul>/)?.[0])
  }
  
  return htmlContent
}
