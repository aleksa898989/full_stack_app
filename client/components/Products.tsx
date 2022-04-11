import ProductItemComponent from "./ProductItem";
import { useProducts } from "../hooks/useProducts";
import { ProductItem } from "../types/types";
import { modal } from "react-ts-modal";
import AddNewProductModal from "./AddProductModal";
import Button from "../uiComponents/Button/Button";
import EditNewProductModal from "./EditProductModal";
import { useState } from "react";

const ProductsComponent = () => {
  const data = useProducts();
  const [dataForEdit, setDataForEdit] = useState<ProductItem>();

  const handleShowAddProductModal = () => {
    modal.show("add-new-product-modal");
  };

  const handleShowEditProductModal = (id: string) => {
    setDataForEdit(data.find((x) => x.id === id));

    setTimeout(() => {
      modal.show("edit-product-modal");
    }, 100);
  };

  return (
    <div>
      {data?.map((item: ProductItem) => (
        <ProductItemComponent key={item.id} {...item} handleShowEditProductModal={handleShowEditProductModal} />
      ))}

      <Button onClick={handleShowAddProductModal} text="Add new product" type="button" />

      <AddNewProductModal />

      {dataForEdit?.id && (
        <EditNewProductModal
          id={dataForEdit?.id}
          title={dataForEdit?.title}
          description={dataForEdit?.description}
          price={dataForEdit?.price}
        />
      )}
    </div>
  );
};

export default ProductsComponent;
