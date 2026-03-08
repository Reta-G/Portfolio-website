import { Mic2 } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function PodcastsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const podcasts = [
    {
      name: "Jack Neel Podcast",
      hosts: "Jack Neel (with Andrew Tate)",
      focus: "Deep conversations on culture, power structures, and personal philosophy",
      takeaway: "A rare, unfiltered look at how controversial figures navigate fame, censorship, and the price of challenging narratives. Andrew Tate opens up about his legal battles, the Miami incident, and why he believes most people are exactly where they belong.",
      videoId: "YjZaLqC9_z8"
    },
    {
      name: "The Changelog",
      hosts: "Adam Stacoviak & Jerod Santo",
      focus: "Open source and software development",
      takeaway: "Understanding the stories behind the tools I use daily and the importance of community-driven development.",
      videoId: "eUpeqKUDhnc"
    },
    {
      name: "Club Shay Shay",
      hosts: "Shannon Sharpe",
      focus: "In-depth conversations with cultural icons and influencers",
      takeaway: "Understanding how the world's biggest content creators think, build, and navigate fame from Twitch records to dealing with Kanye, and from homeless shelters to streaming from space (ambition meets execution).",
      videoId: "JYL0blfer6M"
    },
    {
      name: "Financially Incorrect",
      hosts: "Barack",
      focus: "Ethiopian entrepreneurship and business innovation",
      takeaway: "How Dawit Abraham built Ethiopia's FIRST gaming startup from scratch navigating challenges, funding, and cultural barriers in a market that didn't exist yet. A blueprint for founders building in emerging markets.",
      videoId: "IZd1t5PNN90"
    }
  ]

  return (
    <section ref={ref} className="py-24 px-6 lg:px-8 bg-linear-to-br from-[#F5FBE6] to-white">
      <motion.div 
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Mic2 className="w-8 h-8 text-[#FE7F2D]" />
          <h2 className="text-center">
            <span className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#233D4D] via-[#215E61] to-[#FE7F2D] bg-clip-text text-transparent">
              Podcasts I Follow
            </span>
          </h2>
        </div>
        
        <p className="text-center mb-12 max-w-2xl mx-auto text-lg text-[#215E61] font-light">
          I learn best by listening to people who've solved the problems I'm trying to understand.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {podcasts.map((podcast, index) => (
            <motion.div
              key={podcast.name}
              className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-[#d9e3c0] hover:border-[#FE7F2D] group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative aspect-video bg-linear-to-br from-[#e5f0d1] to-[#d9e3c0]">
                <iframe
                  src={`https://www.youtube.com/embed/${podcast.videoId}`}
                  title={`${podcast.name} podcast episode`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-none"
                />
              </div>
              
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold text-[#233D4D]">
                  {podcast.name}
                </h3>
                <p className="mb-2 text-sm text-[#FE7F2D] font-medium">
                  {podcast.hosts}
                </p>
                <p className="mb-3 text-sm text-[#215E61] font-medium">
                  {podcast.focus}
                </p>
                <p className="text-sm text-[#233D4D] leading-relaxed">
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