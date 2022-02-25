
import { useNavigate } from "react-router-dom";


const Item = ({producto}) => {

    const navegacion = useNavigate();

    return (
        <div className="card text-center" style={{width: 300}}>
            <img src={require(`../NavBar/imagen/indumentaria Masculina/${producto.img}`)} className="card-img-top"/>
            <div className="card-body">
                <h5>Nombre: {producto.nombre}</h5>
                <button className="btn btn-primary" onClick={()=>navegacion (`/producto/${producto.id}`)}>Informacion del Producto</button>
            </div>
        </div>
    )
}

export default Item; 
