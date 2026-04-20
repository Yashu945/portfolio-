export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0f]/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-white font-semibold text-lg">YSC</span>
        <div className="flex gap-6 text-sm text-slate-400">
          {['About', 'Experience', 'Skills', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
