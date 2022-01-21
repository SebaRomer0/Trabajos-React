import CarWidget from "./CarWidget";

function ListaCard({img,nombre,precio}) {
    return (
        <div className="card" style={{width: 250}}>
            <img src={img} class="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">Nombre:{nombre}</h5>
                <p className="card-text">Precio:{precio}</p>
                <button type="button" class="btn btn-primary">Compra</button>
            </div>
        </div>
    )
}

export default ListaCard;