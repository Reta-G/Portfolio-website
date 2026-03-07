import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart';

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = {
    "Languages": ["Python", "JavaScript", "TypeScript", "Java", "SQL"],
    "Frameworks & Libraries": ["React", "Node.js", "Express", "Tailwind CSS"],
    "Tools & Technologies": ["Git", "Docker", "PostgreSQL", "REST APIs", "Linux"],
    "Core Competencies": ["Problem Solving", "Critical Thinking", "Communication", "Collaboration", "Adaptability"]
  };

  const skillProficiency = [
    { skill: 'Python', level: 90 },
    { skill: 'JavaScript', level: 85 },
    { skill: 'TypeScript', level: 80 },
    { skill: 'React', level: 88 },
    { skill: 'Node.js', level: 82 },
    { skill: 'Git', level: 95 },
  ];

  const chartConfig = {
    level: {
      label: "Proficiency",
      color: "#E07A5F",
    },
  };

  return (
    <section id="skills" ref={ref} className="py-24 px-6 lg:px-8 bg-white">
      <motion.div 
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="mb-12 text-center text-4xl font-semibold text-slate-900">
          What I Work With
        </h2>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <h3 className="mb-6 text-xl font-medium text-slate-800 text-center">
            Skill Proficiency
          </h3>
          <ChartContainer config={chartConfig} className="h-75 w-full">
            <BarChart data={skillProficiency}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="skill" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="level" fill="var(--color-level)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </motion.div>

        <div className="space-y-10">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: categoryIndex * 0.1 }}
            >
              <h3 className="mb-4 text-base font-medium tracking-wider uppercase text-slate-600">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 text-base text-slate-900 border border-slate-200 hover:border-[#E07A5F] hover:bg-[#FEF8F6]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
