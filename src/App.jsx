import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import './index.css'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="text-center py-8 text-slate-500 text-sm border-t border-slate-800 mt-16">
        © 2026 Yashwanth Sai Chiluveru
      </footer>
    </div>
  )
}
