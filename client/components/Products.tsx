import ProductItemComponent from "./ProductItem";
import { useProducts } from "../hooks/useProducts";
import { ProductItem } from "../types/types";

const ProductsComponent = () => {
  const data = useProducts();

  return (
    <div className="text-center">
      {data?.map((item: ProductItem) => {
        return <ProductItemComponent {...item} key={item.id} />;
      })}
    </div>
  );
};

export default ProductsComponent;
