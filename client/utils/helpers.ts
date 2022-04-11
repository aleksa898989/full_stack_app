import { modal } from "react-ts-modal";

const handleShowAddProductModal = () => {
  modal.show("add-new-product-modal");
};

const handleHideAddProductModal = () => {
  modal.hide("add-new-product-modal");
};

const handleHideEditProductModal = (id: string) => {
  modal.hide("edit-product-modal");
};

export { handleShowAddProductModal, handleHideAddProductModal, handleHideEditProductModal };
