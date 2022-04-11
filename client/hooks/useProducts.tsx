import axios from "axios";
import { useEffect, useState } from "react";
import { ProductItem } from "../types/types";

const useProducts = () => {
  const [data, setData] = useState<ProductItem[]>([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/products`).then((res) => {
      setData(res.data);
    });
  }, []);

  return data;
};

const useSingleProduct = (id: string) => {
  const [singleProduct, setSingleProduct] = useState<ProductItem>();

  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`).then((res) => {
      setSingleProduct(res.data);
    });
  }, []);

  return singleProduct;
};

const deleteProduct = (id: string) => {
  axios
    .delete(`http://localhost:3000/products/${id}`)
    .then((response) => {
      console.log(response);
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
};

const updateProduct = (data: ProductItem) => {
  axios
    .patch(`http://localhost:3000/products/${data.id}`, {
      title: data.title,
      description: data.description,
      price: data.price,
    })
    .then((response) => {
      console.log(response);
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
};

export { useProducts, useSingleProduct, deleteProduct, updateProduct };
