import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container text-2xl p-5 text-primary-dark rounded-box">
      Hello
    </div>
  );
}
