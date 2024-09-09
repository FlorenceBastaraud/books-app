import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper wrapper">
        <span className="header__wrapper--logo">
          <Link to="/">LB</Link>
        </span>

        <nav className="header__wrapper--nav">
          <ul className="menu">
            <li className="menu__item">
              <Link className="menu__item--link" to="/genesis">
                Genesis
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__item--link" to="/ressources">
                Ressourses
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
