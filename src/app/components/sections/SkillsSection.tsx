import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart'

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const skills = {
    "Languages": ["Python", "JavaScript", "TypeScript", "Java", "SQL"],
    "Frameworks & Libraries": ["React", "Node.js", "Express", "Tailwind CSS"],
    "Tools & Technologies": ["Git", "Docker", "PostgreSQL", "REST APIs", "Linux"],
    "Core Competencies": ["Problem Solving", "Critical Thinking", "Communication", "Collaboration", "Adaptability"]
  }

  const skillProficiency = [
    { skill: 'Python', level: 90 },
    { skill: 'JavaScript', level: 85 },
    { skill: 'TypeScript', level: 80 },
    { skill: 'React', level: 88 },
    { skill: 'Node.js', level: 82 },
    { skill: 'Git', level: 95 },
  ]

  const colors = ['#4f46e5', '#7c3aed', '#db2777', '#e11d48', '#f59e0b', '#10b981']

  const chartConfig = {
    level: {
      label: "Proficiency",
      color: "#4f46e5",
    },
  }

  return (
    <section id="skills" ref={ref} className="py-24 px-6 lg:px-8 bg-linear-to-br from-white to-blue-50/30">
      <motion.div 
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="mb-12 text-center">
          <span className="text-4xl md:text-5xl font-bold bg-linear-to-r from-indigo-900 via-purple-800 to-rose-700 bg-clip-text text-transparent">
            What I Work With
          </span>
        </h2>
        
        <motion.div 
          className="mb-16 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="mb-6 text-xl font-bold text-center text-gray-800">
            Skill Proficiency
          </h3>
          <div className="h-75 w-full">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={skillProficiency}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="skill" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="level" radius={[8, 8, 0, 0]}>
                    {skillProficiency.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </motion.div>

        <div className="space-y-10">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="mb-4 text-base font-bold tracking-wider uppercase text-transparent bg-linear-to-r from-indigo-600 to-rose-600 bg-clip-text">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-base text-gray-700 border border-gray-100 hover:border-rose-200 hover:bg-linear-to-r hover:from-rose-50 hover:to-amber-50"
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
  )
}