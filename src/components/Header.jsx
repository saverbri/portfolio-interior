import { useEffect, useState } from 'react'
import { logo } from '../data/content.js'

const navItems = [
  { href: '#about', label: 'Обо мне' },
  { href: '#audience', label: 'Подход' },
  { href: '#style', label: 'Стиль' },
  { href: '#palette', label: 'Палитра' },
  { href: '#contact', label: 'Контакты' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const handleScroll = () => setSolid(window.scrollY > 24)
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header ${solid ? 'header--solid' : ''}`}>
      <div className="header__inner">
        <a className="header__logo" href="#top" aria-label="На главную" onClick={closeMenu}>
          <img src={logo.src} alt="" />
          <span className="header__name">POLINA</span>
        </a>

        <nav className="header__nav" aria-label="Основная навигация">
          <ul>
            {navItems.map((item) => <li key={item.href}><a href={item.href}>{item.label}</a></li>)}
          </ul>
        </nav>

        <button
          className={`burger ${menuOpen ? 'burger--open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>
      </div>

      <nav id="mobile-menu" className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`} aria-label="Мобильная навигация" aria-hidden={!menuOpen}>
        <p className="mobile-menu__role">Interior design · Portfolio</p>
        <ul>
          {navItems.map((item, index) => (
            <li key={item.href} style={{ transitionDelay: menuOpen ? `${index * 55}ms` : '0ms' }}>
              <a href={item.href} tabIndex={menuOpen ? 0 : -1} onClick={closeMenu}>{item.label}</a>
            </li>
          ))}
        </ul>
        <span className="mobile-menu__foot">POLINA · DESIGN</span>
      </nav>
    </header>
  )
}
