import React, { Component } from 'react'
import Link from 'next/link'
import './header.css'

const routes = {
  about: 'about',
  contact: 'contact',
  projects: 'projects'
}

const HeaderLink = () => {

}

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <Link href='/'><span>LOGO</span></Link>
      </div>
      <div className='header-menu'>
        {Object.keys(routes).map((r, i) => <Link key={i} href={routes[r]}><p>{r}</p></Link>)}
      </div>
    </header>
  )
}

export default Header
