import './App.css';
import './components/NavBar/NavBar.css'
import NavBar from './components/NavBar/NavBar';
import MuestraDeLaCard from './components/itemListContainer/ItemListCont';
import ItemDetailContainer from './components/itemDetail/itemDetailContainer';


function App() {

  return (
    <>
        <div className="App">
            <NavBar/>
          <div className='container-fluid'>
            <MuestraDeLaCard/>
            <ItemDetailContainer/>
          </div>
        </div>
    </>
  );
}

export default App;
