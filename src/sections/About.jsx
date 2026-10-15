import { about, author } from '../data/content.js'
import Reveal from '../components/Reveal.jsx'

export default function About() {
  return (
    <section className="section section--light about" id="about">
      <div className="section__head">
        <span className="section__num">01</span>
        <div><p className="eyebrow eyebrow--dark">Знакомство</p><h2 className="section__title">Обо мне</h2></div>
      </div>

      <div className="about__grid">
        <Reveal className="about__visual-wrap">
          <figure className="about__figure">
            <img src={about.portrait.src} alt={about.portrait.alt} loading="lazy" />
            <div className="about__stamp" aria-hidden="true"><span>П</span><small>Полина<br />Васильева</small></div>
            <figcaption>Полина Васильева · дизайнер интерьера</figcaption>
          </figure>
        </Reveal>

        <div className="about__content">
          <Reveal><p className="about__overline">{author.role}</p><h3 className="about__name">{author.name}</h3></Reveal>
          <Reveal delay={100}><p className="about__lead">{about.intro}</p></Reveal>
          <Reveal delay={180} className="about__text">
            {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </Reveal>
          <Reveal delay={260}>
            <div className="about__education"><span className="about__education-mark">✳</span><p><small>Обучение</small>{author.education}</p></div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
