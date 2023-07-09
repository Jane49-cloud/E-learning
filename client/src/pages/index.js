import Image from "next/image";
import { Inter } from "next/font/google";
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
      <div className="container text-2xl p-5 text-primary-dark rounded-box">
        Hello
      </div>
    </ProtectedRoutes>
  );
}

export default Home;
