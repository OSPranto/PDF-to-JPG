import type React from "react"
import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "PDF to JPG - Convert PDF to JPG Images Online Free",
  description:
    "Convert PDF files to high-quality JPG images online for free. Fast, secure, and easy-to-use PDF to JPG converter with no registration required.",
  keywords: "PDF to JPG, PDF converter, convert PDF to image, PDF to JPEG, online converter, free PDF converter",
  authors: [{ name: "PDF to JPG" }],
  creator: "PDF to JPG",
  publisher: "PDF to JPG",
  robots: "index, follow",
  openGraph: {
    title: "PDF to JPG - Convert PDF to JPG Images Online Free",
    description:
      "Convert PDF files to high-quality JPG images online for free. Fast, secure, and easy-to-use PDF to JPG converter.",
    url: "https://pdftojpg.com",
    siteName: "PDF to JPG",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PDF to JPG Converter",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF to JPG - Convert PDF to JPG Images Online Free",
    description: "Convert PDF files to high-quality JPG images online for free.",
    images: ["/og-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${openSans.variable} antialiased`} suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://pdftojpg.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="google-site-verification" content="your-google-verification-code" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
