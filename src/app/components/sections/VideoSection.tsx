import { Play } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 px-6 lg:px-8 bg-white">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-center mb-4 text-4xl font-semibold text-slate-900">
          Hello, I'm Reta — In My Own Words  {/* FIXED: Added name */}
        </h2>
        <p className="text-center mb-12 text-lg text-slate-600">
          A personal introduction to who I am and what drives me
        </p>

        {/* Video Placeholder */}
        <div className="relative aspect-video bg-gradient-to-br from-[#E07A5F] to-[#B65F48] rounded-2xl shadow-xl overflow-hidden group cursor-pointer">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
          
          {/* Play Button with subtle pulse */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Play className="w-8 h-8 ml-1 text-[#E07A5F]" fill="currentColor" />
            </motion.div>
          </div>

          {/* Placeholder Text */}
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm opacity-90">60-90 second introduction video</p>
          </div>
        </div>

        <p className="text-center mt-6 text-sm text-slate-600">
          Click to play • A brief, authentic message about my journey and goals
        </p>
      </motion.div>
    </section>
  );
}