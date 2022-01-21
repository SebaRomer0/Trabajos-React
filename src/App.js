import React from 'react';
import './App.css';
import './components/NavBar/NavBar.css'
import NavBar from './components/NavBar/NavBar';
import { Fragment } from 'react';
import ListaCard from './components/NavBar/itemListContainer';
import CarWidget from './components/NavBar/CarWidget';


function App() {
  return (
    <Fragment>     
      <div className="App">
          <NavBar/>
          <div className='container-fluid'>
            <div className='row justify-content-center'>
                <ListaCard img={CarWidget.cam1} nombre="Camisa 1" precio="1000$"/>
                <ListaCard img={CarWidget.cam2} nombre="Camisa 2" precio="1500$"/>
                <ListaCard img={CarWidget.pant1} nombre="Pantalon 1" precio="2000$"/>
                <ListaCard img={CarWidget.pant2} nombre="Pantalon 2" precio="3000$"/>
            </div>
          </div>
            

            
            {/* <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" /> 
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aprender React
              </a>
            </header> */}
        </div>
    </Fragment>

  );
}

export default App;
