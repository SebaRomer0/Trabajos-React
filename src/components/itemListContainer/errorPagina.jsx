import CarWidget from "../NavBar/CarWidget";
import "./itemListStyle.css";
import { Link } from 'react-router-dom';


const ErrorPagina = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="error__imagen">
            <h1 className="text-center">Error 404</h1>
          </div>
          <div className="text-center margen">
            <p className="fs-2">Esta Pagina no se Encuentra Disponible</p>
            <button className="btn btn-info btn-lg">
              <Link className="nav-link active btn-lg" to="/">Inicio</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPagina;
