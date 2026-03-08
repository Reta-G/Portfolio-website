import { Target, Users, Lightbulb } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function FutureSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const cards = [
    {
      icon: Target,
      title: "Role I Seek",
      description: "A position where I can contribute to meaningful products while learning from experienced engineers"
    },
    {
      icon: Lightbulb,
      title: "Problems I Want to Solve",
      description: "Challenges that require both technical depth and empathy for the end user"
    },
    {
      icon: Users,
      title: "Impact I Hope to Make",
      description: "Building tools that genuinely improve people's daily lives and work"
    }
  ]

  return (
    <section ref={ref} className="py-24 px-6 lg:px-8 bg-linear-to-br from-white to-emerald-50/30">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="mb-12 text-center">
          <span className="text-4xl md:text-5xl font-bold bg-linear-to-r from-indigo-900 via-purple-800 to-rose-700 bg-clip-text text-transparent">
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
                <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-rose-50 to-amber-50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-xl">
                  <Icon className="w-10 h-10 text-rose-500" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {card.description}
                </p>
              </motion.div>
            )
          })}
        </div>
        
        <motion.div 
          className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-center text-lg leading-relaxed text-gray-700">
            I'm looking for a team that values thoughtful engineering, continuous learning, and building 
            products that matter. I want to work alongside people who care about craft, ask good questions, 
            and believe that technology can be a force for good. If you're building something meaningful 
            and need someone who brings curiosity, dedication, and a user-first mindset, let's talk.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}