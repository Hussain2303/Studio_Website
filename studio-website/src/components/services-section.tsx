"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, PenTool, Layout, Share2, TrendingUp, Star, Users, Rocket } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Brand Building",
    short: "Crafting strong, lasting brand identities.",
    description: [
      "Logo design & visual identity creation",
      "Brand guidelines for consistency",
      "Storytelling & brand positioning",
      "Building emotional connections with your audience",
    ],
  },
  {
    icon: PenTool,
    title: "Content Creation",
    short: "Engaging content that inspires action.",
    description: [
      "Copywriting that converts",
      "Photography & videography",
      "Social media campaigns",
      "Creative storytelling for digital platforms",
    ],
  },
  {
    icon: Layout,
    title: "Creative Web Designs",
    short: "Websites that are stunning and functional.",
    description: [
      "Modern responsive web design",
      "UI/UX focused development",
      "Performance-optimized builds",
      "Tailored to your business goals",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    short: "Grow and manage your online presence.",
    description: [
      "Content calendars & posting strategies",
      "Community management",
      "Analytics-driven growth",
      "Cross-platform branding",
    ],
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    short: "Data-driven campaigns for growth.",
    description: [
      "ROI-focused ad campaigns",
      "Search engine marketing (SEM)",
      "Social media ads & retargeting",
      "Conversion tracking & optimization",
    ],
  },
]

const whyChooseUs = [
  {
    icon: Star,
    title: "Proven Expertise",
    text: "Our team brings years of industry experience, ensuring that every project we take on delivers results.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    text: "We collaborate closely with our clients, making sure every solution is tailored to your vision.",
  },
  {
    icon: Rocket,
    title: "Innovation Driven",
    text: "We embrace creativity and technology to push boundaries and deliver cutting-edge digital solutions.",
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleService = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-sans mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-serif">
            Explore our areas of expertise designed to elevate your brand
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card
                onClick={() => toggleService(index)}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 group h-full cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <service.icon className="h-8 w-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold font-sans mb-2">{service.title}</h3>
                  <p className="text-muted-foreground font-serif leading-relaxed mb-3">{service.short}</p>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <ul className="text-sm text-muted-foreground font-serif leading-relaxed space-y-2 text-left">
                          {service.description.map((point, i) => (
                            <li key={i}>• {point}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-sans mb-6">
            Why <span className="text-primary">Choose Us?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-serif">
            We don’t just deliver services — we deliver impactful experiences and measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {whyChooseUs.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group h-full">
                <CardContent className="p-6 text-center">
                  <reason.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold font-sans mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground font-serif leading-relaxed">{reason.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">
            Ready to <span className="text-primary">Grow Your Brand?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6 font-serif">
            Let’s collaborate and turn your ideas into reality with our expertise.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg shadow-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Let’s Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
