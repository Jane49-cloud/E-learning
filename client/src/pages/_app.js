import "@/styles/globals.css";
import Navbar from "@/constants/Navbar";
import { Provider } from "@/context";

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <Navbar />

      <Component {...pageProps} />
    </Provider>
  );
}
