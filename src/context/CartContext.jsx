import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCantidad, setCartCantidad] = useState(0);

  useEffect(()=>{
    const getCantidad =()=>{
      let quantity = 0;
      cart.forEach((order)=>{
        quantity += order.quantity;
      });
      setCartCantidad(quantity);
    };
    getCantidad();
  },[cart]);

  const addItem = (item, quantity) => {
    const newItem = { item, quantity };
    const productIn = cart.some((product)=> product.item.id === item.id);
    if (productIn){
      const updatedCart = cart.map((order)=>{
        if (order.item.id === item.id){
          return {...order,quantity: quantity + order.quantity};
        } else {
          return order;
        }
      });
      setCart(updatedCart)
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

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, totalPrice, cartCantidad }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
