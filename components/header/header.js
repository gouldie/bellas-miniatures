import React, { Component } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import './header.css'

const routes = {
  about: '/about',
  contact: '/contact',
  projects: '/projects'
}

const HeaderLink = ({ name, selected }) => (
  <Link href={routes[name]}><p className={selected ? 'selected' : ''}>{name}</p></Link>
)

const Header = () => {
  const router = useRouter()

  return (
    <header>
      <div className='logo'>
        <Link href='/'><span>LOGO</span></Link>
      </div>
      <div className='header-menu'>
        {Object.keys(routes).map((r, i) =>
          <HeaderLink key={i} name={r} selected={router.pathname === routes[r]} />
        )}
      </div>
    </header>
  )
}

export default Header
