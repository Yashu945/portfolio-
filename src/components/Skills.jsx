const skills = [
  'Python', 'SQL', 'Apache Spark', 'dbt', 'Airflow',
  'AWS', 'Snowflake', 'PostgreSQL', 'Docker', 'Git',
  'Kafka', 'ETL/ELT', 'Data Modeling', 'Pandas',
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 border-t border-slate-800">
      <h2 className="text-2xl font-bold text-white mb-8">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 text-sm hover:border-purple-600 hover:text-purple-300 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
