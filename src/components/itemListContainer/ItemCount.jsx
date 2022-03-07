import { useContext, useEffect } from "react";
import { useState } from "react";
import swal from "sweetalert";
import { CartContext } from "../../context/CartContext";

const ControlesDeLaCard = ({ stock, productos }) => {
  const [cantMin, setcantMin] = useState(0);
  const [onAdd, setonAdd] = useState(0);
  const [count, setCount] = useState(0);
  const [stockPrenda, setStockprenda] = useState();

  console.log(stock);
  console.log(stockPrenda);

  const { addItem , newStock , totalPrice} = useContext(CartContext);

  const restarCompra = () => {
    if (cantMin === 1) {
      swal("La Compra minima es una Prenda");
    } else {
      setcantMin((cantMin) => cantMin - 1);
      setonAdd((onAdd) => onAdd - 1);
      setCount((count) => count - 1);
      setStockprenda((stockPrenda) => stockPrenda + 1);
    }
  };

  const agregarCompra = () => {
    if (cantMin === stock) {
      swal("Llegaste a la cantidad de Prenda que tenemos Stock");
    } else {
      setonAdd((onAdd) => onAdd + 1);
      setcantMin((cantMin) => cantMin + 1);
      setCount((count) => count + 1);
      setStockprenda((stockPrenda) => stock - (onAdd + 1));
    }
  };

  const contador = () => {
    swal("Perfecto. Tenes en tu Carrito de Compra : " + count);
    addItem(productos, count);
    newStock(stockPrenda);
    // totalPrice(productos,count);
  };

  return (
    <div>
      <h4 className="card-text">Stock:{stock}</h4>
      <h5>
        <button className="btn btn-primary" onClick={restarCompra}>
          -
        </button>{" "}
        {(cantMin, onAdd)}{" "}
        <button className="btn btn-primary" onClick={agregarCompra}>
          +
        </button>
      </h5>
      <button className="btn btn-primary" onClick={contador}>
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ControlesDeLaCard;
