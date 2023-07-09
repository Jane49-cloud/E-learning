import "@/styles/globals.css";
import Navbar from "@/constants/Navbar";
import { Provider } from "react-redux";
import store from "../Redux/store";
import Loader from "@/components/loader";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar />
      <Loader />
      <Component {...pageProps} />
    </Provider>
  );
}
