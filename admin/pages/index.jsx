import Layout from "@/app/commponents/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h2 className="mr-2 text-blue-900">
          Hello, <b>{session?.user?.name}</b>
        </h2>
        <div className="flex bg-gray-300 gap-1 text-black rounded-lg">
          <img
            src={session?.user?.image}
            alt="no image"
            className="rounded-lg w-6 h-6"
          />
          <span className="px-2">{session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  );
}
