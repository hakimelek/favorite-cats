import Link from 'next/link'

export default ({ pathname }) => (
  <header>
    <div>
      <img className="logo" src="http://lh6.ggpht.com/2RfAIyiN7UYfy8ivgz0oq5SQJbeq5v1ctXiV1YPEeSami2T4CDfY6tNTntIonOFMig=w300" />
    </div>
    <nav>
      <Link href='/'><a className={ pathname === '/' && 'is-active' }>Home</a></Link>
      <Link href='/about'><a className={ pathname === '/about' && 'is-active' }>About Us</a></Link>
      <Link href='/favorites'><a className={ pathname === '/favorites' && 'is-active' }>Favourites</a></Link>
    </nav>

    <style jsx>{`
      header {
        position: fixed;
        top: 0;
        width: 220px;
        height: 100%;
        color: #222;
        background-color: #F3F3F3;
        padding: 50px;
      }

      a {
        color: #22BAD9;
      }

      nav a {
        display: block;
      }

      .logo {
        width: 90px;
        height: 90px;
      }

      .is-active {
        color: blue;
      }
  `}</style>
  </header>
)
