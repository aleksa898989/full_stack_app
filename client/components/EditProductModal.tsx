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
};

const EditNewProductModal = ({ id, title, description, price }: EditProductModalProps) => {
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
    <Modal name="edit-product-modal">
      <h1>Edit {title}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input error={errors.title} register={register} name="title" type="text" />
        <Input error={errors.description} register={register} name="description" type="text" />
        <Input error={errors.price} register={register} name="price" type="number" />
        <Button text="submit" type="submit" />
      </form>
    </Modal>
  );
};

export default EditNewProductModal;
