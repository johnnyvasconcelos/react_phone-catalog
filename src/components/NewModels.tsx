import './NewModels.scss';
import { useEffect, useState } from 'react';
import Loading from './Loading';
import { Product } from '../interface/Product';

const NewModels = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5173/api/products.json')
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
    <section className="models">
      <div className="container column">
        <h2 className="models__title">Brand new models</h2>
        {loading && <Loading />}
        {data.slice(0, 3).map(item => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
    </section>
  );
};

export default NewModels;
