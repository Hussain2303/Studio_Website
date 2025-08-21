"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { motion } from "framer-motion"

function FooterGeometry() {
  const meshRef = useRef<any>()
  const mesh2Ref = useRef<any>()
  const mesh3Ref = useRef<any>()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.3) * 0.2
    }
    if (mesh2Ref.current) {
      mesh2Ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.4
      mesh2Ref.current.position.x = Math.sin(state.clock.elapsedTime * 0.6) * 0.5
    }
    if (mesh3Ref.current) {
      mesh3Ref.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.7) * 0.2
      mesh3Ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    }
  })

  return (
    <>
      <mesh ref={meshRef} position={[-2, 0, -1]}>
        <octahedronGeometry args={[0.4]} />
        <meshBasicMaterial color="#ff4d00" wireframe />
      </mesh>
      <mesh ref={mesh2Ref} position={[0, 0.5, -2]}>
        <icosahedronGeometry args={[0.3]} />
        <meshBasicMaterial color="#ff6b35" wireframe />
      </mesh>
      <mesh ref={mesh3Ref} position={[2, -0.3, -1.5]}>
        <dodecahedronGeometry args={[0.35]} />
        <meshBasicMaterial color="#ff4d00" wireframe />
      </mesh>
    </>
  )
}

export function Footer3D() {
  return (
    <motion.footer
      className="relative border-t border-primary/20 py-16 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <FooterGeometry />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.h2
              className="text-3xl font-bold font-sans text-primary mb-4"
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 20px rgba(255, 77, 0, 0.8)",
              }}
            >
              STUDIO
            </motion.h2>
            <p className="text-muted-foreground font-serif max-w-md">
              Creating extraordinary digital experiences through innovative design and cutting-edge technology.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((item, index) => (
                <motion.li key={item}>
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    whileHover={{ x: 5, color: "#ff4d00" }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <h3 className="text-lg font-semibold text-foreground mb-4">Get in Touch</h3>
            <div className="space-y-2 text-muted-foreground">
              <motion.p whileHover={{ color: "#ff4d00", x: 5 }}>hello@studio.com</motion.p>
              <motion.p whileHover={{ color: "#ff4d00", x: 5 }}>+1 (555) 123-4567</motion.p>
              <motion.p whileHover={{ color: "#ff4d00", x: 5 }}>New York, NY</motion.p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div className="text-muted-foreground font-serif mb-4 md:mb-0" whileHover={{ color: "#ff4d00" }}>
            © 2024 Studio. All rights reserved.
          </motion.div>
          <div className="flex space-x-6">
            {["Privacy", "Terms", "Cookies"].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                whileHover={{ y: -2, color: "#ff4d00" }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
