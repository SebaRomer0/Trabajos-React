import { useNavigate } from "react-router-dom";


const Item = ({producto}) => {

    const navegacion = useNavigate();

    return (
        <div className="card text-center estilo__cart" style={{width: 300}}>
            <img src={require(`../NavBar/imagen/indumentaria/${producto.img}`)} className="card-img-top"/>
            <div className="card-body">
                <h5 className="color__titulos">Nombre: {producto.nombre}</h5>
                <button className="btn btn-primary" onClick={()=>navegacion (`/producto/${producto.id}`)}>Informacion del Producto</button>
            </div>
        </div>
    )
}

export default Item; 
