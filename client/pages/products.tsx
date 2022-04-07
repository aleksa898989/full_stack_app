import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const ProductsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="text-center">
      {data?.map(({ id, title, price, description }) => {
        return (
          <div key={id} className={"card"}>
            <p>{`id: ${id}`}</p>
            <p>{`title: ${title}`}</p>
            <p>{`price: ${price}`}</p>
            <p>{`description: ${description}`}</p>
          </div>
        );
      })}

      <Link href="/">go back</Link>
    </div>
  );
};

export default ProductsPage;
