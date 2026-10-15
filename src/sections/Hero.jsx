import { motion } from 'framer-motion'
import {
  HiPhone,
  HiMail,
  HiLocationMarker,
  HiDownload
} from 'react-icons/hi'

import { useTheme } from '../context/ThemeContext'
import { useTyping } from '../hooks/useTyping'
import Button from '../components/Button'
import { personal, typingRoles } from '../data/portfolio'

/* ── animation variants ── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
})

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, delay },
})

export default function Hero() {
  const { dark } = useTheme()
  const typed = useTyping(typingRoles)

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center overflow-hidden ${
        dark
          ? 'bg-slate-950'
          : 'bg-gradient-to-br from-slate-50 via-teal-50/40 to-emerald-50/20'
      }`}
    >
      {/* Background Glow */}
      <div className={`absolute -top-48 -left-48 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none ${
        dark ? 'bg-amber-500/10' : 'bg-teal-400/15'
      }`} />

      <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-36 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">

        {/* LEFT SIDE */}
        <div className="text-center md:text-left">
          <motion.h1
            {...fadeUp(0.2)}
            className={`text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold mb-5 ${
              dark ? 'text-white' : 'text-slate-900'
            }`}
          >
            MD. Ruman <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Ahmed
            </span>
          </motion.h1>

          <motion.div {...fadeUp(0.3)} className="mb-6">
            <span className={`text-lg sm:text-xl font-semibold ${
              dark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {typed}
            </span>
          </motion.div>

          <motion.p
            {...fadeUp(0.4)}
            className={`mb-8 max-w-lg mx-auto md:mx-0 ${
              dark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            {personal.tagline}
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            {...fadeUp(0.5)}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            <Button href="#contact" size="lg">
              <HiPhone size={17} />
              Get In Touch
            </Button>

            <Button
              as="a"
              href="/public/ruman-cv.pdf"
              download="Md_Ruman_Ahmed_CV.pdf"
              variant="outline"
              size="lg"
            >
              <HiDownload size={17} />
              Download CV
            </Button>
          </motion.div>

          {/* INFO */}
          <motion.div
            {...fadeIn(0.7)}
            className="flex flex-wrap justify-center md:justify-start gap-3 mt-8 text-xs"
          >
            <span className="flex items-center gap-2">
              <HiLocationMarker /> {personal.locationShort}
            </span>
            <span className="flex items-center gap-2">
              <HiMail /> {personal.email}
            </span>
            <span className="flex items-center gap-2">
              <HiPhone /> {personal.phone}
            </span>
          </motion.div>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative group">

            {/* Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>

            {/* IMAGE */}
            <img
              src="https://i.ibb.co.com/FLTDg34d/Whats-App-Image-2026-10-15-at-10-49-48-PM.jpg"
              alt="Profile"
              className="relative 
                w-52 h-64 sm:w-64 sm:h-72 md:w-72 md:h-80 
                object-cover rounded-3xl shadow-2xl 
                border-4 border-white dark:border-slate-800 
                transition duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}