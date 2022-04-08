import Link from "next/link";
import { useRouter } from "next/router";
import ProductItemComponent from "../../components/ProductItem";
import { useSingleProduct } from "../../hooks/useProducts";

const ProductItemPage = () => {
  const router = useRouter();

  const productId = router.query.id as string;

  const data = useSingleProduct(productId);

  return (
    <div className="text-center">
      {data && <ProductItemComponent {...data} />}
      <Link href="/products">go back</Link>
    </div>
  );
};

export default ProductItemPage;
