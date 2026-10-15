import { logo } from '../data/content.js'
import Reveal from '../components/Reveal.jsx'

export default function Brand() {
  return (
    <section className="section section--dark brand" id="brand">
      <div className="section__head">
        <span className="section__num">05</span>
        <div><p className="eyebrow">Визуальная идентичность</p><h2 className="section__title">Логотип</h2></div>
      </div>
      <Reveal className="brand__panel">
        <span className="brand__index">SIGNATURE / 01</span>
        <img className="brand__logo" src={logo.src} alt={logo.alt} loading="lazy" />
        <p className="brand__caption">Знак, который объединяет имя и профессию</p>
      </Reveal>
      <Reveal><p className="brand__note">Фирменная графика задаёт тон всей визуальной системе: сдержанной, тактильной и личной.</p></Reveal>
    </section>
  )
}
