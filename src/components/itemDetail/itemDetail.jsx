import { useNavigate } from "react-router-dom";
import ControlesDeLaCard from "../itemListContainer/ItemCount";
import TerminarCompra from "./terminarCompra";

const ItemDetail = ({ detalle }) => {
  let irHome = useNavigate();


  const product = () => {
    irHome("/producto");
  };

  let compraTerminada = useNavigate();

  const irCompraTerminada = () => {
    compraTerminada ("/producto/cart");
  };

  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <div className="card text-center" style={{ width: 300 }}>
          {/* <img src={producto.img} className="card-img-top"/> */}
          <div className="card-body">
            <h5>Nombre: {detalle.nombre}</h5>
            <p>Precio: {detalle.precio}</p>
            <p>Descripcion: {detalle.descripcion}</p>
            <p><ControlesDeLaCard stock={detalle.stock} /></p>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary btn-lg p-3 m-2" onClick={irCompraTerminada}>Terminar Compra</button>
          </div>
          <div>
            <button onClick={product} className="btn btn-info btn-lg">
              Volver a la Pagina de Producto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
