import CarWidget from "../NavBar/CarWidget";
import React, { useEffect, useState } from 'react';
import ItemDetail from "./itemDetail";


const ItemDetailContainer = () => {
    
const URL = "http://localhost:3001/BaseDeDatos";
const [products, setProducts] = useState([]);
const [cargando, setCargando] = useState(false);

useEffect(() => {
setCargando(true);
fetch(URL)
    .then((reponse) => reponse.json())
    .then((json) => setProducts(json))
    .catch((error) => console.error(error))
    .finally(() => setCargando(false));
}, []);

console.log(products)

return (
<>
    {cargando ? (
    <img src={CarWidget.cargando} />
    ) : (
    <div className="row">
            {products.map((prod) => <ItemDetail detalle={prod}/>)}
    </div>
    )}
</>
);
};

export default ItemDetailContainer;
