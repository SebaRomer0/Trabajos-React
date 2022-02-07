import ControlesDeLaCard from "./ItemCount";
import swal from "sweetalert";

const Item = ({producto}) => {

    return (
        <div className="card" style={{width: 300}}>
            <img src={producto.img} className="card-img-top"/>
            <div className="card-body">
                <h5>Nombre: {producto.nombre}</h5>
                <p>Precio: {producto.precio}</p>
                <ControlesDeLaCard stock={producto.stock}/>
            </div>
        </div>
    )
}

export default Item; 
