import Footer from '../components/Footer';
import './Product.scss';
import { useParams } from 'react-router-dom';
import NavPage from '../components/NavPage';

const Product = () => {
  const { product } = useParams();

  return (
    <>
      <div className="container column">
        <NavPage page="Phones" products={product} />
        <div className="product">
          <h1>{product}</h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
