import { Mic2 } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function PodcastsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const podcasts = [
    {
      name: "Syntax",
      hosts: "Wes Bos & Scott Tolinski",
      focus: "Web development trends and best practices",
      takeaway: "Staying current with the rapidly evolving web ecosystem while learning from developers who ship real products.",
      videoId: "dQw4w9WgXcQ"
    },
    {
      name: "The Changelog",
      hosts: "Adam Stacoviak & Jerod Santo",
      focus: "Open source and software development",
      takeaway: "Understanding the stories behind the tools I use daily and the importance of community-driven development.",
      videoId: "dQw4w9WgXcQ"
    },
    {
      name: "99% Invisible",
      hosts: "Roman Mars",
      focus: "Design and architecture",
      takeaway: "The best design is invisible—a principle that applies as much to software as it does to buildings.",
      videoId: "dQw4w9WgXcQ"
    },
    {
      name: "How I Built This",
      hosts: "Guy Raz",
      focus: "Entrepreneurship and innovation",
      takeaway: "Building products is about solving problems for real people, not just writing clever code.",
      videoId: "dQw4w9WgXcQ"
    }
  ]

  return (
    <section ref={ref} className="py-24 px-6 lg:px-8 bg-linear-to-br from-white to-purple-50/30">
      <motion.div 
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Mic2 className="w-8 h-8 text-rose-500" />
          <h2 className="text-center">
            <span className="text-4xl md:text-5xl font-bold bg-linear-to-r from-indigo-900 via-purple-800 to-rose-700 bg-clip-text text-transparent">
              Podcasts I Follow
            </span>
          </h2>
        </div>
        
        <p className="text-center mb-12 max-w-2xl mx-auto text-lg text-gray-600 font-light">
          I learn best by listening to people who've solved the problems I'm trying to understand.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {podcasts.map((podcast, index) => (
            <motion.div
              key={podcast.name}
              className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 hover:border-rose-200 group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative aspect-video bg-linear-to-br from-gray-100 to-gray-200">
                <iframe
                  src={`https://www.youtube.com/embed/${podcast.videoId}`}
                  title={`${podcast.name} podcast episode`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-none"
                />
              </div>
              
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold text-gray-900">
                  {podcast.name}
                </h3>
                <p className="mb-2 text-sm text-rose-600 font-medium">
                  {podcast.hosts}
                </p>
                <p className="mb-3 text-sm text-indigo-600 font-medium">
                  {podcast.focus}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {podcast.takeaway}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}