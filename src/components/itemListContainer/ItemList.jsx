import { useNavigate } from "react-router-dom";
import Item from "./Item";
import "./itemListStyle.css";


const ItemList =({items}) => {

    let irHome = useNavigate();

    const home = () => {
        irHome("/")
    }


    return (
        <>
            <h1 className="text-center titulos__principales"><strong>Eleji tu Mejor Ropa</strong></h1>
            {items.map((prod) => <Item key={prod.id} producto={prod}/>)}
            <div className="d-flex justify-content-center">
                <button onClick={home} className="btn btn-info btn-lg">Ir a pagina Principal</button>
            </div>
        </>
    )
}

export default ItemList;