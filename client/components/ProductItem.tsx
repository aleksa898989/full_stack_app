import Image from "next/image";
import { ProductItem } from "../types/types";
import { deleteProduct } from "../hooks/useProducts";
import Button from "../uiComponents/Button/Button";

const ProductItemComponent = ({ id, title, price, description, handleShowEditProductModal }: ProductItem) => {
  const thead = ["Id", "Title", "Description", "Price", "Edit", "Delete"];
  return (
    <table>
      <thead>
        <tr>
          {thead.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{id}</td>
          <td>{title}</td>
          <td>{description}</td>
          <td>{price}</td>
          <td
            className="cursor-pointer"
            onClick={() => {
              handleShowEditProductModal && handleShowEditProductModal(id);
            }}
          >
            <Image src={"/editIcon.svg"} height={30} width={30} />
          </td>
          <td className="cursor-pointer">
            <Button
              type="button"
              text="Delete"
              onClick={() => {
                deleteProduct(id);
              }}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductItemComponent;
