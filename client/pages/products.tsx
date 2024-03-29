import ProductsComponent from "../components/Products";
import Button from "../uiComponents/Button/Button";

const ProductsPage = () => {
  return (
    <div className="flex flex-col content-center items-center	">
      <ProductsComponent />
      <Button text="Go back" to="/" type="button" />
    </div>
  );
};

export default ProductsPage;
