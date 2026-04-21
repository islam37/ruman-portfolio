import { useScrollProgress } from '../hooks/useScrollProgress'
import { useTheme           } from '../context/ThemeContext'

export default function ProgressBar() {
  const progress = useScrollProgress()
  const { dark } = useTheme()

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-transparent">
      <div
        className={`h-full transition-all duration-75 ${
          dark
            ? 'bg-gradient-to-r from-amber-400 via-orange-400 to-red-400'
            : 'bg-gradient-to-r from-brand-500 via-emerald-400 to-teal-300'
        }`}
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
