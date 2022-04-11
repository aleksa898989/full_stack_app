export type ProductItem = {
  id: string;
  title: string;
  description: string;
  price: number;
  handleShowEditProductModal?: (id: string) => void;
};

export type InputTypes = {
  id: string;
  title: string;
  description: string;
  price: number;
};
