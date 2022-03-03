import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/NavBar/NavBar.css";
import NavBar from "./components/NavBar/NavBar";
import MuestraDeLaCard from "./components/itemListContainer/ItemListCont";
import ItemDetailContainer from "./components/itemDetail/itemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/itemListContainer/homePage";
import TerminarCompra from "./components/itemDetail/cart";
import ErrorPagina from "./components/itemListContainer/errorPagina";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/itemDetail/cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="producto">
              <Route index element={<MuestraDeLaCard />} />
              <Route path=":productoId" element={<ItemDetailContainer />} />
              <Route path="cart" element={<Cart />} />
            </Route>
            <Route path="*" element={<ErrorPagina />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
