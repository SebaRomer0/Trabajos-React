import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (cart.addedItem.some ((addedItem) => addedItem.name === item.name)) {
      setCart((prevState)=> [...prevState, quantity]);
    } else {
      const newItem = { item, quantity };
      setCart((prevState) => [...prevState, newItem]);
    }
  };


  const removeItem = (id) => {
    setCart((prev) => prev.filter((element) => element.item.id !== id));
  };

  const clear = () => {
    setCart([]);
  };


  const newStock = (stockPrenda) => {
    setCart((prev) =>
      prev.filter((element) => (element.item.stock = stockPrenda))
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, newStock }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
