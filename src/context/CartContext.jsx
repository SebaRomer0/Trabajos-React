import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const newItem = { item, quantity };
    const productIn = cart.find((product)=> product.item.id === item.id);
    if (productIn){
      const newCart = cart.filter((product)=> product.item.id !== item.id);
      productIn.quantity += quantity;
      setCart([...newCart, productIn]);
    } else setCart((prevState)=> [...prevState, newItem])
  };

  const totalPrice =()=> {
    return cart.reduce((acc,prod) => acc + prod.item.precio * prod.quantity , 0);
  }

  const removeItem = (id) => { 
    setCart((prev) => prev.filter((element) => element.item.id !== id));
  };

  const clear = () => {
    setCart([]);
  };

  // Ver si lo elimino
  const newStock = (stockPrenda) => {
    setCart((prev) =>
      prev.filter((element) => (element.item.stock = stockPrenda))
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, newStock, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
