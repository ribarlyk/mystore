import Layout from "@/app/commponents/Layout";
import Link from "next/link";

export default function Products() {
  return (
    <Layout>
      <Link href={"/products/new"} className="btn-primary">
        Add new product
      </Link>
    </Layout>
  );
}
