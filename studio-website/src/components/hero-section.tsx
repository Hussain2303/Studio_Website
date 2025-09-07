"use client"

import { motion } from "framer-motion"
export function HeroSection() {
  return (
   <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-12 text-white mt-24">
      {/* Intro */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-4"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Hello People! We&apos;re <span className="text-purple-400">Koko Studio</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl max-w-3xl mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        We Inspire Beliefs n&apos; Souls  
        <br />
        From strategies to storytelling, Koko Studio delivers 360° digital solutions that connect your brand with its rightful audience.
      </motion.p>

      {/* Story / Design / Perception */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl">
        {["Story", "Design", "Perception"].map((item, i) => (
          <motion.div
            key={item}
            className="p-6 rounded-2xl bg-black/40 backdrop-blur-lg shadow-md border border-white/10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-2">{item}</h3>
            <p className="text-sm text-gray-300">
              {item === "Story" &&
                "We craft compelling stories that resonate with your audience and leave a mark."}
              {item === "Design" &&
                "Our designs are bold, functional, and driven by strategy."}
              {item === "Perception" &&
                "We shape how your audience sees, feels, and connects with your brand."}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Mission / Vision */}
      <motion.div
        className="max-w-4xl text-left space-y-6 mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-3xl font-bold">We do things differently.</h2>
        <div>
          <h3 className="text-xl font-semibold">Data-Driven Strategy</h3>
          <p className="text-gray-300">
            We analyze your brand, audience, and trends to build strategies, ensuring every move is focused, relevant, and goal-aligned.  
            Then we blend strategy with creativity to craft content that connects, engages, and leaves a lasting impression.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Vision Statement</h3>
          <p className="text-gray-300">
            To be recognized for our groundbreaking creativity and innovative approaches that bring brands to life in unforgettable ways.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Mission Statement</h3>
          <p className="text-gray-300">
            Our mission is to uncover innovative solutions by exploring every perspective. We dive deep into your goals and create impactful strategies that capture the attention you deserve.
          </p>
        </div>
      </motion.div>

      {/* Recognitions & Milestones */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {[
          { label: "Years of Experience", value: "8+" },
          { label: "Projects Completed", value: "5K+" },
          { label: "Revenue Generated", value: "44M+" },
          { label: "Creative Individuals", value: "10+" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            className="p-4 rounded-xl bg-black/40 backdrop-blur-lg shadow border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h4 className="text-3xl font-bold text-purple-400">{stat.value}</h4>
            <p className="text-sm text-gray-300">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Case Studies */}
      <motion.div
        className="max-w-5xl text-left mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-3xl font-bold mb-6">Case Studies</h2>
        <p className="mb-4 text-gray-300">Honored to Share Their Stories</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {["Fatpat", "Alnaseer", "Circle International", "Cakoo", "SNF"].map(
            (client, i) => (
              <motion.div
                key={client}
                className="p-6 rounded-2xl bg-black/40 backdrop-blur-lg shadow-md border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h3 className="text-xl font-bold">{client}</h3>
              </motion.div>
            )
          )}
        </div>
      </motion.div>

      {/* Final CTA */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false, amount: 0.4 }}
      >
        <p className="text-lg md:text-xl font-semibold">
          Build a brand that truly connects.
        </p>
      </motion.div>
    </section>
  )
}
