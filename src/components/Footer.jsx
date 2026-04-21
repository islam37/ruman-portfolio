import { motion } from 'framer-motion'
import { FaLinkedinIn, FaGithub, FaTwitter, FaFacebookF } from 'react-icons/fa'
import { useTheme  } from '../context/ThemeContext'
import { personal  } from '../data/portfolio'

const socials = [
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaGithub,     href: '#', label: 'GitHub' },
  { icon: FaTwitter,    href: '#', label: 'Twitter' },
  { icon: FaFacebookF,  href: 'https://web.facebook.com/md.ruman.ahmed.583443', label: 'Facebook' },
]

const footerLinks = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Education',  href: '#education'  },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Contact',    href: '#contact'    },
]

export default function Footer() {
  const { dark } = useTheme()

  return (
    <footer className={`border-t ${dark ? 'bg-slate-950 border-white/6' : 'bg-white border-slate-100'}`}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-12">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">

          {/* Brand */}
          <div>
            <a href="#hero" className="flex items-center gap-2.5 group mb-2">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm
                transition-transform group-hover:scale-110 ${
                dark
                  ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-slate-900'
                  : 'bg-gradient-to-br from-brand-500 to-emerald-500 text-white'
              }`}>
                R
              </div>
              <span className={`font-display font-bold text-lg ${dark ? 'text-white' : 'text-slate-800'}`}>
                Ruman<span className={dark ? 'text-amber-400' : 'text-brand-500'}>.</span>
              </span>
            </a>
            <p className={`text-sm max-w-xs leading-relaxed ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
              Dedicated educator at {personal.org}, Sylhet — shaping brighter futures every day.
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`text-sm transition-colors ${
                  dark
                    ? 'text-slate-500 hover:text-amber-400'
                    : 'text-slate-400 hover:text-brand-600'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-colors ${
                  dark
                    ? 'border-white/10 text-slate-400 hover:text-amber-400 hover:border-amber-400/30 hover:bg-amber-400/8'
                    : 'border-slate-200 text-slate-400 hover:text-brand-600 hover:border-brand-300 hover:bg-brand-50'
                }`}
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className={`h-px w-full ${dark ? 'bg-white/6' : 'bg-slate-100'}`} />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-6 text-center sm:text-left">

          <p className={`text-xs ${dark ? 'text-slate-600' : 'text-slate-400'}`}>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>

          <p className={`text-xs ${dark ? 'text-slate-600' : 'text-slate-400'}`}>
            {personal.employeeId} &nbsp;·&nbsp; {personal.org}
          </p>

          <p className={`text-xs ${dark ? 'text-slate-600' : 'text-slate-400'}`}>
            Developed by{' '}
            <a
              href="https://islamuddin-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-medium underline transition-colors ${
                dark
                  ? 'hover:text-amber-400'
                  : 'hover:text-brand-600'
              }`}
            >
              Islam Uddin
            </a>
          </p>

        </div>

      </div>
    </footer>
  )
}