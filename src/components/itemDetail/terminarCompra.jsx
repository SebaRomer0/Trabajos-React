import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const TerminarCompra = () => {
  const { cart, removeItem, clear } = useCart();

  let irHome = useNavigate();
  let irProduct = useNavigate();

  const home = () => {
    irHome("/");
  };

  const product = () => {
    irProduct("/producto");
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="card text-center" style={{ width: 400 }}>
            <h1>Terminar la Compra</h1>
            <div className="card-body">
                {cart.map((result) => {
                    return (
                        <div key={result.item.id}>
                            <h5>{result.item.nombre}</h5>
                            <p>{result.quantity}</p>
                            <button className="btn btn-primary m-3" onClick={()=>removeItem (result.item.id)}>Borrar Producto</button>
                            <button className="btn btn-primary m-3" onClick={clear}>Borrar Todo</button>
                        </div>
                    );
                })}
            </div>
            <button className="btn btn-primary p-3 m-2" onClick={product}>
              Volver a la Pagina de Productos
            </button>
            <button className="btn btn-primary p-3 m-2" onClick={home}>
              Volver a la Pagina de Inicio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminarCompra;
