import { Github, Linkedin, Mail } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function ConnectSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="connect" ref={ref} className="py-24 px-6 lg:px-8 bg-linear-to-br from-[#233D4D] via-[#215E61] to-[#1a494b] text-[#F5FBE6] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FE7F2D] rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F5FBE6] rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <motion.div 
        className="max-w-4xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="mb-6 text-center">
          <span className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#F5FBE6] via-[#FE7F2D] to-[#F5FBE6] bg-clip-text text-transparent">
            Let's Connect
          </span>
        </h2>
        
        <p className="text-center mb-12 text-lg text-[#F5FBE6]/80 max-w-2xl mx-auto">
          I'm always open to conversations about opportunities, collaboration, or just talking about technology.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <motion.a
            href="https://github.com/Reta-G"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto justify-center bg-[#F5FBE6]/10 backdrop-blur-sm hover:bg-[#F5FBE6]/20 border border-[#F5FBE6]/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            <span>github.com/Reta-G</span>
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/vetra-g-6210143b6 "
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto justify-center bg-linear-to-r from-[#FE7F2D] to-[#FE9856] hover:from-[#e55f12] hover:to-[#FE7F2D]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-5 h-5" />
            <span>linkedin.com/in/vetra-g </span>
          </motion.a>
          
          <motion.a
            href="mailto:gechbanti@gmail.com"
            className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto justify-center bg-[#F5FBE6]/10 backdrop-blur-sm hover:bg-[#F5FBE6]/20 border border-[#F5FBE6]/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            <span>gechbanti@gmail.com</span>
          </motion.a>
        </div>

        <div className="pt-8 text-center border-t border-[#F5FBE6]/20">
          <p className="text-sm text-[#F5FBE6]/60">
            © {new Date().getFullYear()} Your Name. Built with React and Tailwind CSS.
          </p>
          <p className="text-xs mt-2 text-[#F5FBE6]/40">
            Designed to showcase potential, not just projects.
          </p>
        </div>
      </motion.div>
    </section>
  )
}