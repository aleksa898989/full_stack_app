import Image from "next/image";
import { ProductItem } from "../types/types";
import { deleteProduct } from "../hooks/useProducts";

const ProductItemComponent = ({ id, title, price, description, handleShowEditProductModal }: ProductItem) => {
  const thead = ["id", "title", "description", "price", "edit", "delete"];
  return (
    <table className="table-auto">
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
            onClick={() => {
              handleShowEditProductModal && handleShowEditProductModal(id);
            }}
          >
            <Image src={"/editIcon.svg"} height={30} width={30} />
          </td>
          <td
            onClick={() => {
              deleteProduct(id);
            }}
          >
            delete
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductItemComponent;
