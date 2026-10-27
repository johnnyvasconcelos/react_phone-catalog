import { Link } from 'react-router-dom';
import './NavPage.scss';

interface NavPageProps {
  page: string;
  products?: string;
}

const NavPage = ({ page, products }: NavPageProps) => {
  return (
    <nav className="navpage">
      <Link to="/">
        <img src="/img/home.svg" alt="icon home svg" />
      </Link>
      <img src="/img/chevron-right-light.svg" alt="icon chevron svg" />
      {products ? (
        <Link to={`/${page}`} className="navpage__subtitle">
          {page}
        </Link>
      ) : (
        <p className="navpage__title">{page}</p>
      )}
      {products && (
        <>
          <img src="/img/chevron-right-light.svg" alt="icon chevron svg" />
          <p className="navpage__title">{products}</p>
        </>
      )}
    </nav>
  );
};

export default NavPage;
