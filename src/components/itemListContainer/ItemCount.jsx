import { useEffect } from "react";
import { useState } from "react";
import swal from 'sweetalert';
import ItemDetailContainer from "../itemDetail/itemDetailContainer";


const ControlesDeLaCard = ({stock}) =>  {
    const [cantMin,setcantMin] = useState(1);
    const [onAdd,setonAdd] = useState (1);

    const restarCompra =() => { 
        if (cantMin === 1){
            swal ('La Compra minima es una Prenda')           
        }else {
            setcantMin(cantMin - 1)
            setonAdd(onAdd - 1)
        }
    };
    
    const agregarCompra =() => {
        if(cantMin === stock ){
            swal ('Llegaste a la cantidad de Prenda que tenemos Stock')
        }else{
            setonAdd (onAdd + 1);
            setcantMin (cantMin +1);
        }
    }

    
    return (
            <div>
                <p className="card-text">Stock: {stock}</p>
                <p className="card-text">Cantidad Minima:{cantMin} <button className="btn btn-primary" onClick={restarCompra}>-</button></p>
                <p className="card-text">Agregar una Prenda mas :{onAdd} <button className="btn btn-primary" onClick={agregarCompra}> + </button></p>
                <button className="btn btn-primary">Agregar al Carrito</button>
                <button className="btn btn-primary" >Informacion del Producto</button>
                <button type="button" className="btn btn-primary">Compra</button>
            </div>
    )
};

export default ControlesDeLaCard;