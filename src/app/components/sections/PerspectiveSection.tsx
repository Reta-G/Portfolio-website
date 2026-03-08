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
            The Way I See It
          </span>
        </h2>
        
        <div className="bg-[#F5FBE6]/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-[#F5FBE6]/20 space-y-6">
          <p className="text-lg leading-relaxed">
            <span className="text-2xl font-bold text-[#FE7F2D]">"Why?"</span> before 
            <span className="text-2xl font-bold text-[#FE7F2D]"> "How?"</span> that's my mantra.
          </p>
          
          <p className="text-lg leading-relaxed">
            The best software comes from understanding the person on the other side 
            of the screen. From asking: <span className="italic text-[#FE7F2D]">"Does this actually make their life better?"</span>
          </p>
          
          <p className="text-lg leading-relaxed bg-[#233D4D]/50 p-6 rounded-xl">
            I've noticed something about the e-commerce platforms we use in Ethiopia. They're copy-pasted 
            from giant global companies. <span className="font-bold">They weren't built for us.</span> 
             And that? That's not a complaint that's an opportunity.
          </p>
          
          <p className="text-lg leading-relaxed">
            I'm working on changing that. Building something that actually fits how Ethiopians think, 
            trust, and transact. Because technology should feel like it belongs to you not like you're 
            borrowing it from someone else.
          </p>
          
          <div className="border-t border-[#F5FBE6]/20 pt-6 mt-4">
            <p className="text-xl font-bold text-center">
              People don't forget their first time.
            </p>
            <p className="text-center mt-2">
              If you wanna be my unforgettable client - <span className="text-[#FE7F2D] font-bold">be the first.</span>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}