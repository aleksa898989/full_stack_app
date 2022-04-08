import Link from "next/link";
import { ProductItem } from "../types/types";

const ProductItemComponent = ({ id, title, price, description }: ProductItem) => {
  return (
    <Link href={`products/${id}`}>
      <div className="text-center my-5">
        <p>{`id: ${id}`}</p>
        <p>{`title: ${title}`}</p>
        <p>{`price: ${price}`}</p>
        <p>{`description: ${description}`}</p>
      </div>
    </Link>
  );
};

export default ProductItemComponent;
