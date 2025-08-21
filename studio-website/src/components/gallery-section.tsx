"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Play } from "lucide-react"

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "3d", "animation", "branding", "web"]

  const projects = [
    {
      id: 1,
      title: "Futuristic Brand Identity",
      category: "branding",
      image: "/futuristic-brand-identity.png",
      type: "image",
    },
    {
      id: 2,
      title: "3D Product Visualization",
      category: "3d",
      image: "/3d-product-visualization.png",
      type: "video",
    },
    {
      id: 3,
      title: "Motion Graphics Reel",
      category: "animation",
      image: "/motion-graphics-preview.png",
      type: "video",
    },
    {
      id: 4,
      title: "Interactive Web Experience",
      category: "web",
      image: "/interactive-web-design-interface.png",
      type: "image",
    },
    {
      id: 5,
      title: "Character Animation",
      category: "animation",
      image: "/character-animation-3d-model.png",
      type: "video",
    },
    {
      id: 6,
      title: "Architectural Visualization",
      category: "3d",
      image: "/architectural-visualization.png",
      type: "image",
    },
  ]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="gallery" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />

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
            Our Portfolio
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Discover our creative excellence through award-winning projects and innovative solutions that bring visions
            to life
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`capitalize cursor-pointer transition-all duration-300 px-4 py-2 rounded-md ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "border border-border hover:bg-primary/10 hover:border-primary"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary capitalize bg-primary/10 px-2 py-1 rounded">
                        {project.category}
                      </span>
                      <Button size="sm" variant="ghost" className="cursor-pointer">
                        {project.type === "video" ? <Play className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                </motion.div>

                {/* Play Icon for Videos */}
                {project.type === "video" && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" />
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          {/* Studio Information Section */}
          <motion.div
            className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-primary/10"
            whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(255, 77, 0, 0.1)" }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-4">About Our Creative Studio</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We are a cutting-edge creative studio specializing in 3D animations, motion graphics, and immersive
              digital experiences. Our team of passionate artists and technologists transforms ideas into stunning
              visual narratives that captivate audiences and elevate brands to new heights.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <motion.div className="text-3xl font-bold text-primary mb-2" whileHover={{ scale: 1.1 }}>
                  150+
                </motion.div>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="p-4">
                <motion.div className="text-3xl font-bold text-primary mb-2" whileHover={{ scale: 1.1 }}>
                  50+
                </motion.div>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="p-4">
                <motion.div className="text-3xl font-bold text-primary mb-2" whileHover={{ scale: 1.1 }}>
                  5+
                </motion.div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </motion.div>

          <motion.button
            className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer px-8 py-3 rounded-md"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 77, 0, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Load  More Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
