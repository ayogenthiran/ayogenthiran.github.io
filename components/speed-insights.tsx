"use client"

import { SpeedInsights as VercelSpeedInsights } from "@vercel/speed-insights/react"

interface SpeedInsightsProps {
  debug?: boolean
}

export function SpeedInsights({ debug = false }: SpeedInsightsProps) {
  return <VercelSpeedInsights debug={debug} />
}
