import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vault Counter',
  description: 'Rebuilt using Next.js, TailwindCSS, DaisyUI, React and Google Firebase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen`}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
