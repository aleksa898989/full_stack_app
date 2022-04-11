import ProductItemComponent from "./ProductItem";
import { useProducts } from "../hooks/useProducts";
import { ProductItem } from "../types/types";
import { modal } from "react-ts-modal";
import AddNewProductModal from "./AddProductModal";
import Button from "../uiComponents/Button/Button";
import EditNewProductModal from "./EditProductModal";
import { useState } from "react";
import { handleHideAddProductModal, handleHideEditProductModal, handleShowAddProductModal } from "../utils/helpers";

const ProductsComponent = () => {
  const data = useProducts();
  const [dataForEdit, setDataForEdit] = useState<ProductItem>();

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

      <AddNewProductModal handleHideAddProductModal={handleHideAddProductModal} />

      {dataForEdit?.id && (
        <EditNewProductModal
          id={dataForEdit?.id}
          title={dataForEdit?.title}
          description={dataForEdit?.description}
          price={dataForEdit?.price}
          handleHideEditProductModal={handleHideEditProductModal}
        />
      )}
    </div>
  );
};

export default ProductsComponent;
