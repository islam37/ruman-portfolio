import { motion }                                       from 'framer-motion'
import { HiAcademicCap, HiCheckCircle, HiCalendar,
         HiClock, HiBadgeCheck, HiOfficeBuilding       } from 'react-icons/hi'
import { useTheme  } from '../context/ThemeContext'
import { useReveal } from '../hooks/useReveal'
import SectionTitle  from '../components/SectionTitle'
import Card          from '../components/Card'
import { training }  from '../data/portfolio'

export default function Training() {
  const { dark }       = useTheme()
  const [ref, visible] = useReveal()

  return (
    <section
      id="training"
      className={`section-padding ${dark ? 'bg-slate-900' : 'bg-white'}`}
    >
      <div className="container-max" ref={ref}>
        <SectionTitle
          label="Credentials"
          title="Training & Certifications"
          subtitle="Vocational expertise that complements academic learning."
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {training.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30 }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: 'easeOut' }}
            >
              <Card padding="xl">
                {/* ── Header ── */}
                <div className="flex flex-col sm:flex-row gap-5 items-start mb-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                    dark
                      ? 'bg-gradient-to-br from-amber-400 to-orange-500'
                      : 'bg-gradient-to-br from-brand-500 to-emerald-500'
                  }`}>
                    <HiAcademicCap size={28} className="text-white" />
                  </div>

                  {/* Meta */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className={`font-display font-bold text-xl ${dark ? 'text-white' : 'text-slate-800'}`}>
                        {item.title}
                      </h3>
                      {/* Certified badge */}
                      <span className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full
                        font-bold flex-shrink-0 ${
                        dark
                          ? 'bg-amber-400/10 text-amber-400 border border-amber-400/20'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        <HiBadgeCheck size={13} />
                        Certified
                      </span>
                    </div>

                    {/* Org info */}
                    <div className={`flex flex-wrap gap-4 mt-2 text-xs ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                      <span className="flex items-center gap-1.5">
                        <HiOfficeBuilding size={12} />
                        {item.org}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <HiBadgeCheck size={12} />
                        {item.sponsor}
                      </span>
                    </div>

                    {/* Period & duration chips */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full ${
                        dark ? 'bg-white/5 text-slate-400 border border-white/8' : 'bg-slate-50 text-slate-500 border border-slate-200'
                      }`}>
                        <HiCalendar size={11} />
                        {item.period}
                      </span>
                      <span className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full ${
                        dark ? 'bg-white/5 text-slate-400 border border-white/8' : 'bg-slate-50 text-slate-500 border border-slate-200'
                      }`}>
                        <HiClock size={11} />
                        {item.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className={`h-px mb-6 ${dark ? 'bg-white/6' : 'bg-slate-100'}`} />

                {/* Points */}
                <div>
                  <p className={`text-xs font-bold tracking-widest uppercase mb-4 ${
                    dark ? 'text-slate-500' : 'text-slate-400'
                  }`}>
                    What I Learned
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {item.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : -10 }}
                        transition={{ duration: 0.5, delay: 0.35 + i * 0.09 }}
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

                {/* ILO info banner */}
                <div className={`mt-6 rounded-xl p-4 flex items-start gap-3 ${
                  dark ? 'bg-amber-400/6 border border-amber-400/15' : 'bg-brand-50 border border-brand-100'
                }`}>
                  <HiBadgeCheck size={18} className={`mt-0.5 flex-shrink-0 ${dark ? 'text-amber-400' : 'text-brand-600'}`} />
                  <p className={`text-xs leading-relaxed ${dark ? 'text-amber-300/80' : 'text-brand-700'}`}>
                    This training was conducted under the <strong>ILO Skills-21 Project</strong> — 
                    a global initiative by the International Labour Organization aimed at enhancing 
                    workforce employability in developing nations.
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
