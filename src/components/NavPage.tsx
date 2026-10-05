import { Link } from 'react-router-dom';

const NavPage = () => {
  return (
    <nav className="navpage">
      <div className="container">
        <Link to="/">
          <img src="/img/home.svg" alt="icon home svg" />
        </Link>
      </div>
    </nav>
  );
};

export default NavPage;
