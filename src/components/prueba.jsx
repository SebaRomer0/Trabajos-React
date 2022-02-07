
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

            {/* <div className='row justify-content-center img-fluid'>
              {cargando ? (
                <img src={CarWidget.cargando} />
              ) : (
                products.map((map) => {
                return <ListaCard key={map.id} pruebaCard={map}/>})
              )}
            </div> */}


            // function mostrarProductos() {
  //   return new Promise ((resolve,reject)=>{
  //     setTimeout(()=> resolve(BaseDeDatos), 6000);
  //   })
  // }


  // useEffect(() => {
  //   setCargando(true)
  //     mostrarProductos()
  //       .then((data) => setProducts(data))
  //       .catch((error) => console.error(error))
  //       .finally (() => setCargando(false));
  //   }, []);

  // const myTimeout = setTimeout(mostrarProductos, 8000);



