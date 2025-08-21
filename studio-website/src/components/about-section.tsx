"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-sans mb-6">
              About <span className="text-primary">Koko Studio</span>
            </h2>
            <p className="text-xl font-semibold text-muted-foreground mb-6 font-serif leading-relaxed italic">
              We Inspire Beliefs n’ Souls
            </p>

            <p className="text-lg text-muted-foreground mb-6 font-serif leading-relaxed">
              Koko Studio is a 360° digital marketing and branding agency specializing in creative solutions tailored
              to your unique needs. We’re not just service providers; we’re storytellers, dedicated to connecting your
              brand with your audience and customers in meaningful ways.
            </p>

            <h3 className="text-xl font-bold mb-2">Vision Statement:</h3>
            <p className="text-lg text-muted-foreground mb-6 font-serif leading-relaxed">
              To be recognized for our groundbreaking creativity and innovative approaches that bring brands to life in
              unforgettable ways. We envision a world where brands aren’t just businesses but meaningful experiences
              that leave lasting impressions on people’s hearts and minds.
            </p>

            <h3 className="text-xl font-bold mb-2">Mission Statement:</h3>
            <p className="text-lg text-muted-foreground mb-8 font-serif leading-relaxed">
              Our mission is to uncover innovative solutions by exploring every perspective. We dive deep into your goals
              and create impactful strategies that capture the attention you deserve. With a mix of design, storytelling,
              and technology, we help brands evolve into powerful identities that thrive in the digital age.
            </p>

            <h3 className="text-xl font-bold mb-2">Our Core Values:</h3>
            <ul className="list-disc list-inside text-lg text-muted-foreground font-serif leading-relaxed space-y-2">
              <li><span className="font-semibold text-primary">Creativity:</span> Every project is fueled by bold ideas and fresh perspectives.</li>
              <li><span className="font-semibold text-primary">Authenticity:</span> We believe in building genuine connections between brands and people.</li>
              <li><span className="font-semibold text-primary">Innovation:</span> Staying ahead of trends to deliver modern and impactful solutions.</li>
              <li><span className="font-semibold text-primary">Collaboration:</span> Partnering with clients to transform visions into reality.</li>
            </ul>
          </motion.div>

          {/* Right Side - Visuals & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                className="w-full h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* 🔹 Replace this with an <img /> or Next.js Image */}
                <p className="text-muted-foreground italic">[ Your Studio Image / Creative Graphic Here ]</p>
              </motion.div>

              {/* Floating stats */}
              <motion.div
                className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Extra Section - Philosophy */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-4xl font-bold mb-6">We Do Things Differently</h3>
          <div className="space-y-6 text-lg text-muted-foreground font-serif leading-relaxed">
            <div>
              <h4 className="font-semibold text-primary mb-2">More Than Just a Logo</h4>
              <p>
                At Koko Studio, we create identities, build brands, and get results based on our clients' strategic aspirations.
                We go beyond visuals and ensure your brand becomes a living, breathing identity.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Brands with Soul</h4>
              <p>
                We don’t just build brands – we create stories that connect emotionally. Every brand we work with is designed
                to inspire loyalty and build long-lasting relationships with people.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Tell Your Story, The Right Way</h4>
              <p>
                Great brands don’t just sell – they speak, evolve, and bring people together. We help build those narratives
                and ensure your message is heard in the right way, at the right time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
