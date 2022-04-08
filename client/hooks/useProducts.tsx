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
  try {
    axios.get(`http://localhost:3000/products/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export { useProducts, useSingleProduct, deleteProduct };
