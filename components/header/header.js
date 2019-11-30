import React, { Component } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { slide as Menu } from 'react-burger-menu'
import './header.css'

const routes = {
  about: '/about',
  projects: '/projects',
  contact: '/contact'
}

class BurgerMenu extends Component {
  constructor () {
    super()

    this.state = {
      menuOpen: false
    }
  }

  componentDidMount () {
    document.getElementsByClassName('bm-overlay')[0].addEventListener('touchmove', () => {
      this.closeMenu()
    })
  }

  handleStateChange = (state) => {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu = () => {
    this.setState({ menuOpen: false })
  }

  render () {
    const { pathname } = this.props
    const { menuOpen } = this.state

    return (
      <Menu
        right
        isOpen={menuOpen}
        onStateChange={state => this.handleStateChange(state)}
      >
        {Object.keys(routes).map((r, i) =>
          <HeaderLink key={i} name={r} pathname={pathname} closeMenu={this.closeMenu} />
        )}
      </Menu>
    )
  }
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
    <header>
      <div className='logo'>
        <Link href='/'><p>LOGO</p></Link>
      </div>
      <div className='header-menu'>
        {Object.keys(routes).map((r, i) =>
          <HeaderLink key={i} name={r} pathname={pathname} />
        )}

      </div>
      <div className='burger-menu'>
        <BurgerMenu pathname={pathname} />
      </div>

    </header>
  )
}

export default Header
