import Image from "next/image";
import { ProductItem } from "../types/types";

const ProductItemComponent = ({
  id,
  title,
  price,
  description,
  handleDelete,
  handleShowEditProductModal,
}: ProductItem) => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>description</th>
          <th>price</th>
          <th>edit</th>
          <th>delete</th>
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
              handleDelete && handleDelete(id);
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
