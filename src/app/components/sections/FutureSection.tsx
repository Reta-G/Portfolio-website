import { Target, Users, Lightbulb } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function FutureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
  ];

  return (
    <section ref={ref} className="py-24 px-6 lg:px-8 bg-white">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="mb-12 text-center text-4xl font-semibold text-slate-900">
          Where I'm Headed
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div 
                key={card.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-[#FEF8F6]">
                  <Icon className="w-8 h-8 text-[#E07A5F]" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="bg-white p-8 rounded-xl shadow-sm border border-slate-200"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <p className="text-center text-lg leading-relaxed text-slate-900">
            I'm looking for a team that values thoughtful engineering, continuous learning, and building 
            products that matter. I want to work alongside people who care about craft, ask good questions, 
            and believe that technology can be a force for good. If you're building something meaningful 
            and need someone who brings curiosity, dedication, and a user-first mindset, let's talk.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
