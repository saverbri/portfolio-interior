import Header from './components/Header.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Audience from './sections/Audience.jsx'
import Style from './sections/Style.jsx'
import Palette from './sections/Palette.jsx'
import Brand from './sections/Brand.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Перейти к содержимому</a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Audience />
        <Style />
        <Palette />
        <Brand />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
