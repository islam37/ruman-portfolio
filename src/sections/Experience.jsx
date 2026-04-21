import { motion }                         from 'framer-motion'
import { HiBriefcase, HiLocationMarker,
         HiCheckCircle, HiBadgeCheck     } from 'react-icons/hi'
import { useTheme  } from '../context/ThemeContext'
import { useReveal } from '../hooks/useReveal'
import SectionTitle  from '../components/SectionTitle'
import Card          from '../components/Card'
import { experience } from '../data/portfolio'

export default function Experience() {
  const { dark }       = useTheme()
  const [ref, visible] = useReveal()

  return (
    <section
      id="experience"
      className={`section-padding ${
        dark ? 'bg-slate-950' : 'bg-gradient-to-br from-slate-50 to-teal-50/20'
      }`}
    >
      <div className="container-max" ref={ref}>
        <SectionTitle
          label="Career"
          title="Work Experience"
          subtitle="Building the next generation of learners with passion and dedication."
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30 }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: 'easeOut' }}
            >
              <Card padding="xl">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row gap-5 items-start mb-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                    dark ? 'bg-amber-400/10' : 'bg-brand-50'
                  }`}>
                    <HiBriefcase size={28} className={dark ? 'text-amber-400' : 'text-brand-600'} />
                  </div>

                  {/* Meta */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className={`font-display font-bold text-xl ${dark ? 'text-white' : 'text-slate-800'}`}>
                          {exp.role}
                        </h3>
                        <p className={`font-semibold mt-0.5 ${dark ? 'text-amber-400' : 'text-brand-600'}`}>
                          {exp.org}
                        </p>
                      </div>
                      <span className={`text-xs px-3 py-1.5 rounded-full font-bold flex items-center gap-1.5 ${
                        dark
                          ? 'bg-emerald-500/12 text-emerald-400 border border-emerald-500/20'
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      }`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {exp.status}
                      </span>
                    </div>

                    {/* Location & ID */}
                    <div className={`flex flex-wrap gap-4 mt-2 text-xs ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
                      <span className="flex items-center gap-1">
                        <HiLocationMarker size={12} />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiBadgeCheck size={12} />
                        {exp.empId}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className={`h-px mb-6 ${dark ? 'bg-white/6' : 'bg-slate-100'}`} />

                {/* Responsibilities */}
                <div>
                  <p className={`text-xs font-bold tracking-widest uppercase mb-4 ${
                    dark ? 'text-slate-500' : 'text-slate-400'
                  }`}>
                    Key Responsibilities
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {exp.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : -12 }}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                        className="flex items-start gap-2.5"
                      >
                        <HiCheckCircle
                          size={16}
                          className={`mt-0.5 flex-shrink-0 ${dark ? 'text-amber-400' : 'text-brand-500'}`}
                        />
                        <span className={`text-sm leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                          {point}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
