import { Product, Phone } from '../interface/Product';
import { useState } from 'react';
import ProductInfo from './ProductInfo';

interface ProductDataProps {
  product: Product;
  realProduct: Phone;
}

const ProductData = ({ product, realProduct }: ProductDataProps) => {
  const [imageActive, setImageActive] = useState(0);

  const [currentImage, setCurrentImage] = useState(realProduct.images?.[0]);
  const [currentCapacity, setCurrentCapacity] = useState<string | undefined>(
    realProduct.capacityAvailable?.[0],
  );

  const [currentColor, setCurrentColor] = useState<string | undefined>(
    realProduct.colorsAvailable?.[0],
  );

  return (
    <div className="product__data">
      <div className="product__carousel">
        {realProduct.images?.map((image, i) => (
          <div
            key={i}
            className={
              imageActive === i ? 'product__item active' : 'product__item'
            }
            onClick={() => {
              setImageActive(i);
              setCurrentImage(realProduct.images?.[i]);
            }}
          >
            <img src={`/${image}`} alt={`${product.name} ${i + 1}`} />
          </div>
        ))}
      </div>
      <img
        className="product__image"
        src={`/${currentImage}`}
        alt={product.name}
      />

      <ProductInfo
        realProduct={realProduct}
        currentCapacity={currentCapacity}
        setCurrentCapacity={setCurrentCapacity}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />
    </div>
  );
};

export default ProductData;
