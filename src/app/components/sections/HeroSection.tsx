import { Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20 bg-linear-to-br from-white via-indigo-50/30 to-rose-50/30 relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
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
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-linear-to-br from-indigo-500 via-purple-500 to-rose-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white overflow-hidden">
                <div className="w-full h-full bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Photo</span>
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
              <span className="text-5xl md:text-7xl font-bold bg-linear-to-r from-indigo-900 via-purple-800 to-rose-700 bg-clip-text text-transparent">
                Reta Getachew
              </span>
            </motion.h1>
            
            <motion.p 
              className="mb-4 text-2xl md:text-3xl font-light text-gray-600"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Computer Science Graduate.
              <br />
              <span className="text-rose-600 font-medium">Curious Problem Solver.</span>
            </motion.p>
            
            <motion.p 
              className="mb-8 text-lg leading-relaxed max-w-2xl mx-auto md:mx-0 text-gray-600"
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
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-linear-to-r from-gray-800 to-gray-900"></span>
                <span className="absolute inset-0 bg-linear-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Github className="w-5 h-5 relative z-10" />
                <span className="relative z-10">GitHub</span>
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-linear-to-r from-rose-600 to-amber-600"></span>
                <span className="absolute inset-0 bg-linear-to-r from-indigo-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
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