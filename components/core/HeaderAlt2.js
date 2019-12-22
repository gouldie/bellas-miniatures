import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
const img = require('../../public/logo.png')

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
    <div>
      <header id='header-alt' style={{ flexDirection: 'row', width: '800px', margin: '0 auto' }}>
        <div className='logo' style={{ width: '250px' }}>
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
