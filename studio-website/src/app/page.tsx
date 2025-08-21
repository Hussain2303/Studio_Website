"use client"

import { AnimatedNavbar } from "@/components/animated-navbar"
import { Background3D } from "@/components/background-3d"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { Footer3D } from "@/components/footer-3d"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Background3D />
      <AnimatedNavbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <ContactSection />
      <Footer3D />
    </main>
  )
}
