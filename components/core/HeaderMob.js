import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'

const BurgerMenu = ({ pathname, routes }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.getElementsByClassName('bm-overlay')[0].addEventListener('touchmove', () => {
      this.closeMenu()
    })
  }, [])

  return (
    <Menu
      right
      isOpen={menuOpen}
      onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
    >
      {Object.keys(routes).map((r, i) =>
        <HeaderLink key={i} name={r} pathname={pathname} closeMenu={() => setMenuOpen(false)} routes={routes} />
      )}
    </Menu>
  )
}

const HeaderLink = ({ name, pathname, closeMenu, routes }) => (
  <Link href={routes[name]}>
    <p
      className={pathname === routes[name] ? 'selected' : ''}
      onClick={closeMenu}
    >
      {name}
    </p>
  </Link>
)

const Header = ({ pathname, routes }) => (
  <header id='header'>
    <div className='logo'>
      <Link href='/'><img src='/logo.png' alt='alt text' /></Link>
    </div>
    <div className='burger-menu'>
      <BurgerMenu pathname={pathname} routes={routes} />
    </div>

  </header>
)

export default Header
