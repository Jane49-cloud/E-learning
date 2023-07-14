import Image from "next/image";
import ProtectedRoutes from "./protected.routes";
import { useEffect } from "react";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      router.push("/login");
    }
  }, []);

  return (
    <ProtectedRoutes>
      <div className="">Hello</div>
    </ProtectedRoutes>
  );
}

export default Home;
