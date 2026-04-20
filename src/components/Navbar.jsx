import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = ['About', 'Experience', 'Skills', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3 shadow-xl shadow-black/30' : 'py-6'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        <motion.a href="#" whileHover={{ scale: 1.05 }} className="font-bold text-xl tracking-tight gradient-text" style={{ fontFamily: 'Space Grotesk' }}>
          YSC
        </motion.a>

        <div className="hidden md:flex gap-8 text-sm">
          {links.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2 }}
              className="text-slate-400 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-indigo-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        <motion.a
          href="mailto:chiluveruyashwanth945@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-4 py-2 rounded-lg text-sm font-medium border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10 transition-all"
        >
          Hire Me
        </motion.a>
      </div>
    </motion.nav>
  )
}
