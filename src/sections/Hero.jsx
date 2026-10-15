import { author } from '../data/content.js'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__grain" aria-hidden="true" />
      <div className="hero__grid">
        <div className="hero__copy">
          <p className="eyebrow"><span className="eyebrow__line" /> Портфолио · 2026</p>
          <h1 className="hero__title" id="hero-title">Дизайнер<br /><em>интерьера</em></h1>
          <p className="hero__name">{author.name}</p>
          <p className="hero__tagline">{author.tagline}</p>
          <div className="hero__actions">
            <a className="button button--cream" href="#style">Исследовать стиль <span aria-hidden="true">↘</span></a>
            <a className="text-link" href="#about">Познакомиться со мной</a>
          </div>
        </div>

        <figure className="hero__figure">
          <img src="/images/hero-interior.webp" alt="Кирпичная стена с настенным светильником, растением и фактурной отделкой из презентации" fetchPriority="high" loading="eager" />
          <figcaption className="hero__figure-caption"><span>01 / 07</span><span>Пространство как продолжение человека</span></figcaption>
          <span className="hero__vertical-label" aria-hidden="true">INTERIOR · FORM · FEELING</span>
        </figure>
      </div>
      <a className="hero__scroll" href="#about" aria-label="Прокрутить к разделу обо мне">
        <span>Прокрутить вниз</span><svg viewBox="0 0 18 30" aria-hidden="true"><path d="M9 1v26M2 20l7 7 7-7" /></svg>
      </a>
    </section>
  )
}
