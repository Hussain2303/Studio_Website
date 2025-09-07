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

export default function CreativeWebDesigns() {
  const expertise = [
    "Custom Website Design",
    "Responsive & Mobile-First Design",
    "Conversion-Centric Layouts",
    "Website Maintenance & Updates",
  ]

  const process = [
    {
      title: "Requirements & Discovery",
      desc: "We begin by understanding your business, target audience, and technical requirements through a detailed consultation.",
    },
    {
      title: "Planning & Proposal",
      desc: "Based on your needs, we share a customized proposal with project scope, structure, timeline, and cost.",
    },
    {
      title: "Design, Develop & Launch",
      desc: "From wireframes to final deployment, we handle the entire development process, ensuring your website is fast, secure, and user-friendly.",
    },
  ]

  return (
    <div className="relative text-white min-h-screen overflow-hidden scroll-smooth">
      {/* Background stars */}
      <Canvas
        className="absolute inset-0 -z-10"
        camera={{ position: [0, 0, 1] }}
        gl={{ alpha: true }}
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
            <li><a href="#remove" className="text-white/80 hover:text-white transition">05. Remove</a></li>
          </ul>
        </nav>

        {/* Title */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Creative Web Designs
          </h1>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Stunning, user-friendly websites that blend creativity with performance.
          </p>
        </motion.header>

        {/* 01. Intro service */}
        <section id="intro" className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">01. Intro service</h2>
            <p className="text-white/80 leading-relaxed">
              Your website is often the first impression your audience gets; make it count. At{" "}
              <span className="text-cyan-400 font-semibold">Koko Studio</span>, we design visually stunning,
              user-friendly websites that don&apos;t just look good but also perform. We combine creativity with
              functionality to build experiences that reflect your brand and convert visitors into customers.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 h-64 flex items-center justify-center"
          >
            <span className="text-white/50">[ Image Placeholder ]</span>
          </motion.div>
        </section>

        {/* 02. How do we do that */}
        <section id="how" className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl order-2 lg:order-1"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">02. How do we do that</h2>
            <p className="text-white/80 leading-relaxed">
              We understand your brand, design with purpose, develop responsive and SEO-friendly websites,
              test for quality, and provide ongoing support after launch—all to ensure your site looks great
              and performs even better.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 h-64 flex items-center justify-center order-1 lg:order-2"
          >
            <span className="text-white/50">[ Image Placeholder ]</span>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {expertise.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ y: -6, scale: 1.05, rotate: 1 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold text-cyan-400">{item}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 h-64 flex items-center justify-center"
          >
            <span className="text-white/50">[ Image Placeholder ]</span>
          </motion.div>
        </section>

        {/* 04. Our working process */}
        <section id="process" className="max-w-6xl mx-auto">
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
            We build responsive, high-performing websites tailored to your business goals and user needs.
          </motion.p>

          <ol className="space-y-6 mb-10">
            {process.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 hover:scale-[1.01] transition"
              >
                <div className="mb-2 text-cyan-400 font-bold">{`0${i + 1}. ${step.title}`}</div>
                <p className="text-white/80">{step.desc}</p>
              </motion.li>
            ))}
          </ol>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 h-64 flex items-center justify-center"
          >
            <span className="text-white/50">[ Image Placeholder ]</span>
          </motion.div>
        </section>

        {/* 05. Remove */}
        <section id="remove" className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-semibold mb-8 text-center text-red-400"
          >
            05. Remove
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-red-400/40 bg-red-400/10 h-64 flex items-center justify-center"
          >
            <span className="text-red-300">[ Image Placeholder for Remove Section ]</span>
          </motion.div>
        </section>
      </div>
    </div>
  )
}
