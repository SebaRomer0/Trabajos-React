
import { useState } from "react";

const Item =({product}) => {
    return (
        <div>
            <img src={product.img}/>
            <p>Nombre:{product.nombre}</p>
            <p>Precio:{product.precio}</p>
            <p>Stock:{product.stock}</p>
        </div>
    );
};

export default Item;