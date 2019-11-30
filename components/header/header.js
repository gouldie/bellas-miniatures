import React, { Component } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { elastic as Menu } from 'react-burger-menu'
import './header.css'

const routes = {
  about: '/about',
  projects: '/projects',
  contact: '/contact'
}

const BurgerMenu = ({ pathname }) => (
  <Menu right>
    {Object.keys(routes).map((r, i) =>
      <HeaderLink key={i} name={r} pathname={pathname} />
    )}
  </Menu>

)

const HeaderLink = ({ name, pathname }) => (
  <Link href={routes[name]}><p className={pathname === routes[name] ? 'selected' : ''}>{name}</p></Link>
)

const Header = () => {
  const pathname = useRouter().pathname

  return (
    <header>
      <div className='logo'>
        <Link href='/'><p>LOGO</p></Link>
      </div>
      <div className='header-menu'>
        {/* {Object.keys(routes).map((r, i) =>
          <HeaderLink key={i} name={r} pathname={pathname} /> */}
        {/* )} */}
        <BurgerMenu pathname={pathname} />
      </div>
    </header>
  )
}

export default Header
