import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const roles = ['Azure Data Engineer', 'Healthcare Data Specialist', 'Cloud Data Architect', 'Pipeline Builder']

function Typewriter({ words }) {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[idx]
    let t
    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIdx((i) => (i + 1) % words.length)
    } else {
      t = setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? 45 : 90
      )
    }
    return () => clearTimeout(t)
  }, [text, deleting, idx, words])

  return (
    <span className="gradient-text">
      {text}
      <span className="opacity-70 animate-pulse">|</span>
    </span>
  )
}

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '3', label: 'Companies' },
  { value: '1TB+', label: 'Daily Processing' },
  { value: '100K+', label: 'Patients Served' },
]

export default function Hero() {
  return (
    <section className="min-h-screen grid-bg flex flex-col justify-center pt-24 pb-16 relative overflow-hidden">
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-cyan-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-indigo-400 text-sm font-medium mb-5 tracking-widest uppercase flex items-center gap-3"
        >
          <span className="w-8 h-px bg-indigo-400 inline-block" />
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold text-white mb-4 leading-none tracking-tight"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Yashwanth Sai
          <br />
          <span className="gradient-text">Chiluveru</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-xl md:text-2xl text-slate-400 mb-6 h-9"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          <Typewriter words={roles} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-slate-500 max-w-lg mb-10 leading-relaxed"
        >
          4+ years building scalable data pipelines and integration frameworks in Azure.
          Specializing in healthcare data, Databricks, and petabyte-scale processing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex gap-4 flex-wrap mb-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-colors"
          >
            Get in touch
          </motion.a>
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3.5 glass border border-slate-700 hover:border-indigo-500/50 text-slate-300 hover:text-white rounded-xl font-medium transition-all"
          >
            View experience →
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-xl">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              whileHover={{ y: -3 }}
              className="glass rounded-xl p-4 text-center hover:border-indigo-500/30 transition-all"
            >
              <div className="text-2xl font-bold gradient-text" style={{ fontFamily: 'Space Grotesk' }}>{stat.value}</div>
              <div className="text-slate-500 text-xs mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
