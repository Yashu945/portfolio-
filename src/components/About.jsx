import { motion } from 'framer-motion'

const highlights = [
  { icon: '🏥', title: 'Healthcare Data', desc: 'HIPAA-compliant pipelines, HL7 & FHIR integration for clinical analytics at Tenet Healthcare' },
  { icon: '☁️', title: 'Azure Expert', desc: 'End-to-end solutions with ADF, Databricks, Synapse, Data Lake Gen2, and Microsoft Fabric' },
  { icon: '⚡', title: 'Scale & Performance', desc: '1TB+ daily processing, 25%+ pipeline optimization, petabyte-scale Delta Lake workloads' },
  { icon: '🔗', title: 'Integration', desc: 'Event-driven architectures with Kafka, Azure Event Hubs, Service Bus, and MuleSoft' },
]

export default function About() {
  return (
    <section id="about" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-12"
      >
        <p className="text-indigo-400 text-sm tracking-widest uppercase mb-3 flex items-center gap-3">
          <span className="w-8 h-px bg-indigo-400" />
          About Me
        </p>
        <h2 className="text-4xl font-bold text-white" style={{ fontFamily: 'Space Grotesk' }}>
          Data Engineer with a mission
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-4 text-slate-400 leading-relaxed"
        >
          <p>
            I'm a <span className="text-white font-medium">Data Engineer with 4+ years of experience</span> building
            scalable data pipelines and integration frameworks in cloud environments. Based in The Colony, Texas.
          </p>
          <p>
            My expertise spans the full Azure data ecosystem — from ingestion with ADF and Event Hubs,
            through transformation in Databricks, to serving in Synapse and Power BI. I've worked across
            <span className="text-white font-medium"> healthcare and financial services</span>, handling petabyte-scale datasets.
          </p>
          <p>
            At Tenet Healthcare, I build real-time ETL pipelines for patient records and clinical data. At PNC,
            I optimized financial pipelines by 25% and implemented Slowly Changing Dimensions in Delta Lake.
          </p>

          <div className="flex flex-col gap-2 pt-4">
            <a href="mailto:chiluveruyashwanth945@gmail.com" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors flex items-center gap-2">
              <span>✉</span> chiluveruyashwanth945@gmail.com
            </a>
            <span className="text-slate-500 text-sm flex items-center gap-2">
              <span>📍</span> The Colony, Texas, United States
            </span>
          </div>
        </motion.div>

        <div className="grid gap-3">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ x: 6 }}
              className="glass rounded-xl p-4 flex gap-4 items-start hover:border-indigo-500/30 transition-all cursor-default"
            >
              <span className="text-xl mt-0.5">{h.icon}</span>
              <div>
                <h3 className="text-white font-semibold text-sm mb-1">{h.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{h.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
