import { motion } from 'framer-motion'

const categories = [
  {
    name: 'Cloud & Azure',
    icon: '☁️',
    skills: ['Azure Data Factory', 'Azure Databricks', 'Azure Data Lake Gen2', 'Azure Synapse Analytics', 'Azure Functions', 'Azure Logic Apps', 'Microsoft Fabric', 'Azure Event Hubs', 'Azure Service Bus', 'Azure Monitor'],
  },
  {
    name: 'Data Processing',
    icon: '⚙️',
    skills: ['Apache Spark', 'PySpark', 'Delta Lake', 'SSIS', 'ETL/ELT', 'dbt', 'Fivetran', 'Apache Kafka', 'Mapping Data Flows'],
  },
  {
    name: 'Databases',
    icon: '🗄️',
    skills: ['SQL Server', 'Azure SQL', 'Snowflake', 'PostgreSQL', 'Oracle', 'MongoDB', 'DB2'],
  },
  {
    name: 'Languages',
    icon: '💻',
    skills: ['Python', 'SQL', 'PySpark', 'Spark SQL', 'C#', 'Terraform'],
  },
  {
    name: 'BI & Visualization',
    icon: '📊',
    skills: ['Power BI', 'Tableau', 'SSRS', 'QlikView'],
  },
  {
    name: 'Healthcare & Compliance',
    icon: '🏥',
    skills: ['HL7', 'FHIR', 'HIPAA Compliance', 'Clinical Data Integration'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-12"
      >
        <p className="text-indigo-400 text-sm tracking-widest uppercase mb-3 flex items-center gap-3">
          <span className="w-8 h-px bg-indigo-400" />
          Skills
        </p>
        <h2 className="text-4xl font-bold text-white" style={{ fontFamily: 'Space Grotesk' }}>
          Tech Stack
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -5 }}
            className="glass rounded-2xl p-6 hover:border-indigo-500/30 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl">{cat.icon}</span>
              <h3 className="text-white font-semibold text-sm" style={{ fontFamily: 'Space Grotesk' }}>{cat.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, j) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + j * 0.025 }}
                  className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/50 hover:border-indigo-500/50 hover:text-indigo-300 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
