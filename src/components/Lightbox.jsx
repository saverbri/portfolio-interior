import { useEffect } from 'react'

export default function Lightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return
    const handleKey = (event) => { if (event.key === 'Escape') onClose() }
    const oldOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = oldOverflow
      window.removeEventListener('keydown', handleKey)
    }
  }, [image, onClose])

  if (!image) return null

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={image.alt}>
      <button className="lightbox__backdrop" type="button" onClick={onClose} aria-label="Закрыть просмотр" />
      <button className="lightbox__close" type="button" onClick={onClose} aria-label="Закрыть изображение">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" /></svg>
      </button>
      <figure className="lightbox__figure">
        <img src={image.src} alt={image.alt} />
        {image.label && <figcaption>{image.label}</figcaption>}
      </figure>
    </div>
  )
}
