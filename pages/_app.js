// Import necessary components
import Footer from '../Components/Footer/Footer';
import ProductDetails from '../Components/ProductDetails/ProductDetails';
import "@/Components/styles/globals.css";

// App component
export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
