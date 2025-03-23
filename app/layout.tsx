import type React from "react"
import "./globals.css"

export const metadata = {
  title: "Praxis für Psychotherapie in Ludwigshafen",
  description: "Professionelle psychotherapeutische Unterstützung in einer vertrauensvollen Umgebung.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="font-sans">{children}</body>
    </html>
  )
}



import './globals.css'