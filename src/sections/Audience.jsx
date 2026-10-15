import { audience } from '../data/content.js'
import Reveal from '../components/Reveal.jsx'

export default function Audience() {
  return (
    <section className="section section--dark audience" id="audience">
      <div className="section__head">
        <span className="section__num">02</span>
        <div><p className="eyebrow">Принципы работы</p><h2 className="section__title">Целевая аудитория</h2></div>
      </div>

      <div className="audience__grid">
        <div className="audience__copy">
          <Reveal><blockquote className="audience__quote">«{audience.quote}»</blockquote></Reveal>
          <Reveal delay={100}><p className="audience__lead">{audience.text}</p></Reveal>
          <Reveal delay={180}>
            <ul className="audience__theses">
              {audience.theses.map((thesis, index) => <li key={thesis}><span>0{index + 1}</span>{thesis}<b aria-hidden="true">↗</b></li>)}
            </ul>
          </Reveal>
        </div>

        <div className="audience__collage">
          {audience.images.map((image, index) => (
            <Reveal key={image.src} delay={index * 100} className={`audience__item audience__item--${index + 1}`}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <span>0{index + 1}</span>
            </Reveal>
          ))}
          <p className="audience__collage-note">Разные истории.<br /><em>Своё пространство.</em></p>
        </div>
      </div>
    </section>
  )
}
