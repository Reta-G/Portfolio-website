import { Mic2 } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function PodcastsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const podcasts = [
    {
      name: "Syntax",
      hosts: "Wes Bos & Scott Tolinski",
      focus: "Web development trends and best practices",
      takeaway: "Staying current with the rapidly evolving web ecosystem while learning from developers who ship real products.",
      videoId: "dQw4w9WgXcQ" // Replace with actual video ID
    },
    {
      name: "The Changelog",
      hosts: "Adam Stacoviak & Jerod Santo",
      focus: "Open source and software development",
      takeaway: "Understanding the stories behind the tools I use daily and the importance of community-driven development.",
      videoId: "dQw4w9WgXcQ" // Replace with actual video ID
    },
    {
      name: "99% Invisible",
      hosts: "Roman Mars",
      focus: "Design and architecture",
      takeaway: "The best design is invisible—a principle that applies as much to software as it does to buildings.",
      videoId: "dQw4w9WgXcQ" // Replace with actual video ID
    },
    {
      name: "How I Built This",
      hosts: "Guy Raz",
      focus: "Entrepreneurship and innovation",
      takeaway: "Building products is about solving problems for real people, not just writing clever code.",
      videoId: "dQw4w9WgXcQ" // Replace with actual video ID
    }
  ];

  return (
    <section ref={ref} className="py-24 px-6 lg:px-8 bg-slate-50">
      <motion.div 
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Mic2 className="w-8 h-8 text-[#E07A5F]" />
          <h2 className="text-center text-4xl font-semibold text-slate-900">
            Podcasts I Follow
          </h2>
        </div>
        
        <p className="text-center mb-12 max-w-2xl mx-auto text-lg text-slate-600">
          I learn best by listening to people who've solved the problems I'm trying to understand.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {podcasts.map((podcast, index) => (
            <motion.div
              key={podcast.name}
              className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-slate-200 hover:border-[#E07A5F]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="relative aspect-video bg-gray-100">
                <iframe
                  src={`https://www.youtube.com/embed/${podcast.videoId}`}
                  title={`${podcast.name} podcast episode`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-none"
                />
              </div>

              {/* Podcast Details */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {podcast.name}
                  </h3>
                </div>
                <p className="mb-2 text-sm text-slate-600">
                  {podcast.hosts}
                </p>
                <p className="mb-3 text-sm text-[#E07A5F] font-medium">
                  {podcast.focus}
                </p>
                <p className="text-sm text-slate-900 leading-relaxed">
                  {podcast.takeaway}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}