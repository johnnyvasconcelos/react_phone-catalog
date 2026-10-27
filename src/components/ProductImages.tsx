import { Product } from '../interface/Product';

interface ProductImagesProps {
  product: Product;
}

const ProductImages = ({ product }: ProductImagesProps) => {
  return (
    <div>
      <p>Image</p>
      <img src={`/${product.images?.[0]}`} alt={product.name} />
    </div>
  );
};

export default ProductImages;
