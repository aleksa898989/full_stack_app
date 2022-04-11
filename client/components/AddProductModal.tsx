import { SubmitHandler, useForm } from "react-hook-form";
import Modal from "react-ts-modal";
import { createProduct } from "../hooks/useProducts";
import { InputTypes } from "../types/types";
import Button from "../uiComponents/Button/Button";
import Input from "../uiComponents/Input/Input";

type AddNewProductModalProps = {
  handleHideAddProductModal: () => void;
};

const AddEditNewProductModal = ({ handleHideAddProductModal }: AddNewProductModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputTypes>();

  const onSubmit: SubmitHandler<InputTypes> = (data) => {
    createProduct(data);
  };

  return (
    <Modal name="add-new-product-modal" closeButton={false}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center">Add new product</h1>
        <div className="flex flex-col m-5">
          <Input error={errors.title} register={register} name="title" type="text" />
          <Input error={errors.description} register={register} name="description" type="text" />
          <Input error={errors.price} register={register} name="price" type="number" />
        </div>

        <div className="flex justify-evenly my-4">
          <Button text="Save" type="submit" />
          <Button text="Close" type="button" onClick={handleHideAddProductModal} />
        </div>
      </form>
    </Modal>
  );
};

export default AddEditNewProductModal;
