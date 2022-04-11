import axios from "axios";
import ProductItemComponent from "./ProductItem";
import { useProducts } from "../hooks/useProducts";
import { ProductItem } from "../types/types";
import Link from "next/link";
import { modal } from "react-ts-modal";
import AddNewProductModal from "./AddProductModal";
import Button from "../uiComponents/Button/Button";
import { useRouter } from "next/router";
import EditNewProductModal from "./EditProductModal";
import { useState } from "react";

const ProductsComponent = () => {
  const data = useProducts();
  const router = useRouter();

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

  const handleDelete = (id: string) => {
    axios
      .delete(`http://localhost:3000/products/${id}`)
      .then((response) => {
        console.log(response);
        router.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {data?.map((item: ProductItem) => (
        <Link href={`/products/${item.id}`} key={item.id}>
          <ProductItemComponent
            {...item}
            handleDelete={handleDelete}
            handleShowEditProductModal={handleShowEditProductModal}
          />
        </Link>
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
