import { useTheme       } from './context/ThemeContext'
import ProgressBar        from './components/ProgressBar'
import Navbar             from './components/Navbar'
import Footer             from './components/Footer'
import Hero               from './sections/Hero'
import About              from './sections/About'
import Experience         from './sections/Experience'
import Education          from './sections/Education'
import Skills             from './sections/Skills'
import Training           from './sections/Training'
import Contact            from './sections/Contact'

function AppInner() {
  const { dark } = useTheme()

  return (
    <div className={`min-h-screen noise transition-colors duration-300 ${
      dark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'
    }`}>
      {/* Global scroll progress bar */}
      <ProgressBar />

      {/* Navigation */}
      <Navbar />

      {/* Page sections */}
      <main>
        <Hero       />
        <About      />
        <Experience />
        <Education  />
        <Skills     />
        <Training   />
        <Contact    />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default function App() {
  return <AppInner />
}
