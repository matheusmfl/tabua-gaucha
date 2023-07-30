import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Tábua Gaucha | Produtos de excelência',
  description: 'Madeira de primeira qualidade',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto.className}`}>{children}</body>
    </html>
  )
}
