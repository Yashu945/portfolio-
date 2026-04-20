const experiences = [
  {
    company: 'Covera Health',
    role: 'Data Engineer',
    period: 'Present',
    description:
      'Building and maintaining data pipelines to support clinical analytics and healthcare quality improvement initiatives.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 border-t border-slate-800">
      <h2 className="text-2xl font-bold text-white mb-8">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-purple-800 transition-colors"
          >
            <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
              <div>
                <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                <p className="text-purple-400 text-sm">{exp.company}</p>
              </div>
              <span className="text-slate-500 text-sm">{exp.period}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mt-3">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
