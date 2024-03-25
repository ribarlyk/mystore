import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function ProductForm({
  title: currentTitle,
  description: currentDescription,
  price: currentPrice,
  quantity: currentQuantity,
}) {
  console.log(currentTitle, currentDescription, currentPrice, currentQuantity);
  
  const [title, setTitle] = useState(currentTitle || "");
  const [description, setDescripiton] = useState(currentDescription || "");
  const [price, setPrice] = useState(currentPrice || "");
  const [quantity, setQuantity] = useState(currentQuantity || "");
  const [goToProducts, setGoToProducts] = useState(false);

  const router = useRouter();

  const createProduct = async (e) => {
    e.preventDefault();
    const data = { title, description, price, quantity };
    await axios.post("/api/products", data);
    setGoToProducts(true);
  };

  if (goToProducts) router.push("/products");

  return (
    <form onSubmit={createProduct}>
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
  );
}
