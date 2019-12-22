import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const routes = {
  home: '/',
  about: '/about',
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

const Header = () => {
  const pathname = useRouter().pathname

  return (
    <header id='header-alt'>
      <div className='logo'>
        {/* <h1>Miniature Modelling</h1> */}
        <img src='/logo.png' alt='alt text' style={{ width: '400px' }} />
      </div>
      <div className='header-menu'>
        {Object.keys(routes).map((r, i) =>
          <HeaderLink key={i} name={r} pathname={pathname} />
        )}
      </div>

    </header>
  )
}

export default Header
