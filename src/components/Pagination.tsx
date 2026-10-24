import './Pagination.scss';

interface PaginationProps {
  pages: number[];
  setPage: (page: number) => void;
}

const Pagination = ({ pages, setPage }: PaginationProps) => {
  return (
    <nav className="products__pagination">
      <button className="products__link">
        <img src="/img/chevron-left.svg" alt="chevron left" />
      </button>
      {pages.map(p => {
        return (
          <button
            key={p}
            onClick={() => {
              setPage(p);
            }}
            className="products__link"
          >
            {p}
          </button>
        );
      })}
      <button className="products__link">
        <img src="/img/chevron-right.svg" alt="chevron right" />
      </button>
    </nav>
  );
};

export default Pagination;
