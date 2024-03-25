import Layout from "@/app/commponents/Layout";
import { useState } from "react";
import axios from "axios";

export default function NewProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescripiton] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const createProduct = async (e) => {
    e.preventDefault();
    const data = { title, description, price, quantity };
    await axios.post("/api/products", data);
  };

  return (
    <Layout>
      <form onSubmit={createProduct}>
        <h1>
          <b>New Product</b>
        </h1>
        <label>Product Name</label>
        <input
          type="text"
          placeholder="product name"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        ></input>
        <label>Description</label>
        <textarea
          type="text"
          placeholder="description"
          value={description}
          onChange={(ev) => setDescripiton(ev.target.value)}
        ></textarea>
        <label>Price</label>
        <input
          type="number"
          placeholder="price"
          value={price}
          onChange={(ev) => setPrice(ev.target.value)}
        ></input>
        <label>Quantity</label>
        <input
          type="number"
          placeholder="quantity"
          value={quantity}
          onChange={(ev) => setQuantity(ev.target.value)}
        ></input>

        <button type="submit" className="btn-primary">
          Save
        </button>
      </form>
    </Layout>
  );
}
