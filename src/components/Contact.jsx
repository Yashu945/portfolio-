import { motion } from 'framer-motion'

const links = [
  { label: 'Email', value: 'chiluveruyashwanth945@gmail.com', href: 'mailto:chiluveruyashwanth945@gmail.com', icon: '✉️' },
  { label: 'Phone', value: '940-297-8049', href: 'tel:9402978049', icon: '📱' },
  { label: 'LinkedIn', value: 'linkedin.com/in/yashwanth', href: 'https://linkedin.com', icon: '💼' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-2xl mx-auto"
      >
        <p className="text-indigo-400 text-sm tracking-widest uppercase mb-3">Contact</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk' }}>
          Let's work together
        </h2>
        <p className="text-slate-500 mb-12 leading-relaxed">
          Open to new opportunities in data engineering. Whether it's a full-time role,
          contract work, or just a conversation about data — I'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label === 'LinkedIn' ? '_blank' : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-5 hover:border-indigo-500/40 transition-all group"
            >
              <div className="text-2xl mb-2">{link.icon}</div>
              <div className="text-slate-500 text-xs mb-1">{link.label}</div>
              <div className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors truncate">{link.value}</div>
            </motion.a>
          ))}
        </div>

        <motion.a
          href="mailto:chiluveruyashwanth945@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-10 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-indigo-500/20"
        >
          Say Hello →
        </motion.a>
      </motion.div>
    </section>
  )
}
