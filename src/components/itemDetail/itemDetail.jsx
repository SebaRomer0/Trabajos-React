import { useNavigate } from "react-router-dom";
import ControlesDeLaCard from "../itemListContainer/ItemCount";

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
        <div className="card text-center" style={{ width: 400 }}>
          {/* <img src={require(`../NavBar/imagen/indumentaria Masculina/${detalle.img}`)} className="card-img-top"/> */}
          <div className="card-body">
            <h3>Nombre: {detalle.nombre}</h3>
            <h4>Precio: {detalle.precio}</h4>
            <p>Descripcion: {detalle.descripcion}</p>
            <h4><ControlesDeLaCard stock={detalle.stock} productos={detalle} buy={detalle.precio}/></h4>
            <button className="btn btn-primary btn-lg py-4 m-3" onClick={irCompraTerminada}>Terminar Compra</button>
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
