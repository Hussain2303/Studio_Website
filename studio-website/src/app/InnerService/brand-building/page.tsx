"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { inSphere } from "maath/random"

// 🌌 Animated starfield background
function Stars() {
  const groupRef = useRef<THREE.Group>(null)
  const geomRef = useRef<THREE.BufferGeometry>(null)
  const [positions] = useState(() => inSphere(new Float32Array(5000), { radius: 1.5 }))

  useEffect(() => {
    if (geomRef.current) {
      geomRef.current.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    }
  }, [positions])

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x -= delta / 20
      groupRef.current.rotation.y -= delta / 25
    }
  })

  return (
    <group ref={groupRef} rotation={[0, 0, Math.PI / 4]}>
      <points>
        <bufferGeometry ref={geomRef} />
        <pointsMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </group>
  )
}

export default function BrandBuilding() {
  const expertise = ["Brand Strategy", "Visual Identity", "Brand Messaging", "Brand Guidelines"]

  const process = [
    {
      title: "Discovery",
      desc:
        "We begin by understanding your business, values, and goals through a detailed briefing and consultation.",
    },
    {
      title: "Proposal & Alignment",
      desc:
        "Based on your objectives, we provide a tailored proposal outlining the scope, deliverables, and timelines.",
    },
    {
      title: "Strategy & Execution",
      desc:
        "Our team develops a comprehensive brand strategy, followed by visual identity, messaging, and guidelines, ensuring every element works harmoniously.",
    },
  ]

  return (
    <div className="relative text-white min-h-screen overflow-hidden scroll-smooth">
      {/* Background stars (transparent canvas) */}
      <Canvas
        className="absolute inset-0 -z-10"
        camera={{ position: [0, 0, 1] }}
        gl={{ alpha: true }} // ✅ ensures transparent background
      >
        <Stars />
      </Canvas>

      <div className="relative z-10 px-6 lg:px-20 pt-10 pb-16 space-y-20">
        {/* Navigation */}
        <nav className="sticky top-0 z-20 -mx-6 lg:-mx-20 px-6 lg:px-20 py-3 bg-black/30 backdrop-blur border-b border-white/10">
          <ul className="flex items-center justify-center gap-6 text-sm md:text-base">
            <li><a href="#intro" className="text-white/80 hover:text-white transition">01. Intro</a></li>
            <li><a href="#how" className="text-white/80 hover:text-white transition">02. How</a></li>
            <li><a href="#expertise" className="text-white/80 hover:text-white transition">03. Expertise</a></li>
            <li><a href="#process" className="text-white/80 hover:text-white transition">04. Process</a></li>
          </ul>
        </nav>

        {/* Title */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Brand Building
          </h1>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Build a brand that speaks clearly, connects deeply, and stands out consistently.
          </p>
        </motion.header>

        {/* 01. Intro service */}
        <section id="intro" className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-semibold mb-4"
          >
            01. Intro service
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl"
          >
            <p className="text-white/80 leading-relaxed">
              Your brand is more than just a logo; it’s the way people feel when they interact with your business.
              It’s your voice, your values, and the lasting impression you leave behind. At{" "}
              <span className="text-primary font-semibold">Koko Studio</span>, we help you build a brand that speaks
              clearly, connects deeply, and stands out consistently.
            </p>
          </motion.div>
        </section>

        {/* 02. How do we do that */}
        <section id="how" className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-semibold mb-4"
          >
            02. How do we do that
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl"
          >
            <p className="text-white/80 leading-relaxed">
              We work closely with you to uncover what makes your brand unique, then bring it to life through
              strategy, design, and storytelling. Whether you're starting from scratch or looking to reposition,
              we make sure every element feels authentic, aligned, and built to grow.
            </p>
          </motion.div>
        </section>

        {/* 03. Industry expertise */}
        <section id="expertise" className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-semibold mb-8 text-center"
          >
            03. Industry expertise
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold">{item}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 04. Our working process */}
        <section id="process" className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-semibold mb-8 text-center"
          >
            04. Our working process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-white/70 text-center max-w-3xl mx-auto mb-8"
          >
            We follow a clear, collaborative process to craft brands that are strategic, distinctive, and built to last.
          </motion.p>

          <ol className="space-y-6">
            {process.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-2 text-primary font-bold">{`0${i + 1}. ${step.title}`}</div>
                <p className="text-white/80">{step.desc}</p>
              </motion.li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  )
}
