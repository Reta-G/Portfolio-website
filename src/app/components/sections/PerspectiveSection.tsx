import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function PerspectiveSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="perspective" ref={ref} className="py-24 px-6 lg:px-8 bg-linear-to-br from-[#233D4D] via-[#215E61] to-[#1a494b] text-[#F5FBE6] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FE7F2D] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F5FBE6] rounded-full filter blur-3xl"></div>
      </div>

      <motion.div 
        className="max-w-3xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="mb-12 text-center">
          <span className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#F5FBE6] via-[#FE7F2D] to-[#F5FBE6] bg-clip-text text-transparent">
            What Drives Me
          </span>
        </h2>
        
        <div className="bg-[#F5FBE6]/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-[#F5FBE6]/20">
          <p className="mb-6 text-lg leading-relaxed italic text-[#F5FBE6]/90">
            "Technology should serve people, not the other way around. I believe the most powerful software 
            is built when you deeply understand the problem you're solving—not just the technical requirements, 
            but the human context around it."
          </p>
          
          <p className="text-lg leading-relaxed text-[#F5FBE6]/80">
            I'm particularly interested in accessible, intuitive interfaces and systems that reduce cognitive 
            load. Whether it's a developer tool that makes debugging less painful or an application that helps 
            non-technical users feel empowered, I want to build software that respects people's time and 
            mental energy. In a world of increasing complexity, I believe simplicity and clarity are radical 
            acts of design.
          </p>
        </div>
      </motion.div>
    </section>
  )
}