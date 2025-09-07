"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-sans mb-6">
            Let&apos;s <span className="text-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-serif">
            Ready to start your next project? Reach us directly through our contact details below.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold font-sans mb-6">Get in Touch</h3>
              <p className="text-muted-foreground font-serif leading-relaxed mb-8">
                We&apos;d love to hear from you. Whether it&apos;s a new project, collaboration, or just to say hello — connect with us below.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">hello@studio.com</p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </motion.div>

              {/* Office */}
              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Office</h4>
                  <p className="text-muted-foreground">
                    123 Creative Street
                    <br />
                    Design City, DC 12345
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Social / Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <Card className="bg-card border-border">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-bold font-sans">Connect Online</h3>
                <p className="text-muted-foreground font-serif mb-4">
                  Follow us on social media for updates, behind-the-scenes, and more.
                </p>

                <div className="flex space-x-6">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Instagram className="h-7 w-7" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Twitter className="h-7 w-7" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Linkedin className="h-7 w-7" />
                  </motion.a>
                </div>
              </CardContent>
            </Card>

            {/* Placeholder for Map */}
            <Card className="bg-card border-border h-64 flex items-center justify-center">
              <p className="text-muted-foreground font-serif">[ Google Map Embed Placeholder ]</p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
