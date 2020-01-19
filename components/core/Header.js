import React from 'react'
import Link from 'next/link'

const routes = {
  home: '/',
  blog: '/blog',
  projects: '/projects',
  contact: '/contact'
}

const HeaderLink = ({ name, pathname, closeMenu }) => (
  <Link href={routes[name]}>
    <p
      className={pathname === routes[name] ? 'selected' : ''}
      onClick={closeMenu}
    >
      {name}
    </p>
  </Link>
)

const Header = ({ pathname }) => {
  return (
    <div id='header-alt'>
      <header style={{ flexDirection: 'row', width: '800px', margin: '0 auto' }}>
        <div className='logo'>
          {/* <h1>Miniature Modelling</h1> */}
          <img src='/logo.png' alt='alt text' style={{ width: '100%' }} />
        </div>
        <div className='header-menu'>
          {Object.keys(routes).map((r, i) =>
            <HeaderLink key={i} name={r} pathname={pathname} />
          )}
        </div>

      </header>
      <hr style={{ width: '800px', marginTop: '-30px', marginBottom: '30px' }} />
    </div>
  )
}

export default Header
