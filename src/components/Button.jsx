import { useTheme } from '../context/ThemeContext'

/**
 * Reusable button / anchor component.
 *
 * @param {'primary'|'outline'|'ghost'} variant
 * @param {'sm'|'md'|'lg'}              size
 * @param {string}                      href      - Renders as <a> if provided
 * @param {string}                      className
 * @param {ReactNode}                   children
 * @param {function}                    onClick
 * @param {boolean}                     disabled
 * @param {string}                      type      - button type attribute
 */
export default function Button({
  children,
  variant   = 'primary',
  size      = 'md',
  href,
  className = '',
  onClick,
  disabled  = false,
  type      = 'button',
  target,
  rel,
}) {
  const { dark } = useTheme()

  const sizeMap = {
    xs: 'px-3 py-1.5 text-xs gap-1.5',
    sm: 'px-4 py-2   text-sm gap-2',
    md: 'px-6 py-3   text-sm gap-2',
    lg: 'px-8 py-4   text-base gap-2.5',
  }

  const variantMap = {
    primary: dark
      ? `bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold
         hover:opacity-90 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30`
      : `bg-gradient-to-r from-brand-500 to-emerald-500 text-white font-bold
         hover:opacity-90 shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30`,

    outline: dark
      ? `border border-white/20 text-white font-semibold hover:bg-white/8 hover:border-amber-400/40`
      : `border border-brand-500 text-brand-700 font-semibold hover:bg-brand-50 hover:border-brand-600`,

    ghost: dark
      ? `text-slate-300 font-medium hover:text-amber-400 hover:bg-white/5`
      : `text-slate-600 font-medium hover:text-brand-600 hover:bg-slate-50`,
  }

  const base = `
    inline-flex items-center justify-center rounded-xl
    transition-all duration-200 whitespace-nowrap
    disabled:opacity-50 disabled:cursor-not-allowed
    ${sizeMap[size] ?? sizeMap.md}
    ${variantMap[variant] ?? variantMap.primary}
    ${className}
  `

  if (href) {
    return (
      <a href={href} className={base} target={target} rel={rel}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {children}
    </button>
  )
}
