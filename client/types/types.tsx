export type ProductItem = {
  id: string;
  title: string;
  description: string;
  price: number;
  handleDelete?: (id: string) => void;
  handleShowEditProductModal?: (id: string) => void;
};

export type InputTypes = {
  title: string;
  description: string;
  price: number;
};
