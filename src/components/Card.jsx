import { useTheme } from '../context/ThemeContext'

/**
 * Reusable card with glass effect.
 * Supports hover glow, padding variants, and full custom className.
 *
 * @param {ReactNode} children
 * @param {string}    className    - Additional Tailwind classes
 * @param {string}    padding      - 'sm' | 'md' | 'lg' (default 'md')
 * @param {boolean}   hover        - Enable hover lift effect (default true)
 * @param {function}  onClick
 */
export default function Card({
  children,
  className = '',
  padding   = 'md',
  hover     = true,
  onClick,
}) {
  const { dark } = useTheme()

  const padMap = {
    none: '',
    sm:   'p-4',
    md:   'p-6',
    lg:   'p-8',
    xl:   'p-10',
  }

  return (
    <div
      onClick={onClick}
      className={`
        rounded-2xl border backdrop-blur-sm transition-all duration-300
        ${dark
          ? 'bg-white/4 border-white/8 shadow-card-dark'
          : 'bg-white/80 border-slate-200/80 shadow-card'
        }
        ${hover
          ? dark
            ? 'hover:border-amber-400/25 hover:bg-white/7 hover:shadow-glow-amber hover:-translate-y-0.5'
            : 'hover:border-brand-400/40 hover:shadow-glow-teal hover:-translate-y-0.5'
          : ''
        }
        ${padMap[padding] ?? 'p-6'}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
