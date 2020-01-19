import React, { Component } from 'react'
import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'

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
    const { pathname, routes } = this.props
    const { menuOpen } = this.state

    return (
      <Menu
        right
        isOpen={menuOpen}
        onStateChange={state => this.handleStateChange(state)}
      >
        {Object.keys(routes).map((r, i) =>
          <HeaderLink key={i} name={r} pathname={pathname} closeMenu={this.closeMenu} routes={routes} />
        )}
      </Menu>
    )
  }
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

const Header = ({ pathname, routes }) => {
  return (
    <header id='header'>
      <div className='logo'>
        <Link href='/'><img src='/logo.png' alt='alt text' /></Link>
      </div>
      <div className='burger-menu'>
        <BurgerMenu pathname={pathname} routes={routes} />
      </div>

    </header>
  )
}

export default Header
