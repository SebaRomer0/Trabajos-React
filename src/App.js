import React, { useEffect, useState } from 'react';
import './App.css';
import './components/NavBar/NavBar.css'
import NavBar from './components/NavBar/NavBar';
import ListaCard from './components/NavBar/itemListContainer';
import CarWidget from './components/NavBar/CarWidget';
import swal from 'sweetalert';
import mostrarProductos, { Productos } from './components/item';
import Item from './components/prueba';


function App() {

  const [products,setProducts] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setCargando(true)
    mostrarProductos()
      .then((data) => setProducts(data)  )
      .catch((error) => console.error(error))
      .finally (() => setCargando(false));
  }, []);

  return (
    <>
        <div className="App">
            <NavBar/>
          <div className='container-fluid'>
            <div className='row justify-content-center img-fluid'>
              {cargando ? (
                <img src={CarWidget.cargando} />
              ) : (
                products.map((map) => {
                return <ListaCard key={map.id} pruebaCard={map}/>})
              )}
            </div>
          </div>
        </div>
    </>
  );
}

export default App;
