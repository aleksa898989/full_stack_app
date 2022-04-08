import ProductsComponent from "../../components/Products";
import Link from "next/link";

const ProductsPage = () => {
  return (
    <div className="text-center">
      <ProductsComponent />
      <Link href="/">go back</Link>
    </div>
  );
};

export default ProductsPage;
