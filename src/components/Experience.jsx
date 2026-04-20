import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const experiences = [
  {
    company: 'Tenet Healthcare',
    role: 'Azure Data Engineer',
    period: 'June 2023 – Present',
    location: 'Dallas, TX',
    type: 'Healthcare',
    dotColor: 'bg-indigo-500',
    accentColor: '#818cf8',
    badgeClass: 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20',
    borderClass: 'border-indigo-500/40',
    bullets: [
      'Designed greenfield cloud data solutions using ADF, Azure Databricks, Azure Functions, and Power BI',
      'Developed real-time ETL pipelines for healthcare data ingestion processing patient records with Spark/Python',
      'Built metadata-driven architecture loading data from diverse sources into Azure Data Lake Gen2',
      'Managed end-to-end pipelines processing over 1TB of healthcare data daily for clinical decision-making',
      'Implemented bronze/silver/gold Delta Lake architecture for structured data processing',
      'Created dynamic ADF pipelines with parameters, triggered by file availability, schedule, and Logic Apps',
      'Developed custom email notifications using Logic Apps and standard alerts via Azure Monitor',
    ],
  },
  {
    company: 'PNC Financial Services',
    role: 'Azure Data Engineer',
    period: 'Feb 2022 – May 2023',
    location: 'Pittsburgh, PA',
    type: 'Finance',
    dotColor: 'bg-cyan-500',
    accentColor: '#22d3ee',
    badgeClass: 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20',
    borderClass: 'border-cyan-500/40',
    bullets: [
      'Built data warehouse on Azure processing 500GB+ of financial data daily using ADF, Databricks, and SQL Serverless',
      'Optimized pipeline performance by 25% via partitioning, Z-Order clustering, salting, and bucketing in Databricks',
      'Implemented Slowly Changing Dimensions (Type-2) in Delta Lake using PySpark for historical data management',
      'Processed and flattened complex JSON data using Mapping Data Flows and PySpark transformations',
      'Developed dynamic pipelines using Watermark Tables, parameters, and variables for multi-table ingestion',
      'Created SSIS packages extracting financial data from Access, Excel, and flat files into SQL Server',
      'Monitored nightly jobs, investigated failures, and ensured successful reruns before next schedule',
    ],
  },
  {
    company: 'Mindtree',
    role: 'Data Engineer',
    period: 'May 2020 – Dec 2021',
    location: 'Hyderabad, India',
    type: 'IT Services',
    dotColor: 'bg-violet-500',
    accentColor: '#a78bfa',
    badgeClass: 'bg-violet-500/10 text-violet-300 border border-violet-500/20',
    borderClass: 'border-violet-500/40',
    bullets: [
      'Developed ETL operations in Azure Databricks connecting to relational databases via JDBC connectors',
      'Built automated ingestion from web services to Azure Data Lake Gen2 using ADF pipelines',
      'Wrote Python scripts for file validations in Databricks and automated processing workflows',
      'Migrated on-premises data (Oracle/SQL Server/DB2/MongoDB) to Azure Data Lake using ADF',
      'Created complex SQL queries with CTEs and stored procedures to support Power BI reports',
      'Deployed ADF pipelines via JSON scripts with Linked Services, Datasets, and Pipeline configurations',
    ],
  },
]

export default function Experience() {
  const [expanded, setExpanded] = useState(0)

  return (
    <section id="experience" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-12"
      >
        <p className="text-indigo-400 text-sm tracking-widest uppercase mb-3 flex items-center gap-3">
          <span className="w-8 h-px bg-indigo-400" />
          Experience
        </p>
        <h2 className="text-4xl font-bold text-white" style={{ fontFamily: 'Space Grotesk' }}>
          Where I've worked
        </h2>
      </motion.div>

      <div className="relative">
        <div className="absolute left-[7px] top-6 bottom-6 w-px bg-gradient-to-b from-indigo-500/60 via-cyan-500/40 to-violet-500/20 hidden md:block" />

        <div className="space-y-5">
          {experiences.map((exp, i) => {
            const isOpen = expanded === i
            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="md:pl-10 relative"
              >
                <div className={`absolute left-0 top-7 w-[15px] h-[15px] rounded-full ${exp.dotColor} ring-4 ring-[#030712] hidden md:block`} />

                <div
                  onClick={() => setExpanded(isOpen ? -1 : i)}
                  className={`glass rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                    isOpen ? `border ${exp.borderClass} shadow-lg` : 'hover:border-slate-600/50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                        <h3 className="text-white font-bold text-lg" style={{ fontFamily: 'Space Grotesk' }}>
                          {exp.role}
                        </h3>
                        <span className={`text-xs px-2.5 py-0.5 rounded-full ${exp.badgeClass}`}>{exp.type}</span>
                      </div>
                      <p className="text-sm font-medium" style={{ color: exp.accentColor }}>
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-slate-500 text-sm">{exp.period}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-slate-500 text-xs"
                      >
                        ▼
                      </motion.span>
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden mt-4 space-y-2"
                      >
                        {exp.bullets.map((b, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: j * 0.04 }}
                            className="text-slate-400 text-sm leading-relaxed flex gap-2.5"
                          >
                            <span className="text-indigo-400 mt-1.5 flex-shrink-0 text-xs">▸</span>
                            {b}
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
