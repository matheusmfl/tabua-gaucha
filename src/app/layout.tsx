import './globals.css'
import type { Metadata } from 'next'
import { Raleway, Roboto } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-inter' })

const roboto = Roboto({
  weight: ['300', '400', '500', '900', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Tábua Gaucha | Produtos de excelência',
  description: 'Madeira de primeira qualidade',
}
export const revalidate = 3600

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${raleway.className} ${roboto.className}`}>{children}</body>
    </html>
  )
}
