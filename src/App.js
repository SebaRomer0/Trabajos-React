import React from 'react';
import './App.css';
import './components/NavBar/NavBar.css'
import NavBar from './components/NavBar/NavBar';
import { Fragment } from 'react';
import ListaCard from './components/NavBar/itemListContainer';
import CarWidget from './components/NavBar/CarWidget';
import Layout from './components/prueba';
import EstaLloviendo from './components/prueba';
import CompraCarrito from './components/NavBar/ItemCount';
import swal from 'sweetalert';


function App() {
  return (
    <>
        <div className="App">
            <NavBar/>
          <div className='container-fluid'>
            <div className='row justify-content-center img-fluid'>
                <ListaCard img={CarWidget.cam1} nombre="Camisa 1" precio="1000$"/>
                <ListaCard img={CarWidget.cam2} nombre="Camisa 2" precio="1500$"/>
                <ListaCard img={CarWidget.pant1} nombre="Pantalon 1" precio="2000$"/>
                <ListaCard img={CarWidget.pant2} nombre="Pantalon 2" precio="3000$"/>

            </div>
          </div>
        </div>
    </>
  );
}

export default App;
