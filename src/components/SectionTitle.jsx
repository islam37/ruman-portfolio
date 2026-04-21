import { useReveal } from '../hooks/useReveal'
import { useTheme  } from '../context/ThemeContext'

/**
 * Reusable section title with label pill, heading, and animated underline.
 *
 * @param {string} label   - Small badge text above the title
 * @param {string} title   - Main heading text
 * @param {string} subtitle - Optional subtitle paragraph
 */
export default function SectionTitle({ label, title, subtitle }) {
  const { dark } = useTheme()
  const [ref, visible] = useReveal(0.3)

  return (
    <div
      ref={ref}
      className={`text-center mb-14 md:mb-20 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {/* Badge */}
      <span
        className={`inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.28em] uppercase 
          px-4 py-1.5 rounded-full mb-4 border transition-colors ${
          dark
            ? 'border-amber-400/25 text-amber-400 bg-amber-400/8'
            : 'border-brand-500/25 text-brand-700 bg-brand-50'
        }`}
      >
        <span className={`w-1.5 h-1.5 rounded-full ${dark ? 'bg-amber-400' : 'bg-brand-500'}`} />
        {label}
      </span>

      {/* Heading */}
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight ${
          dark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>

      {/* Animated bar */}
      <div className="mt-4 flex justify-center">
        <div
          className={`h-1 rounded-full transition-all duration-1000 delay-300 ${
            visible ? 'w-16' : 'w-0'
          } ${
            dark
              ? 'bg-gradient-to-r from-amber-400 to-orange-500'
              : 'bg-gradient-to-r from-brand-500 to-emerald-400'
          }`}
        />
      </div>

      {/* Optional subtitle */}
      {subtitle && (
        <p className={`mt-4 max-w-xl mx-auto text-base leading-relaxed ${
          dark ? 'text-slate-400' : 'text-slate-500'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
