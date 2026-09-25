// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import './Navbar.scss';

import { Link } from 'react-router-dom';
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/home">
          <img src="/img/logo.png" alt="nice gadjets" />
        </Link>
        <ul
          className={
            showMenu ? 'navbar__menu navbar__menu--active' : 'navbar__menu'
          }
        >
          <li className="navbar__item navbar__item--active">
            <Link to="/home" className="navbar__link">
              Home
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/phones" className="navbar__link">
              Phones
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/tablets" className="navbar__link">
              Tablets
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/accessories" className="navbar__link">
              Accessories
            </Link>
          </li>
        </ul>
        <ul
          className={
            showMenu ? 'navbar__icons navbar__icons--active' : 'navbar__icons'
          }
        >
          <li className="navbar__icon">
            <img src="/img/heart.svg" alt="heart icon svg" />
          </li>
          <li className="navbar__icon">
            <img src="/img/shopping-bag.svg" alt="bag icon svg" />
          </li>
        </ul>
        <button
          className="navbar__toggle"
          onClick={() => setShowMenu(!showMenu)}
        >
          <img
            src={showMenu ? '/img/close.svg' : '/img/menu.svg'}
            alt="menu icon png"
            className="navbar__button"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
