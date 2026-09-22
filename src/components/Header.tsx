import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <nav className="nav-bar">
      <Link to="/home">
        <img src="/img/logo.png" alt="nice gadjets" />
      </Link>
      <ul className="menu">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/phones">Phones</Link>
        </li>
        <li>
          <Link to="/tablets">Tablets</Link>
        </li>
        <li>
          <Link to="/accessories">Accessories</Link>
        </li>
      </ul>
      <ul className=""></ul>
    </nav>
  );
};

export default Header;
