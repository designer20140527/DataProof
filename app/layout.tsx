import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import { Roboto_Mono } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata = {
  title: "DataProof",
  description: "Deepfake detection platform",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo-fav.png" />
      </head>
      <body className={`${inter.variable} ${robotoMono.variable} font-sans relative`} suppressHydrationWarning>
        {/* 视频背景 */}
        <video 
          className="fixed top-0 left-0 w-full h-full object-cover z-[-2]"
          autoPlay 
          loop 
          muted 
          playsInline
          poster="/grey-poster.jpg"
        >
          <source src="/grey.mp4" type="video/mp4" />
        </video>
        
        {/* 白色半透明遮罩 */}
        <div className="fixed top-0 left-0 w-full h-full bg-[#F3F4F6] opacity-50 z-[-1]"></div>
        
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="pt-24">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'