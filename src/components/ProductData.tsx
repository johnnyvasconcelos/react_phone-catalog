import { Product, Phone } from '../interface/Product';
import { useState } from 'react';
import ProductInfo from './ProductInfo';
import ProductCarousel from './ProductCarousel';

interface ProductDataProps {
  product: Product;
  realProduct: Phone;
}

const ProductData = ({ product, realProduct }: ProductDataProps) => {
  const [imageActive, setImageActive] = useState(0);

  const [currentImage, setCurrentImage] = useState<string | undefined>(
    realProduct.images?.[0],
  );
  const [currentCapacity, setCurrentCapacity] = useState<string | undefined>(
    realProduct.capacityAvailable?.[0],
  );

  const [currentColor, setCurrentColor] = useState<string | undefined>(
    realProduct.colorsAvailable?.[0],
  );

  return (
    <div className="product__data">
      <div className="product__column">
        <div className="product__images">
          <ProductCarousel
            product={product}
            realProduct={realProduct}
            imageActive={imageActive}
            setImageActive={setImageActive}
            setCurrentImage={setCurrentImage}
          />
          <img
            className="product__image"
            src={`/${currentImage}`}
            alt={product.name}
          />
        </div>
        <div className="product__about">
          <h2 className="product__title">About</h2>
          <div className="product__text">
            {realProduct.description?.map(
              (text: { title: string; text: string[] }, i: number) => {
                return (
                  <div key={i}>
                    <h3>{text.title}</h3>
                    {text.text.map((paragraph, j) => (
                      <p key={j}>{paragraph}</p>
                    ))}
                  </div>
                );
              },
            )}
          </div>
        </div>
      </div>
      <div className="product__column">
        <div className="product__specification">
          <ProductInfo
            realProduct={realProduct}
            currentCapacity={currentCapacity}
            setCurrentCapacity={setCurrentCapacity}
            currentColor={currentColor}
            setCurrentColor={setCurrentColor}
          />
        </div>
        <div className="product__specs">
          <h2 className="product__title">Tech specs</h2>
          <table className="product__spectable">
            <tr>
              <td>Screen</td>
              <td>{realProduct.screen}</td>
            </tr>
            <tr>
              <td>Resolution</td>
              <td>{realProduct.resolution}</td>
            </tr>
            <tr>
              <td>Processor</td>
              <td>{realProduct.processor}</td>
            </tr>
            <tr>
              <td>RAM</td>
              <td>{realProduct.ram}</td>
            </tr>
            <tr>
              <td>Built in memory</td>
              <td>{realProduct.capacity}</td>
            </tr>
            <tr>
              <td>Camera</td>
              <td>{realProduct.camera}</td>
            </tr>
            <tr>
              <td>Zoom</td>
              <td>{realProduct.zoom}</td>
            </tr>
            <tr>
              <td>Cell</td>
              <td>{realProduct.cell}</td>
            </tr>
          </table>
        </div>
        <span className="product__id">ID: {product.id}</span>
      </div>
    </div>
  );
};

export default ProductData;
