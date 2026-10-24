import { Link } from 'react-router-dom';
import './NavPage.scss';

interface NavPageProps {
  page: string;
}

const NavPage = ({ page }: NavPageProps) => {
  return (
    <nav className="navpage">
      <Link to="/">
        <img src="/img/home.svg" alt="icon home svg" />
      </Link>
      <img src="/img/chevron-right-light.svg" alt="icon chevron svg" />
      <p className="navpage__title">{page}</p>
    </nav>
  );
};

export default NavPage;
