import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: '',
  description: ''
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning className={GeistSans.className}>
      <body
        className={`${GeistMono.variable} antialiased min-h-screen flex flex-col`}
      >
      </body>
    </html>
  )
}
