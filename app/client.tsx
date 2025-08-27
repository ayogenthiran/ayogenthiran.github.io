"use client"

import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
      <div className="relative flex min-h-screen flex-col overflow-hidden">
        <noscript>
          <div className="bg-yellow-100 dark:bg-yellow-900 p-4 text-center text-sm">
            For the best experience, please enable JavaScript. Some features may be limited without it.
          </div>
        </noscript>
        <AnimatedBackground />
        <Header />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
