import { Route, Routes } from "react-router";
import Welcome from "./pages/Welcome";
import Product from "./pages/Product";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";
import "./index.css";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
      {/* <MainHeader /> */}
      <Layout>
        <Routes>
          <Route path="/" element={<AllQuotes />} />
          <Route path="/welcome/*" element={<Welcome />} />
          <Route path="/products" element={<Product />}>
            <Route path="product-detail/:pid" element={<ProductDetail />} />
          </Route>
          <Route path="*" element={<NotFound />}></Route>

          <Route path="/quotes" element={<AllQuotes />} />
          <Route path="/quotes/:quoteId/*" element={<QuoteDetail />} />
          <Route path="/new-quote" element={<NewQuote />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
