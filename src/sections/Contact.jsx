import { contacts, author, businessCard } from '../data/content.js'
import Reveal from '../components/Reveal.jsx'

function makeContactLinks() {
  const list = []
  if (contacts.phone?.trim()) list.push({ label: 'Телефон', value: contacts.phone.trim(), href: `tel:${contacts.phone.replace(/[^+\d]/g, '')}` })
  if (contacts.email?.trim()) list.push({ label: 'Почта', value: contacts.email.trim(), href: `mailto:${contacts.email.trim()}` })
  if (contacts.telegram?.trim()) {
    const raw = contacts.telegram.trim()
    const url = /^https?:\/\//i.test(raw) ? raw : `https://t.me/${raw.replace(/^@/, '')}`
    list.push({ label: 'Telegram', value: raw.startsWith('@') ? raw : `@${raw.replace(/^https?:\/\/t\.me\//i, '')}`, href: url })
  }
  if (contacts.vk?.trim()) {
    const raw = contacts.vk.trim()
    list.push({ label: 'VK', value: raw, href: /^https?:\/\//i.test(raw) ? raw : `https://vk.com/${raw.replace(/^@/, '')}` })
  }
  return list
}

export default function Contact() {
  const links = makeContactLinks()

  return (
    <section className="section section--light contact" id="contact">
      <div className="section__head">
        <span className="section__num">06</span>
        <div><p className="eyebrow eyebrow--dark">Фирменный стиль</p><h2 className="section__title">Визитка и контакты</h2></div>
      </div>

      <div className="contact__grid">
        <div className="contact__text">
          <Reveal><h3 className="contact__heading">{contacts.heading}</h3></Reveal>
          <Reveal delay={90}>
            {links.length > 0 ? (
              <ul className="contact__list">
                {links.map((item) => <li key={item.label}><span>{item.label}</span><a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>{item.value}<b aria-hidden="true">↗</b></a></li>)}
              </ul>
            ) : (
              <div className="contact__empty">
                <span className="contact__empty-mark" aria-hidden="true">↗</span>
                <p>Визитка автора</p>
                <small>{contacts.note}</small>
              </div>
            )}
          </Reveal>
          <Reveal delay={160}><p className="contact__signature">{author.name}<span>{author.role}</span></p></Reveal>
        </div>

        <Reveal className="contact__mockup" delay={120}>
          <figure className="business-card">
            <img className="business-card__image" src={businessCard.src} alt={businessCard.alt} loading="lazy" />
          </figure>
          <p className="contact__mockup-caption">Оригинальная визитка · из презентации</p>
        </Reveal>
      </div>
    </section>
  )
}
