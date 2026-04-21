import { motion } from 'framer-motion'
import {
  HiPhone,
  HiMail,
  HiLocationMarker,
  HiChatAlt2
} from 'react-icons/hi'

import { useTheme } from '../context/ThemeContext'
import { useReveal } from '../hooks/useReveal'
import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'
import { personal } from '../data/portfolio'

const contactItems = [
  {
    icon: HiPhone,
    label: 'WhatsApp',
    value: personal.phone,
    href: `https://wa.me/${personal.phone.replace(/\+/g, '')}?text=Hello%20I%20visited%20your%20portfolio`,
    desc: 'Chat on WhatsApp instantly',
  },
  {
    icon: HiMail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    desc: 'Usually replies within 24h',
  },
  {
    icon: HiLocationMarker,
    label: 'Location',
    value: personal.location,
    href: '#',
    desc: 'Bangladesh Standard Time (BST)',
  },
]

export default function Contact() {
  const { dark } = useTheme()
  const [ref, visible] = useReveal()

  return (
    <section
      id="contact"
      className={`section-padding ${
        dark ? 'bg-slate-950' : 'bg-gradient-to-br from-slate-50 to-teal-50/20'
      }`}
    >
      <div className="container-max" ref={ref}>

        {/* Section Title */}
        <SectionTitle
          label="Reach Out"
          title="Get In Touch"
          subtitle="Have an opportunity, question, or collaboration in mind? I'd love to hear from you."
        />

        {/* Center Layout */}
        <div className="grid md:grid-cols-1 gap-8 items-start max-w-2xl mx-auto">

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : -30 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-6"
          >

            {/* Intro Card */}
            <Card padding="lg">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2.5 rounded-xl ${dark ? 'bg-amber-400/10' : 'bg-brand-50'}`}>
                  <HiChatAlt2 size={20} className={dark ? 'text-amber-400' : 'text-brand-600'} />
                </div>

                <h3 className={`font-display font-bold text-lg ${
                  dark ? 'text-white' : 'text-slate-800'
                }`}>
                  Let's Connect
                </h3>
              </div>

              <p className={`text-sm leading-7 ${
                dark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                I'm open to conversations about teaching opportunities, academic collaborations,
                mentorship programs, and freelance projects. Feel free to contact me anytime.
              </p>
            </Card>

            {/* Contact Cards */}
            {contactItems.map(({ icon: Icon, label, value, href, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 16 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
              >
                <Card padding="md" hover>

                  <a
                    href={href}
                    target={label === 'WhatsApp' ? '_blank' : '_self'}
                    rel="noreferrer"
                    className="flex items-center gap-4 group"
                  >

                    {/* Icon */}
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      dark ? 'bg-amber-400/10' : 'bg-brand-50'
                    }`}>
                      <Icon size={18} className={dark ? 'text-amber-400' : 'text-brand-600'} />
                    </div>

                    {/* Text */}
                    <div>
                      <div className={`text-xs uppercase tracking-widest font-bold mb-0.5 ${
                        dark ? 'text-slate-600' : 'text-slate-400'
                      }`}>
                        {label}
                      </div>

                      <div className={`text-sm font-semibold group-hover:underline underline-offset-2 ${
                        dark ? 'text-slate-200' : 'text-slate-700'
                      }`}>
                        {value}
                      </div>

                      <div className={`text-xs mt-0.5 ${
                        dark ? 'text-slate-600' : 'text-slate-400'
                      }`}>
                        {desc}
                      </div>
                    </div>

                  </a>

                </Card>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </div>
    </section>
  )
}