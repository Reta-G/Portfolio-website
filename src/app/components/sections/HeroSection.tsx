import { Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20 bg-[#F5FBE6] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FE7F2D] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#215E61] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#233D4D] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <motion.div 
        className="max-w-5xl w-full relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Photo */}
          <motion.div 
            className="shrink-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-linear-to-br from-[#215E61] via-[#233D4D] to-[#FE7F2D] p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-[#F5FBE6] overflow-hidden">
                <div className="w-full h-full bg-linear-to-br from-[#d9e3c0] to-[#c5d2aa] flex items-center justify-center">
                  <span className="text-[#233D4D] text-sm">Photo</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hero Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.h1 
              className="mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-5xl md:text-7xl font-bold bg-linear-to-r from-[#233D4D] via-[#215E61] to-[#FE7F2D] bg-clip-text text-transparent">
                Reta Getachew
              </span>
            </motion.h1>
            
            <motion.p 
              className="mb-4 text-2xl md:text-3xl font-light text-[#215E61]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Computer Science Graduate.
              <br />
              <span className="text-[#FE7F2D] font-medium">Curious Problem Solver.</span>
            </motion.p>
            
            <motion.p 
              className="mb-8 text-lg leading-relaxed max-w-2xl mx-auto md:mx-0 text-[#233D4D]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              I build elegant solutions by understanding the human problem first.
            </motion.p>

            <motion.div 
              className="flex items-center gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[#F5FBE6] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-[#233D4D]"></span>
                <span className="absolute inset-0 bg-[#215E61] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Github className="w-5 h-5 relative z-10" />
                <span className="relative z-10">GitHub</span>
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[#F5FBE6] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-[#FE7F2D]"></span>
                <span className="absolute inset-0 bg-[#215E61] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Linkedin className="w-5 h-5 relative z-10" />
                <span className="relative z-10">LinkedIn</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}