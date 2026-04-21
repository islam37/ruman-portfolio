import { motion }                                   from 'framer-motion'
import { HiAcademicCap, HiCalendar, HiOfficeBuilding } from 'react-icons/hi'
import { useTheme  } from '../context/ThemeContext'
import { useReveal } from '../hooks/useReveal'
import SectionTitle  from '../components/SectionTitle'
import Card          from '../components/Card'
import { education } from '../data/portfolio'

const typeColors = {
  'University':       { dark: 'from-amber-400 to-orange-500',    light: 'from-brand-500 to-emerald-500'   },
  'Higher Secondary': { dark: 'from-orange-400 to-red-400',      light: 'from-teal-400 to-brand-500'      },
  'Secondary':        { dark: 'from-yellow-400 to-amber-500',    light: 'from-emerald-400 to-teal-500'    },
}

export default function Education() {
  const { dark }       = useTheme()
  const [ref, visible] = useReveal()

  return (
    <section
      id="education"
      className={`section-padding ${dark ? 'bg-slate-900' : 'bg-white'}`}
    >
      <div className="container-max" ref={ref}>
        <SectionTitle
          label="Academic Background"
          title="Education"
          subtitle="A strong academic foundation rooted in humanities and Islamic studies."
        />

        <div className="max-w-2xl mx-auto timeline-line space-y-6">
          {education.map((item, idx) => {
            const colors = typeColors[item.type] ?? typeColors['Secondary']

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : -30 }}
                transition={{ duration: 0.6, delay: idx * 0.18, ease: 'easeOut' }}
                className="flex gap-5 items-start"
              >
                {/* ── Timeline dot ── */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center
                    bg-gradient-to-br ${dark ? colors.dark : colors.light}`}
                  >
                    <HiAcademicCap size={24} className="text-white" />
                  </div>
                </div>

                {/* ── Card ── */}
                <Card padding="lg" className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className={`font-display font-bold text-base md:text-lg leading-tight ${
                        dark ? 'text-white' : 'text-slate-800'
                      }`}>
                        {item.degree}
                      </h3>
                      <p className={`text-sm font-medium mt-1 ${dark ? 'text-amber-400' : 'text-brand-600'}`}>
                        {item.subject}
                      </p>
                    </div>
                    {/* Year badge */}
                    <span className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full
                      font-semibold flex-shrink-0 ${
                      dark
                        ? 'bg-amber-400/10 text-amber-400 border border-amber-400/20'
                        : 'bg-brand-50 text-brand-700 border border-brand-200'
                    }`}>
                      <HiCalendar size={11} />
                      {item.year}
                    </span>
                  </div>

                  {/* Institution */}
                  <div className={`flex items-center gap-2 text-sm mb-3 ${
                    dark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    <HiOfficeBuilding size={14} className={dark ? 'text-slate-600' : 'text-slate-400'} />
                    {item.inst}
                  </div>

                  {/* Grade */}
                  <div className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full ${
                    dark
                      ? 'bg-white/5 text-slate-300 border border-white/8'
                      : 'bg-slate-50 text-slate-600 border border-slate-200'
                  }`}>
                    {item.grade}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
