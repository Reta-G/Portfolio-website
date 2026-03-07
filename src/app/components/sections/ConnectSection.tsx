import { Github, Linkedin, Mail } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function ConnectSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="connect" ref={ref} className="py-24 px-6 lg:px-8 bg-slate-900 text-white">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="mb-6 text-center text-4xl font-semibold">
          Let's Connect
        </h2>
        
        <p className="text-center mb-12 text-lg text-slate-400">
          I'm always open to conversations about opportunities, collaboration, or just talking about technology.
        </p>

        {/* Contact Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto justify-center bg-slate-800 hover:bg-slate-700"
          >
            <Github className="w-5 h-5" />
            <span>github.com/yourusername</span>
          </a>
          
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto justify-center bg-[#E07A5F] hover:bg-[#B65F48]"
          >
            <Linkedin className="w-5 h-5" />
            <span>linkedin.com/in/yourusername</span>
          </a>
          
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto justify-center bg-slate-800 hover:bg-slate-700"
          >
            <Mail className="w-5 h-5" />
            <span>your.email@example.com</span>
          </a>
        </div>

        {/* Footer */}
        <div className="pt-8 text-center border-t border-slate-700">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Your Name. Built with React and Tailwind CSS.
          </p>
          <p className="text-xs mt-2 text-slate-600">
            Designed to showcase potential, not just projects.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
