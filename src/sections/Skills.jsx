import { motion }       from 'framer-motion'
import {
  HiChat, HiLightningBolt, HiUserGroup,
  HiClock, HiSpeakerphone, HiLightBulb,
} from 'react-icons/hi'
import { useTheme  } from '../context/ThemeContext'
import { useReveal } from '../hooks/useReveal'
import SectionTitle  from '../components/SectionTitle'
import Card          from '../components/Card'
import { skills }    from '../data/portfolio'

/* Map skill name → icon */
const skillIcons = {
  'Communication':    HiChat,
  'Leadership':       HiLightningBolt,
  'Teamwork':         HiUserGroup,
  'Time Management':  HiClock,
  'Public Relations': HiSpeakerphone,
  'Critical Thinking':HiLightBulb,
}

/* Tier label based on percentage */
function getTier(pct) {
  if (pct >= 90) return 'Expert'
  if (pct >= 80) return 'Advanced'
  if (pct >= 70) return 'Intermediate'
  return 'Beginner'
}

export default function Skills() {
  const { dark }       = useTheme()
  const [ref, visible] = useReveal()

  return (
    <section
      id="skills"
      className={`section-padding ${
        dark ? 'bg-slate-950' : 'bg-gradient-to-br from-slate-50 to-teal-50/20'
      }`}
    >
      <div className="container-max" ref={ref}>
        <SectionTitle
          label="Expertise"
          title="Core Skills"
          subtitle="A blend of interpersonal, cognitive, and leadership capabilities."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, idx) => {
            const Icon = skillIcons[skill.name] ?? HiLightBulb
            const tier = getTier(skill.pct)

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 24 }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: 'easeOut' }}
              >
                <Card padding="lg" className="h-full">
                  {/* Top row */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`p-2.5 rounded-xl flex-shrink-0 ${
                      dark ? 'bg-amber-400/10' : 'bg-brand-50'
                    }`}>
                      <Icon size={20} className={dark ? 'text-amber-400' : 'text-brand-600'} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`font-display font-semibold text-sm ${
                          dark ? 'text-white' : 'text-slate-800'
                        }`}>
                          {skill.name}
                        </span>
                        <span className={`text-xs font-bold tabular-nums ${
                          dark ? 'text-amber-400' : 'text-brand-600'
                        }`}>
                          {skill.pct}%
                        </span>
                      </div>
                      <span className={`text-xs mt-0.5 block ${dark ? 'text-slate-600' : 'text-slate-400'}`}>
                        {tier}
                      </span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className={`h-2.5 rounded-full overflow-hidden ${
                    dark ? 'bg-white/8' : 'bg-slate-100'
                  }`}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: visible ? `${skill.pct}%` : 0 }}
                      transition={{ duration: 1.1, delay: 0.2 + idx * 0.1, ease: 'easeOut' }}
                      className={`h-full rounded-full ${
                        dark
                          ? 'bg-gradient-to-r from-amber-400 to-orange-500'
                          : 'bg-gradient-to-r from-brand-400 to-emerald-500'
                      }`}
                    />
                  </div>

                  {/* Dots visual */}
                  <div className="flex gap-1 mt-3">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div
                        key={i}
                        className={`flex-1 h-1 rounded-full transition-all duration-300 ${
                          i < Math.round(skill.pct / 10)
                            ? dark ? 'bg-amber-400/70' : 'bg-brand-400/70'
                            : dark ? 'bg-white/8'       : 'bg-slate-100'
                        }`}
                      />
                    ))}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Summary badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {['Educator', 'Communicator', 'Problem Solver', 'Team Player', 'Mentor', 'Leader'].map((tag) => (
            <span
              key={tag}
              className={`text-xs font-semibold px-4 py-2 rounded-full border transition-colors ${
                dark
                  ? 'border-white/10 text-slate-400 bg-white/4 hover:border-amber-400/30 hover:text-amber-400'
                  : 'border-slate-200 text-slate-500 bg-white hover:border-brand-300 hover:text-brand-600'
              }`}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
