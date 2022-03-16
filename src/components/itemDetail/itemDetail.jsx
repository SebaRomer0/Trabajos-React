import { useNavigate } from "react-router-dom";
import ControlesDeLaCard from "../itemListContainer/ItemCount";
import "./itemDetailStyle.css"

const ItemDetail = ({ detalle }) => {
  let irHome = useNavigate();

  let compraTerminada = useNavigate();

  const product = () => {
    irHome("/producto");
  };

  const irCompraTerminada = () => {
    compraTerminada ("/producto/cart");
  };

  return (
    <div className="container-fluid fondo">
      <div className="row d-flex justify-content-center">
        <div className="card text-center estilo__cart" style={{ width: 450 }}>
          {/* <img src={require(`../NavBar/imagen/indumentaria/${detalle.img}`)} className="card-img-top"/> */}
          <div className="card-body color__titulos">
            <h3>Nombre: {detalle.nombre}</h3>
            <h4>Precio: {detalle.precio}</h4>
            <p>Descripcion: {detalle.descripcion}</p>
            <h4><ControlesDeLaCard productos={detalle} buy={detalle.precio}/></h4>
            <button className="btn btn-primary btn-lg py-4 m-3" onClick={irCompraTerminada}>Ir al Carrito de Compra</button>
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
