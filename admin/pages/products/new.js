import Layout from "@/app/commponents/Layout";
import ProductForm from "@/app/commponents/ProductForm";

export default function NewProduct() {
  return (
    <Layout>
      <h1>
        <b>New Product</b>
      </h1>
      <ProductForm />
    </Layout>
  );
}
