import './globals.css'
import './experience-timeline.css'
import type { Metadata } from 'next'
import CursorGlow from './components/CursorGlow'

export const metadata: Metadata = {
  title: 'Zeeshan | Community Builder · Speaker · Developer',
  description: 'Portfolio of Zeeshan — Community builder, public speaker, developer, and explorer. Building impact, creating opportunities.',
  keywords: ['Zeeshan', 'portfolio', 'community builder', 'speaker', 'developer', 'organizer'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <CursorGlow />
        {children}
      </body>
    </html>
  )
}