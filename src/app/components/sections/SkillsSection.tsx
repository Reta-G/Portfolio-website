import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts'

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

  const colors = ['#233D4D', '#215E61', '#2d7a7e', '#FE7F2D', '#fe9856', '#e55f12']

  return (
    <section id="skills" ref={ref} className="py-24 px-6 lg:px-8 bg-linear-to-br from-white to-[#F5FBE6]">
      <motion.div 
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="mb-12 text-center">
          <span className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#233D4D] via-[#215E61] to-[#FE7F2D] bg-clip-text text-transparent">
            What I Work With
          </span>
        </h2>
        
        <motion.div 
          className="mb-16 bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="mb-4 sm:mb-6 text-xl font-bold text-center text-[#233D4D]">
            Skill Proficiency
          </h3>
          
          {/* Fixed chart container with proper dimensions */}
          <div className="w-full overflow-x-auto">
            <div className="min-w-150 md:min-w-0 h-75">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={skillProficiency}
                  margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#d9e3c0" />
                  <XAxis 
                    dataKey="skill" 
                    stroke="#215E61"
                    tick={{ fontSize: 12, fill: '#215E61' }}
                    interval={0}
                    angle={-30}
                    textAnchor="end"
                    height={70}
                  />
                  <YAxis 
                    stroke="#215E61"
                    tick={{ fontSize: 12, fill: '#215E61' }}
                    domain={[0, 100]}
                    ticks={[0, 25, 50, 75, 100]}
                  />
                  <Bar dataKey="level" radius={[8, 8, 0, 0]}>
                    {skillProficiency.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
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
              <h3 className="mb-4 text-base font-bold tracking-wider uppercase text-transparent bg-linear-to-r from-[#215E61] to-[#FE7F2D] bg-clip-text">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-base text-[#233D4D] border border-[#d9e3c0] hover:border-[#FE7F2D] hover:bg-linear-to-r hover:from-[#F5FBE6] hover:to-white"
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