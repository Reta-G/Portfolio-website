import { Target, Users, Lightbulb, Rocket, HeartHandshake } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function FutureSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const cards = [
    {
      icon: Target,
      title: "The Role I Want",
      description: "A place where I can contribute to meaningful projects and learn from engineers who've been in the trenches. I'm looking for a launchpad."
    },
    {
      icon: Rocket,
      title: "The Problem I'm Solving",
      description: "Ethiopian e-commerce is broken. We're using platforms designed for Amazon, not for us. I'm building something that actually fits how Ethiopians shop, trust, and connect."
    },
    {
      icon: HeartHandshake,
      title: "The Impact I'll Make",
      description: "I want to be your unforgettable first. The person you remember because we built something real together. I care deeply, and people don't forget that."
    }
  ]

  return (
    <section ref={ref} className="py-24 px-6 lg:px-8 bg-linear-to-br from-[#F5FBE6] to-white">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="mb-12 text-center">
          <span className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#233D4D] via-[#215E61] to-[#FE7F2D] bg-clip-text text-transparent">
            Where I'm Headed
          </span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div 
                key={card.title}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-[#F5FBE6] to-[#e5f0d1] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-xl">
                  <Icon className="w-10 h-10 text-[#FE7F2D]" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#233D4D]">
                  {card.title}
                </h3>
                <p className="text-sm text-[#215E61]">
                  {card.description}
                </p>
              </motion.div>
            )
          })}
        </div>
        
        <motion.div 
          className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-[#d9e3c0] hover:shadow-2xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-center text-lg leading-relaxed text-[#233D4D]">
            I'm looking for a team that values <span className="font-bold text-[#FE7F2D]">thoughtful engineering</span>, 
            <span className="font-bold text-[#FE7F2D]"> continuous learning</span>, and 
            <span className="font-bold text-[#FE7F2D]"> building products that actually matter</span>.
          </p>
          <p className="text-center text-lg leading-relaxed text-[#215E61] mt-4">
            I want to work alongside people who ask good questions, care about the details, 
            and believe that technology can be a force for good in Ethiopia and beyond.
          </p>
          <p className="text-center text-xl font-bold mt-6 text-[#233D4D]">
            If you're building something meaningful 
            <span className="block text-[#FE7F2D] mt-2">let's make history together.</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}