import { useCallback, useState } from 'react'
import { styleGallery } from '../data/content.js'
import Reveal from '../components/Reveal.jsx'
import Lightbox from '../components/Lightbox.jsx'

export default function Style() {
  const [active, setActive] = useState(null)
  const closeLightbox = useCallback(() => setActive(null), [])

  return (
    <section className="section section--dark style" id="style">
      <div className="section__head">
        <span className="section__num">03</span>
        <div><p className="eyebrow">Визуальное направление</p><h2 className="section__title">Стиль</h2></div>
      </div>

      <Reveal><p className="style__note">{styleGallery.note}</p></Reveal>

      <div className="style__grid">
        {styleGallery.images.map((img, i) => (
          <Reveal key={img.src} delay={i * 80} className={`style__item style__item--${i + 1}`}>
            <button className="style__btn" type="button" onClick={() => setActive(img)} aria-label={`Открыть изображение: ${img.alt}`}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              <span className="style__item-label">{img.label}</span>
              <span className="style__item-open" aria-hidden="true">↗</span>
            </button>
          </Reveal>
        ))}
      </div>

      <div className="style__bottomline"><span>Ориентиры и вдохновение</span><span>Нажмите на изображение для увеличения</span></div>
      <Lightbox image={active} onClose={closeLightbox} />
    </section>
  )
}
