import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@/components/analytics"
import ClientLayout from "./client"
import { Suspense } from "react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { cn } from "@/lib/utils"
import NoScriptStyles from "@/components/noscript-styles"
import { siteProfile } from "@/lib/portfolio"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ayogenthiran.github.io'),
  title: `${siteProfile.name} - ayogenthiran.github.io`,
  description: `Portfolio of ${siteProfile.name}, an ${siteProfile.headline}`,
  keywords: [
    "Anojan Yogenthiran",
    "AI/ML Engineer",
    "Machine Learning Engineer",
    "Generative AI",
    "Agentic AI",
    "RAG",
    "LLM Evaluation",
    "MLOps",
  ],
  authors: [{ name: siteProfile.name }],
  creator: siteProfile.name,
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
    title: `${siteProfile.name} - ayogenthiran.github.io`,
    description: `Portfolio of ${siteProfile.name}, an ${siteProfile.headline}`,
    siteName: `${siteProfile.name} Portfolio`,
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: `${siteProfile.name} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteProfile.name} - ayogenthiran.github.io`,
    description: `Portfolio of ${siteProfile.name}, an ${siteProfile.headline}`,
    creator: "@ayogenth",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("dark", GeistSans.variable, GeistMono.variable)} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme');
                const defaultTheme = savedTheme || 'dark';
                document.documentElement.setAttribute('data-theme', defaultTheme);
                document.documentElement.classList.remove('light', 'dark');
                document.documentElement.classList.add(defaultTheme);
              })();
            `,
          }}
        />
        <NoScriptStyles />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Suspense>
          <ClientLayout>{children}</ClientLayout>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
