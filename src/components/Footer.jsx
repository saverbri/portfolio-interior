import { author, logo } from '../data/content.js'

const footerLinks = [
  ['#about', 'Обо мне'],
  ['#audience', 'Подход'],
  ['#style', 'Стиль'],
  ['#palette', 'Палитра'],
  ['#contact', 'Контакты'],
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <a className="footer__logo" href="#top" aria-label="Вернуться наверх">
          <img src={logo.src} alt="" />
        </a>
        <p className="footer__name">{author.name}</p>
        <nav className="footer__nav" aria-label="Навигация в подвале">
          {footerLinks.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <p className="footer__copy">© {new Date().getFullYear()} · {author.role}</p>
        <a className="footer__top" href="#top">Наверх ↑</a>
      </div>
    </footer>
  )
}
