import CarWidget from "../NavBar/CarWidget"
import React, { useEffect, useState } from 'react';
import ItemList from "./ItemList";
import BaseDeDatos from "../baseDeDatos/BaseDeDatos.jsx";

const MuestraDeLaCard = () => {

  const URL = "http://localhost:3001/BaseDeDatos";
  const [products,setProducts] = useState([]);
  const [cargando, setCargando] = useState(false);


  useEffect(() => {
    setCargando(true)
      fetch(URL)
        .then((reponse) => reponse.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error(error))
        .finally (() => setCargando(false));
    }, []);

return(
        <>
          {cargando
                    ? (<img src={CarWidget.cargando} />)
                    : (<ItemList items={products} />)
          }
        </>

    )
}

export default MuestraDeLaCard;
