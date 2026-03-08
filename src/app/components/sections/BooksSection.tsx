import { BookOpen } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ImageWithFallback } from '../figma/ImageWithF'

export function BooksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const books = [
    {
      title: "The Pragmatic Programmer",
      author: "David Thomas & Andrew Hunt",
      insight: "Taught me to think beyond code syntax and focus on being a thoughtful, adaptable craftsperson.",
      imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop"
    },
    {
      title: "Don't Make Me Think",
      author: "Steve Krug",
      insight: "Transformed how I approach UX—simplicity and intuition aren't optional, they're essential.",
      imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop"
    },
    {
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      insight: "Understanding human cognition helps me design better interfaces and anticipate user behavior.",
      imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop"
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      insight: "Code is communication. Writing for humans first, computers second, changed my development approach.",
      imageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop"
    }
  ]

  return (
    <section ref={ref} className="py-24 px-6 lg:px-8 bg-linear-to-br from-white to-amber-50/30">
      <motion.div 
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <BookOpen className="w-8 h-8 text-rose-500" />
          <h2 className="text-center">
            <span className="text-4xl md:text-5xl font-bold bg-linear-to-r from-indigo-900 via-purple-800 to-rose-700 bg-clip-text text-transparent">
              Books That Shaped My Thinking
            </span>
          </h2>
        </div>
        
        <p className="text-center mb-12 max-w-2xl mx-auto text-lg text-gray-600 font-light">
          Reading beyond code has been essential to my growth—these books changed how I approach problems and people.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {books.map((book, index) => (
            <motion.div
              key={book.title}
              className="flex gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 hover:border-rose-200 group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="shrink-0">
                <ImageWithFallback
                  src={book.imageUrl}
                  alt={`${book.title} book cover`}
                  className="w-24 h-32 object-cover rounded-xl shadow-lg group-hover:shadow-rose-200/50 transition-shadow duration-300"
                />
              </div>
              
              <div className="flex-1">
                <h3 className="mb-1 text-lg font-bold text-gray-900">
                  {book.title}
                </h3>
                <p className="mb-3 text-sm text-rose-600 font-medium">
                  by {book.author}
                </p>
                <p className="text-sm italic text-gray-700 leading-relaxed">
                  "{book.insight}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}