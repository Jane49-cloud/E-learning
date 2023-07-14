import "@/styles/globals.css";
import Navbar from "@/constants/Navbar";
import { Provider } from "react-redux";
import store from "../Redux/store";
import Loader from "@/components/loader";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/user");
    }
  }, []);

  return (
    <Provider store={store}>
      <Navbar />
      <Loader />
      <Component {...pageProps} />
    </Provider>
  );
}
