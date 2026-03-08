import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" ref={ref} className="py-24 px-6 lg:px-8 bg-linear-to-br from-white to-indigo-50/30">
      <motion.div 
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="mb-12 text-center">
          <span className="text-4xl md:text-5xl font-bold bg-linear-to-r from-indigo-900 via-purple-800 to-rose-700 bg-clip-text text-transparent">
            How I Got Here
          </span>
        </h2>
        
        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-gray-700">
            My journey into computer science didn't start with code—it started with curiosity. I remember 
            the exact moment: I was frustrated with a tedious manual task at my part-time job, and I thought, 
            "There has to be a better way." That simple question led me down a rabbit hole of learning Python, 
            automating workflows, and eventually discovering a deep fascination with how software can genuinely 
            improve people's lives.
          </p>
          
          <p className="text-gray-700">
            During my studies, I gravitated toward projects that solved real human problems. Whether it was 
            building a study scheduler that understood student stress patterns or creating an accessibility 
            tool for campus navigation, I learned that the best technology is invisible—it just works, and it 
            makes life a little easier.
          </p>
          
          <p className="text-gray-700 font-medium border-l-4 border-rose-400 pl-6 py-2 bg-white/50 rounded-r-lg">
            What drives me isn't just the technical challenge—though I love that—it's the possibility of 
            creating something that someone will use and think, "This makes sense." That's what brought me to 
            computer science, and that's what keeps me learning every day.
          </p>
        </div>
      </motion.div>
    </section>
  )
}