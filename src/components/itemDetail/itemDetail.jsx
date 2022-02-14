import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const ItemDetail = ({detalle}) => {

    let irHome = useNavigate();
  
    const home = () => {
      irHome("/producto");
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
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button onClick={home} className="btn btn-info btn-lg">
            Volver a la Pagina de Producto
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
