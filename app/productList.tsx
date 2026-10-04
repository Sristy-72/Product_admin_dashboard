import Link from "next/link";
import { Product } from "./product-data";
import Image from "next/image";

export default function ProductList({ products }: { products: Product[] }) {
  //This component receives a prop called products, and that prop must be an array of Product
  return (
    <div>
      {products.map((product) => (
        <Link key={product.id} href="/product-details">
          <Image
            src={"/" + product.imageUrl}
            alt="product_image"
            width={150}
            height={150}
          />
          <h1>{product.name}</h1>
          <h2> ${product.price}</h2>
        </Link>
      ))}
    </div>
  );
}
