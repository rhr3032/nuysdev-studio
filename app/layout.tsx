import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, IBM_Plex_Sans } from 'next/font/google'
import { Courier_Prime } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _courierPrime = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });
const _ibmPlexSans = IBM_Plex_Sans({ weight: ["300", "400", "500", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'NUYsDEV — Global UI/UX Design & Development Studio',
  description: 'We go beyond creating interfaces to design user experiences that truly connect with people. By combining thoughtful design with reliable development, we help startups and small businesses connect with people, build trust, and grow faster.',
  keywords: ['UI/UX design', 'web development', 'creative agency', 'design studio', 'development team', 'user experience', 'interface design', 'responsive design', 'front-end development', 'mobile app development', 'branding', 'graphic design', 'digital strategy', 'startup design', 'small business design', 'custom web solutions', 'design consultancy', 'design and development', 'full-service agency', 'NUYsDEV', 'NUYsDEV design', 'NUYsDEV development', 'NUYsDEV agency', 'NUYsDEV studio', 'NUYsDEV UI/UX', 'NUYsDEV web', 'NUYsDEV mobile', 'NUYsDEV branding', 'NUYsDEV creative', 'NUYsDEV digital', 'rhr3032', 'RHRafi', 'Raisul Rafi', 'RHR', 'Rafi', 'Raisul Hasan Rafi', 'rhrafi3032', 'NUYsDZiN', 'NUYsDZiN design', 'NUYsDZiN development', 'NUYsDZiN agency', 'NUYsDZiN studio', 'NUYsDZiN UI/UX', 'NUYsDZiN web', 'NUYsDZiN mobile', 'NUYsDZiN branding', 'NUYsDZiN creative', 'NUYsDZiN digital', 'NUYsDZiN rhr3032', 'NUYsDZiN RHRafi', 'NUYsDZiN Raisul Rafi', 'NUYsDZiN RHR', 'NUYsDZiN Rafi', 'NUYsDZiN Raisul Hasan Rafi', 'Vibe Coding', 'No Code Development', 'Framer', 'Webflow', 'Figma', 'Sketch', 'Adobe XD', 'React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'responsive web design', 'mobile app design', 'e-commerce design', 'branding and identity', 'graphic design services', 'digital marketing strategy', 'startup branding', 'small business web design', 'custom software development', 'design consultancy services', 'full-service creative agency', 'NUYsDEV portfolio', 'NUYsDEV clients', 'NUYsDEV case studies', 'saas', 'e-commerce', 'healthcare', 'education', 'finance', 'technology', 'B2B', 'B2C', 'UX research', 'user testing', 'information architecture', 'interaction design', 'visual design', 'motion design', 'prototyping', 'usability testing', 'accessibility design', 'design systems', 'style guides', 'front-end development services', 'mobile app development services', 'react development', 'next.js development', 'tailwind css development', 'typescript development', 'javascript development', 'sass products', 'e-commerce solutions', 'responsive design services', 'branding services', 'graphic design services', 'digital strategy services', 'startup design services', 'small business design services', 'custom web solutions', 'design consultancy services', 'design and development services', 'full-service agency services', 'erp', 'crm', 'lms', 'marketplace', 'social network', 'dashboard', 'saas design', 'e-commerce design', 'healthcare design', 'education design', 'finance design', 'technology design', 'B2B design', 'B2C design', 'flutter development', 'react native development', 'swift development', 'kotlin development', 'ios app design', 'android app design', 'cross-platform app design', 'native app design'],
  authors: [{ name: 'NUYsDEV' }],
  openGraph: {
    title: 'NUYsDEV — Global UI/UX Design & Development Studio',
    description: 'We go beyond creating interfaces to design user experiences that truly connect with people.',
    type: 'website',
    url: 'https://agentic.ai',
    siteName: 'NUYsDEV',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NUYsDEV — Global UI/UX Design & Development Studio',
    description: 'We go beyond creating interfaces to design user experiences that truly connect with people.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
