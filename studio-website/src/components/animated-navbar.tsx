"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function AnimatedNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "InnerServices", href: "/InnerService" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-lg border-b border-white/10 shadow-md"
          : "bg-transparent border-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 cursor-pointer">
            <motion.h1
              className="text-2xl font-bold font-sans text-primary"
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              whileTap={{ scale: 0.95 }}
            >
              KOKO Studio
            </motion.h1>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`relative font-medium transition-colors duration-200 ${
                      pathname === item.href
                        ? "text-primary after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-primary after:rounded-full"
                        : scrolled
                        ? "text-foreground hover:text-primary"
                        : "text-white hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="hidden md:block"
          >
            <Link href="/contact">
              <motion.button
                className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer px-4 py-2 rounded-md"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 77, 0, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>

          {/* Mobile Hamburger → Animated Fan X */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-8 h-8 flex justify-center items-center"
              whileTap={{ scale: 0.9 }}
            >
              {!isMobileMenuOpen ? (
                // Hamburger (3 lines)
                <div className="space-y-1">
                  <span className="block w-6 h-0.5 bg-white rounded" />
                  <span className="block w-6 h-0.5 bg-white rounded" />
                  <span className="block w-6 h-0.5 bg-white rounded" />
                </div>
              ) : (
                // X that spins like a fan
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "linear",
                  }}
                  className="relative w-6 h-6"
                >
                  <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-white rounded rotate-45" />
                  <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-white rounded -rotate-45" />
                </motion.div>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-primary/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md w-full text-left ${
                      pathname === item.href
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <div className="px-3 py-2">
                <Link href="/contact">
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-4 py-2"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 77, 0, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
