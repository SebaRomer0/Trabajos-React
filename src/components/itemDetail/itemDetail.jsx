
const ItemDetail = (detalle) => {

    return(
        <div className="card" style={{width: 300}}>
            <p>Nombre: {detalle.nombre}</p>
            <p>Descripcion: {detalle.descripcion} </p>            
        </div>
    )
}

export default ItemDetail;