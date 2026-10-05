import NavPage from '../components/NavPage';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import Model from '../components/Model';
import { Product } from '../interface/Product';
import '../components/HotPrices';

const Phones = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5173/api/phones.json')
      .then(response => response.json())
      .then(result => {
        setData(result);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main className="products">
      <div className="container column">
        <NavPage />
        <h1 className="products__title">Mobile phones</h1>
      </div>
      <section className="products__catalog">
        <div className="models__items container-grid">
          {loading && <Loading />}
          {data.map(item => {
            return <Model item={item} key={item.id} catalog={true} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default Phones;
