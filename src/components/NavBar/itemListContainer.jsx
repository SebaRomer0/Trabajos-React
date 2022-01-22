import CarWidget from "./CarWidget";
import CompraCarrito from "./ItemCount";

function ListaCard({img,nombre,precio}) {
    return (
        <div className="card" style={{width: 350}}>
            <img src={img} class="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">Nombre:{nombre}</h5>
                <p className="card-text">Precio:{precio}</p>
                {/* <p className="card-text">Stock: {stock}</p>
                <p className="card-text">Cantidad Minima:{cantMin}</p>
                <p className="card-text">Agregar:{onAdd}</p> */}
                {/* <button type="button" class="btn btn-primary">Compra</button> */}
                <CompraCarrito stock="5"/>
            </div>
        </div>
    )
}

export default ListaCard;