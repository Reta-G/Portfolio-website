import { Play } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function VideoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-24 px-6 lg:px-8 bg-linear-to-br from-white via-indigo-50/30 to-rose-50/30">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-center mb-4">
          <span className="text-4xl md:text-5xl font-bold bg-linear-to-r from-indigo-900 via-purple-800 to-rose-700 bg-clip-text text-transparent">
            Hello, I'm Reta — In My Own Words
          </span>
        </h2>
        
        <p className="text-center mb-12 text-lg text-gray-600 font-light">
          A personal introduction to who I am and what drives me
        </p>

        <motion.div 
          className="relative aspect-video bg-linear-to-br from-indigo-600 via-purple-600 to-rose-600 rounded-2xl shadow-2xl overflow-hidden group cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300"
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 20px 40px -10px rgba(0,0,0,0.3)",
                  "0 30px 60px -10px rgba(225,29,72,0.4)",
                  "0 20px 40px -10px rgba(0,0,0,0.3)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Play className="w-8 h-8 ml-1 text-rose-600" fill="currentColor" />
            </motion.div>
          </div>

          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-light opacity-90">60-90 second introduction video</p>
          </div>
        </motion.div>

        <p className="text-center mt-6 text-sm text-gray-500">
          Click to play • A brief, authentic message about my journey and goals
        </p>
      </motion.div>
    </section>
  )
}