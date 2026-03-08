import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" ref={ref} className="py-24 px-6 lg:px-8 bg-linear-to-br from-[#F5FBE6] to-white">
      <motion.div 
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="mb-12 text-center">
          <span className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#233D4D] via-[#215E61] to-[#FE7F2D] bg-clip-text text-transparent">
            From Village to City
          </span>
        </h2>
        
        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-[#233D4D]">
            I'm a countryside guy who grew up in the villages of Ethiopia, and since 2019, I've been 
            exploring the rhythm of Addis Ababa. Two worlds. One perspective. And honestly? 
            <span className="font-bold text-[#FE7F2D]"> That contrast is my superpower.</span>
          </p>
          
          <p className="text-[#215E61] bg-white/50 p-6 rounded-xl border-l-4 border-[#FE7F2D]">
            My journey into tech didn't start in a classroom. It started with a simple question: 
            <span className="italic"> "How can I make this easier?"</span> Whether it was automating 
            something for my family or staying up all night figuring out how websites actually work, 
            I've always been obsessed with building things that feel intuitive and helpful.
          </p>
          
          <p className="text-[#233D4D]">
            At university, I was known for my graphics design skills. Then one day, a university 
            administrator asked: <span className="font-medium">"Can you help our PR team understand branding and design?"</span> 
            I didn't just say yes I designed a complete graphics module, built my own team, handled 
            all the finances, and trained them on Illustrator, Photoshop, After Effects, and Canva. 
            <span className="block mt-2 font-bold text-[#FE7F2D]"> One week. From zero to heroes.</span>
          </p>

          <p className="text-[#215E61]">
            The president's office gave me a recognition certificate. But the real reward? 
            Watching people light up when they create something for the first time. 
            <span className="font-medium"> That moment taught me something powerful:</span> building 
            teams and creating impact through others is actually more amazing than building alone.
          </p>

          <p className="text-[#233D4D] text-center italic border-t border-[#d9e3c0] pt-6">
            My CS degree gave me the theory. The village gave me the work ethic. The city gave me the vision. 
            And you? You might just be the next chapter.
          </p>
        </div>
      </motion.div>
    </section>
  )
}