import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Travel Agency Georgia',
  description: 'Travel UI/UX App for Camping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
