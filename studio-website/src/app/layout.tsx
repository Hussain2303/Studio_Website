import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import "./globals.css"
import { AnimatedNavbar } from "@/components/animated-navbar"  // ✅ import your navbar
import { Footer3D } from "@/components/footer-3d"
import { Background3D } from "@/components/background-3d"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Studio - Creative Digital Agency",
  description: "Professional studio website with stunning 3D animations and modern design",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${workSans.variable} ${openSans.variable} antialiased dark`}>
        {/* ✅ Navbar will now be present on all pages */}
        <Background3D/>
        <AnimatedNavbar />
        {children}
        <Footer3D/>
      </body>
    </html>
  )
}
