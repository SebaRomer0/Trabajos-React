import { useContext, useEffect } from "react";
import { useState } from "react";
import swal from "sweetalert";
import { CartContext } from "../../context/CartContext";

const ControlesDeLaCard = ({ stock, productos }) => {
  const [cantMin, setcantMin] = useState(1);
  const [onAdd, setonAdd] = useState(1);
  const [count, setCount] = useState(1);
 
  const { addItem } = useContext(CartContext)  


  const restarCompra = () => {

    if (cantMin === 1) {
      swal("La Compra minima es una Prenda");
    } else {
      setcantMin((cantMin) => cantMin - 1);
      setonAdd((onAdd) => onAdd - 1);
      setCount((count) => count - 1);
    }
  };

  const agregarCompra = () => {
    if (cantMin === stock) {
      swal("Llegaste a la cantidad de Prenda que tenemos Stock");
    } else {
      setonAdd((onAdd) => onAdd + 1);
      setcantMin((cantMin) => cantMin + 1);
      setCount((count) => count + 1);
    }
  };

  const contador = () => {
    swal("Perfecto. Tenes en tu Carrito de Compra : " + count);
    addItem(productos, count)


  };
  
  return (
    <div>
      <p className="card-text">Stock: {stock}</p>
      <p>
        <button className="btn btn-primary" onClick={restarCompra}>
          -
        </button>{" "}
        {(cantMin, onAdd)}{" "}
        <button className="btn btn-primary" onClick={agregarCompra}>
          +
        </button>
      </p>
      <button className="btn btn-primary" onClick={contador}>Agregar al Carrito</button>
    </div>
  );
};

export default ControlesDeLaCard;
