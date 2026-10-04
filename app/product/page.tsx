import { products } from "../product-data";
import ProductList from "../productList";

export default function product() {
  return (
    <div>
      products
      <ProductList products={products} />
    </div>
  );
}
