import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import './index.css'

export default function App() {
  return (
    <>
      <Cursor />
      <div className="min-h-screen" style={{ background: '#030712' }}>
        <Navbar />
        <main className="max-w-5xl mx-auto px-6">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <footer className="text-center py-8 text-slate-600 text-sm border-t border-slate-800/40 mt-8">
          <span className="gradient-text font-medium">Yashwanth Sai Chiluveru</span>
          <span className="mx-2">·</span>
          Built with React & Framer Motion
        </footer>
      </div>
    </>
  )
}
