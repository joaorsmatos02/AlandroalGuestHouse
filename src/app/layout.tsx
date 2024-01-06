import type { Metadata } from 'next'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alandroal Guest House',
  description: 'Alandroal Guest House',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">   
        <body className={montserrat.className}>{children}</body>
    </html>
  )
}
