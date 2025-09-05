import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@/components/analytics"
import ClientLayout from "./client"
import { Suspense } from "react"
import { Mona_Sans as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import NoScriptStyles from "@/components/noscript-styles"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ayogenthiran.github.io'),
  title: "AY | Senior Software Engineer",
  description:
    "Portfolio of Anojan Yogenthiran, a Senior Software Engineer specializing in JavaScript, TypeScript, React.js, Node.js, Laravel, and AWS.",
  keywords: [
    "Anojan Yogenthiran",
    "Software Engineer",
    "Full Stack Developer",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "AWS",
  ],
  authors: [{ name: "Anojan Yogenthiran" }],
  creator: "Anojan Yogenthiran",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayogenthiran.github.io",
    title: "AY | Senior Software Engineer",
    description:
      "Portfolio of Anojan Yogenthiran, a Senior Software Engineer specializing in JavaScript, TypeScript, React.js, Node.js, Laravel, and AWS.",
    siteName: "Anojan Yogenthiran Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Anojan Yogenthiran Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AY | Senior Software Engineer",
    description:
      "Portfolio of Anojan Yogenthiran, a Senior Software Engineer specializing in JavaScript, TypeScript, React.js, Node.js, Laravel, and AWS.",
    creator: "@ayogenth",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <NoScriptStyles />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={cn("min-h-screen bg-background font-mono antialiased", fontSans.variable)}>
        <Suspense>
          <ClientLayout>{children}</ClientLayout>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
