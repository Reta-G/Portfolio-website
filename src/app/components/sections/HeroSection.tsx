import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20">
      <motion.div 
        className="max-w-5xl w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Photo Placeholder */}
          <motion.div 
            className="shrink-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-linear-to-br from-[#E07A5F]/20 to-[#E07A5F]/10 border-4 border-white shadow-lg flex items-center justify-center overflow-hidden">
              <div className="text-center text-slate-600">
                <div className="w-24 h-24 mx-auto mb-2 rounded-full bg-[#E2E8F0]"></div>
                <span className="text-xs">Your Photo</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.h1 
              className="mb-6 text-5xl leading-tight font-semibold text-slate-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Your Name
            </motion.h1>
            
            <motion.p 
              className="mb-4 text-2xl leading-tight font-medium text-[#E07A5F]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              Computer Science Graduate.<br />
              Curious Problem Solver.
            </motion.p>
            
            <motion.p 
              className="mb-8 text-lg leading-relaxed max-w-2xl mx-auto text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              I build elegant solutions by understanding the human problem first.
            </motion.p>

            {/* Social Links */}
            <motion.div 
              className="flex items-center gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 bg-slate-900 hover:bg-slate-800"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 bg-[#E07A5F] hover:bg-[#B65F48]"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
