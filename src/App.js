import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/NavBar/NavBar.css'
import NavBar from './components/NavBar/NavBar';
import MuestraDeLaCard from './components/itemListContainer/ItemListCont';
import ItemDetailContainer from './components/itemDetail/itemDetailContainer';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from './components/itemListContainer/homePage';


function App() {

  return (

    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='producto'>
            <Route index element={<MuestraDeLaCard />} />
            <Route path=':productoId' element={<ItemDetailContainer />} />
          </Route>
        </Route>
        
      </Routes>
    </BrowserRouter>








    // <>
    //     <div className="App">
    //         <NavBar/>
    //       <div className='container-fluid'>
    //         <MuestraDeLaCard/>
    //         <ItemDetailContainer/>
    //       </div>
    //     </div>
    // </>
  );
}

export default App;
