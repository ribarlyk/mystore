import Layout from "@/app/commponents/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <Layout>
      <Link href={"/products/new"} className="btn-primary">
        Add new product
      </Link>
      <table className="basic">
        <thead>
          <tr>
            <td>Product Name</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <Link href={"/products/edit/" + product._id}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}
