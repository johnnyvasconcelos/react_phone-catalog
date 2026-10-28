import { Product } from '../interface/Product';
import { useState } from 'react';

interface ProductImagesProps {
  product: Product;
}

const ProductImages = ({ product }: ProductImagesProps) => {
  const [imageActive, setImageActive] = useState(0);

  const [currentImage, setCurrentImage] = useState(product.images?.[0]);

  return (
    <div className="product__images">
      <div className="product__carousel">
        {product.images?.map((image, i) => (
          <div
            key={i}
            className={
              imageActive === i ? 'product__item active' : 'product__item'
            }
            onClick={() => {
              setImageActive(i);
              setCurrentImage(product.images?.[i]);
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
    </div>
  );
};

export default ProductImages;
