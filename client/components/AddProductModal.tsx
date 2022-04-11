import axios from "axios";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import Modal from "react-ts-modal";
import { InputTypes } from "../types/types";
import Button from "../uiComponents/Button/Button";
import Input from "../uiComponents/Input/Input";

const AddEditNewProductModal = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputTypes>();

  const onSubmit: SubmitHandler<InputTypes> = (data) => {
    axios
      .post("http://localhost:3000/products", {
        title: data.title,
        description: data.description,
        price: data.price,
      })
      .then((response) => {
        console.log(response);
        router.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Modal name="add-new-product-modal">
      <h1>Add new product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input error={errors.title} register={register} name="title" type="text" />
        <Input error={errors.description} register={register} name="description" type="text" />
        <Input error={errors.price} register={register} name="price" type="number" />
        <Button text="submit" type="submit" />
      </form>
    </Modal>
  );
};

export default AddEditNewProductModal;
