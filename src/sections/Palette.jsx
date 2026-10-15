import { useState } from 'react'
import { palette } from '../data/content.js'
import Reveal from '../components/Reveal.jsx'

export default function Palette() {
  const [copied, setCopied] = useState('')

  const copy = async (hex) => {
    try {
      await navigator.clipboard.writeText(hex)
      setCopied(hex)
      window.setTimeout(() => setCopied((current) => current === hex ? '' : current), 1600)
    } catch {
      setCopied('')
    }
  }

  return (
    <section className="section section--light palette" id="palette">
      <div className="section__head">
        <span className="section__num">04</span>
        <div><p className="eyebrow eyebrow--dark">Тон и фактура</p><h2 className="section__title">Цветовая гамма</h2></div>
      </div>

      <Reveal><p className="palette__intro">Спокойная основа, природные полутона и выразительные материалы. Цвет не спорит с пространством — он помогает ему звучать.</p></Reveal>

      <div className="palette__grid">
        {palette.colors.map((color, index) => (
          <Reveal key={color.hex} delay={index * 65} className="palette__item">
            <button className="palette__swatch" type="button" onClick={() => copy(color.hex)} aria-label={`Скопировать цвет ${color.name}, ${color.hex}`} title={`Нажмите, чтобы скопировать ${color.hex}`} style={{ '--swatch': color.solid }}>
              <img src={color.texture} alt={color.alt} loading="lazy" />
              <span className="palette__swatch-color" />
              <span className="palette__copy">{copied === color.hex ? 'Скопировано ✓' : 'Скопировать +'}</span>
            </button>
            <div className="palette__meta"><span className="palette__name">{color.name}</span><span className="palette__hex">{color.hex}</span></div>
          </Reveal>
        ))}
      </div>

      <Reveal><p className="palette__note">{palette.note}</p></Reveal>
    </section>
  )
}
