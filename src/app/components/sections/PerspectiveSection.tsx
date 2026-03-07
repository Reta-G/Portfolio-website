import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function PerspectiveSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="perspective" ref={ref} className="py-24 px-6 lg:px-8 bg-slate-50">
      <motion.div 
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="mb-12 text-center text-4xl font-semibold text-slate-900">
          What Drives Me
        </h2>

        <div className="bg-white rounded-r-lg p-8 shadow-sm border-l-4 border-[#E07A5F]">
          <p className="mb-6 text-lg leading-relaxed italic text-slate-900">
            "Technology should serve people, not the other way around. I believe the most powerful software 
            is built when you deeply understand the problem you're solving—not just the technical requirements, 
            but the human context around it."
          </p>

          <p className="text-lg leading-relaxed text-slate-900">
            I'm particularly interested in accessible, intuitive interfaces and systems that reduce cognitive 
            load. Whether it's a developer tool that makes debugging less painful or an application that helps 
            non-technical users feel empowered, I want to build software that respects people's time and 
            mental energy. In a world of increasing complexity, I believe simplicity and clarity are radical 
            acts of design.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
