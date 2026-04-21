import { motion }                                from 'framer-motion'
import { HiUser, HiStar, HiGlobe, HiLightBulb } from 'react-icons/hi'
import { useTheme   } from '../context/ThemeContext'
import { useReveal  } from '../hooks/useReveal'
import SectionTitle   from '../components/SectionTitle'
import Card           from '../components/Card'
import { bio, objective, languages, personal } from '../data/portfolio'

const highlights = [
  'Passionate about education & youth development',
  'Committed to continuous professional growth',
  'Driven by integrity, honesty, and teamwork',
  'Student-first philosophy in every lesson',
]

export default function About() {
  const { dark } = useTheme()
  const [ref, visible] = useReveal()

  const itemVariants = {
    hidden:  { opacity: 0, y: 28 },
    visible: (i) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
    }),
  }

  return (
    <section
      id="about"
      className={`section-padding ${dark ? 'bg-slate-900' : 'bg-white'}`}
    >
      <div className="container-max" ref={ref}>
        <SectionTitle
          label="Who I Am"
          title="About Me"
          subtitle="A dedicated educator committed to making a difference through knowledge and leadership."
        />

        <div className="grid md:grid-cols-2 gap-6">

          {/* ── Bio Card ── */}
          <motion.div
            custom={0}
            variants={itemVariants}
            initial="hidden"
            animate={visible ? 'visible' : 'hidden'}
          >
            <Card padding="lg" className="h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2.5 rounded-xl ${dark ? 'bg-amber-400/10' : 'bg-brand-50'}`}>
                  <HiUser size={20} className={dark ? 'text-amber-400' : 'text-brand-600'} />
                </div>
                <h3 className={`font-display font-bold text-lg ${dark ? 'text-white' : 'text-slate-800'}`}>
                  Personal Profile
                </h3>
              </div>
              {bio.map((para, i) => (
                <p key={i} className={`text-sm leading-7 mb-3 last:mb-0 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {para}
                </p>
              ))}

              {/* Highlights */}
              <ul className="mt-5 space-y-2">
                {highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2.5 text-sm">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      dark ? 'bg-amber-400' : 'bg-brand-500'
                    }`} />
                    <span className={dark ? 'text-slate-300' : 'text-slate-600'}>{h}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* ── Objective Card ── */}
          <motion.div
            custom={1}
            variants={itemVariants}
            initial="hidden"
            animate={visible ? 'visible' : 'hidden'}
          >
            <Card padding="lg" className="h-full flex flex-col gap-6">

              {/* Objective */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl ${dark ? 'bg-amber-400/10' : 'bg-brand-50'}`}>
                    <HiStar size={20} className={dark ? 'text-amber-400' : 'text-brand-600'} />
                  </div>
                  <h3 className={`font-display font-bold text-lg ${dark ? 'text-white' : 'text-slate-800'}`}>
                    Career Objective
                  </h3>
                </div>
                <p className={`text-sm leading-7 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {objective}
                </p>
              </div>

              {/* Divider */}
              <div className={`h-px ${dark ? 'bg-white/8' : 'bg-slate-100'}`} />

              {/* Fun facts */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl ${dark ? 'bg-amber-400/10' : 'bg-brand-50'}`}>
                    <HiLightBulb size={20} className={dark ? 'text-amber-400' : 'text-brand-600'} />
                  </div>
                  <h3 className={`font-display font-bold text-lg ${dark ? 'text-white' : 'text-slate-800'}`}>
                    Quick Facts
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    ['Role',        personal.role],
                    ['Org',         personal.org],
                    ['Location',    'Sylhet, BD'],
                    ['Languages',   'Bangla, English'],
                  ].map(([label, value]) => (
                    <div key={label} className={`rounded-xl p-3 ${dark ? 'bg-white/4' : 'bg-slate-50'}`}>
                      <div className={`text-xs mb-0.5 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
                        {label}
                      </div>
                      <div className={`text-xs font-semibold ${dark ? 'text-slate-200' : 'text-slate-700'}`}>
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* ── Languages Card (full width) ── */}
          <motion.div
            custom={2}
            variants={itemVariants}
            initial="hidden"
            animate={visible ? 'visible' : 'hidden'}
            className="md:col-span-2"
          >
            <Card padding="lg">
              <div className="flex items-center gap-3 mb-7">
                <div className={`p-2.5 rounded-xl ${dark ? 'bg-amber-400/10' : 'bg-brand-50'}`}>
                  <HiGlobe size={20} className={dark ? 'text-amber-400' : 'text-brand-600'} />
                </div>
                <h3 className={`font-display font-bold text-lg ${dark ? 'text-white' : 'text-slate-800'}`}>
                  Language Proficiency
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-8">
                {languages.map(({ name, level, pct }, i) => (
                  <div key={name}>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className={`font-display font-bold ${dark ? 'text-white' : 'text-slate-800'}`}>
                          {name}
                        </span>
                        <span className={`ml-2 text-xs ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
                          {level}
                        </span>
                      </div>
                      <span className={`text-sm font-bold ${dark ? 'text-amber-400' : 'text-brand-600'}`}>
                        {pct}%
                      </span>
                    </div>
                    <div className={`h-2.5 rounded-full overflow-hidden ${dark ? 'bg-white/8' : 'bg-slate-100'}`}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: visible ? `${pct}%` : 0 }}
                        transition={{ duration: 1.2, delay: 0.4 + i * 0.2, ease: 'easeOut' }}
                        className={`h-full rounded-full ${
                          dark
                            ? 'bg-gradient-to-r from-amber-400 to-orange-500'
                            : 'bg-gradient-to-r from-brand-400 to-emerald-500'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
