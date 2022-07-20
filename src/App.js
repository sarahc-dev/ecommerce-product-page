import { useContext } from "react";
import GlobalStyle from "./globalStyles";
import products from "./products";
import Header from "./layout/Header";
import ProductMain from "./components/ProductMain";
import ProductImages from "./components/ProductImages";
import ProductDetails from "./components/ProductDetails";
import Footer from "./layout/Footer";
import Lightbox from "./components/Lightbox";
import useBreakpoints from "./hooks/useBreakpoints";
import ModalContext from "./contexts/ModalContext";
import { CartProvider } from "./contexts/CartContext";

function App() {
  // Fetch product data
  const product = products[0];

  const { showModal } = useContext(ModalContext);
  const { isDesktop } = useBreakpoints();

  return (
    <>
      <GlobalStyle />
      {isDesktop && showModal && <Lightbox images={product.images} />}
      <CartProvider>
        <Header />
        <ProductMain>
          <ProductImages images={product.images} />
          <ProductDetails company={product.company} name={product.name} description={product.description} discount={product.discount} price={product.price} />
        </ProductMain>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
