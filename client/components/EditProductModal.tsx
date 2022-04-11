import { SubmitHandler, useForm } from "react-hook-form";
import Modal from "react-ts-modal";
import { InputTypes } from "../types/types";
import Button from "../uiComponents/Button/Button";
import Input from "../uiComponents/Input/Input";
import { updateProduct } from "../hooks/useProducts";

type EditProductModalProps = {
  id: string;
  title?: string;
  description?: string;
  price?: number;
  handleHideEditProductModal: (id: string) => void;
};

const EditNewProductModal = ({ id, title, description, price, handleHideEditProductModal }: EditProductModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputTypes>({
    defaultValues: {
      id: id,
      title: title,
      description: description,
      price: price,
    },
  });

  const onSubmit: SubmitHandler<InputTypes> = (data) => {
    updateProduct(data);
  };

  return (
    <Modal name="edit-product-modal" closeButton={false}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center">Edit {title}</h1>
        <div className="flex flex-col m-5">
          <Input error={errors.title} register={register} name="title" type="text" />
          <Input error={errors.description} register={register} name="description" type="text" />
          <Input error={errors.price} register={register} name="price" type="number" />
        </div>

        <div className="flex justify-evenly my-4">
          <Button text="Save" type="submit" />
          <Button text="Close" type="button" onClick={handleHideEditProductModal} />
        </div>
      </form>
    </Modal>
  );
};

export default EditNewProductModal;
