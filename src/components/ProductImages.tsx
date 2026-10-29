import { Product, Phone } from '../interface/Product';
import { useState } from 'react';

interface ProductImagesProps {
  product: Product;
  realProduct: Phone;
}

const ProductImages = ({ product, realProduct }: ProductImagesProps) => {
  const [imageActive, setImageActive] = useState(0);

  const [currentImage, setCurrentImage] = useState(realProduct.images?.[0]);

  return (
    <div className="product__images">
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

      <div className="product__info">
        <h3 className="product__subtitle">Available colors</h3>
        <div className="product__colors">
          {realProduct.colorsAvailable?.map((color, i) => (
            <div
              key={i}
              className={
                realProduct.color === color
                  ? 'product__color product__color--active'
                  : 'product__color'
              }
            >
              <div
                className="product__circle"
                style={{ backgroundColor: color }}
              ></div>
            </div>
          ))}
        </div>
        <div className="product__divisor"></div>
        <h3 className="product__subtitle">Select capacity</h3>
        <div className="product__capacities">
          <div className="product__capacity">
            <span>64 GB</span>
          </div>
        </div>
        <div className="product__divisor"></div>
        <h4 className="product__price">
          $799 <span className="product__subprice">$1199</span>
        </h4>
        <div className="product__buttons">
          <button className="product__button">Add to cart</button>
          <button className="product__favorite">
            <img src="/img/heart.svg" alt="Add to favorites" />
          </button>
        </div>
        <table className="product__tabble">
          <tr>
            <td>Screen</td>
            <td>6.1 inches</td>
          </tr>
          <tr>
            <td>Resolution</td>
            <td>2600 x 1200</td>
          </tr>
          <tr>
            <td>Processor</td>
            <td>A14 Bionic</td>
          </tr>
          <tr>
            <td>RAM</td>
            <td>4 GB</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ProductImages;
