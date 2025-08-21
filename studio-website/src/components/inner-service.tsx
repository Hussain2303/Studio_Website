"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Palette, PenTool, Layout, Share2, TrendingUp, Mail, Linkedin, Instagram } from "lucide-react"

export default function InnerServices() {
  const services = [
    {
      icon: Palette,
      title: "Brand Building",
      desc: "Crafting identities that resonate, inspire trust, and last for generations.",
      path: "/InnerService/brand-building",
    },
    {
      icon: PenTool,
      title: "Content Creation",
      desc: "From storytelling to visuals, we produce engaging content that converts.",
      path: "/InnerService/content-creation",
    },
    {
      icon: Layout,
      title: "Creative Web Design",
      desc: "Modern, responsive, and user-centric websites tailored to your goals.",
      path: "/InnerService/creative-web-design",
    },
    {
      icon: Share2,
      title: "Social Media Management",
      desc: "Grow, engage, and manage your audience with smart social strategies.",
      path: "/InnerService/social-media-management",
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      desc: "ROI-driven campaigns powered by data, creativity, and optimization.",
      path: "/InnerService/performance-marketing",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 relative overflow-hidden">
      {/* Subtle background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold font-sans mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Explore our core expertise designed to elevate your brand into a powerful, recognizable identity.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          layout
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, rotateX: 2, rotateY: -2, scale: 1.02 }}
                className="group relative bg-card rounded-2xl shadow-lg border border-transparent hover:border-primary/50 hover:shadow-primary/20 transition-all duration-500 cursor-pointer p-8 flex flex-col"
              >
                {/* Glow hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/10 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-primary/10 mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground font-serif leading-relaxed flex-grow">
                    {service.desc}
                  </p>
                  <Link
                    href={service.path}
                    className="mt-6 inline-block text-primary font-semibold hover:underline"
                  >
                    Click to Explore More →
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA Section (animated & transparent) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-28 text-center max-w-3xl mx-auto"
        >
          <motion.div
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-lg p-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Let’s Connect
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Have a project in mind? Reach out directly via email or connect with us on social media.
            </p>

            <motion.div
              className="flex justify-center gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
              }}
            >
              {[
                { href: "mailto:your@email.com", icon: Mail, label: "Email Us" },
                { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
                { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.label}
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  >
                    <Link
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all duration-300"
                    >
                      <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                        <Icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <span className="text-primary font-semibold">{item.label}</span>
                    </Link>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
