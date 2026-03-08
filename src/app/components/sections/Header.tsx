import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#F5FBE6]/90 backdrop-blur-xl shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="font-bold text-xl tracking-tight hover:opacity-70 transition-opacity duration-200 bg-linear-to-r from-[#233D4D] to-[#215E61] bg-clip-text text-transparent"
          >
            Reta Getachew
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {['about', 'skills', 'perspective', 'connect'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm relative group transition-colors duration-200 text-[#215E61] hover:text-[#FE7F2D] capitalize"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-[#FE7F2D] to-[#215E61] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#e5f0d1] transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#215E61]" />
            ) : (
              <Menu className="w-6 h-6 text-[#215E61]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden py-4 border-t border-[#d9e3c0]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <nav className="flex flex-col gap-4">
              {['about', 'skills', 'perspective', 'connect'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left px-4 py-2 text-[#215E61] hover:text-[#FE7F2D] hover:bg-[#F5FBE6] rounded-lg transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}