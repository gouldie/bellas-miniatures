import Link from 'next/link'

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
  <div id='header-alt'>
    <header style={{ flexDirection: 'row', width: '800px', margin: '0 auto' }}>
      <div className='logo'>
        {/* <h1>Miniature Modelling</h1> */}
        <img src='/logo.png' alt='alt text' style={{ width: '100%' }} />
      </div>
      <div className='header-menu' data-testid='list'>
        {Object.keys(routes).map((r, i) =>
          <HeaderLink key={i} name={r} pathname={pathname} routes={routes} />
        )}
      </div>

    </header>
    <hr style={{ width: '800px', marginTop: '-30px', marginBottom: '30px' }} />
  </div>
)

export default Header
