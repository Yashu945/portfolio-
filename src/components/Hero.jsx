export default function Hero() {
  return (
    <section className="py-24 md:py-32">
      <p className="text-purple-400 text-sm font-medium mb-4 tracking-widest uppercase">
        Hello, I'm
      </p>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
        Yashwanth Sai<br />
        <span className="text-purple-400">Chiluveru</span>
      </h1>
      <p className="text-xl text-slate-400 mb-8">
        Data Engineer at <span className="text-white">Covera Health</span>
      </p>
      <p className="text-slate-500 max-w-xl mb-10 leading-relaxed">
        Building data pipelines and infrastructure that power healthcare insights.
        Passionate about turning raw data into reliable, scalable systems.
      </p>
      <div className="flex gap-4 flex-wrap">
        <a
          href="#contact"
          className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-medium transition-colors"
        >
          Get in touch
        </a>
        <a
          href="#experience"
          className="px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white rounded-lg font-medium transition-colors"
        >
          View experience
        </a>
      </div>
    </section>
  )
}
