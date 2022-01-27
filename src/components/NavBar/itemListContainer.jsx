import CarWidget from "./CarWidget";
import ControlesDeLaCard from "./ItemCount";


const ListaCard = ({pruebaCard}) => {
    return (
        <div className="card" style={{width: 350}}>
            <img src={pruebaCard.img} className="card-img-top"/>
            <div className="card-body">
                <h5>Nombre: {pruebaCard.nombre}</h5>
                <p>Precio: {pruebaCard.precio}</p>
                <ControlesDeLaCard stock={pruebaCard.stock}/>
            </div>
        </div>
    )
}

export default ListaCard; 