import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar/>
          <div className="container">
            <div className="row">
              <Routes>
                <Route path="/" element={<ItemListContainer titulo="Hola desde React Router"/>}/>
                <Route path="/category/:categoryid" element={<ItemListContainer titulo="Categoria de Productos"/>}/>
                <Route path="/product/:itemid" element={ <ItemDetailContainer />} />
              </Routes>
            </div>
          </div>
      </BrowserRouter>
        
      
      
      
      
    </div>
  );
}

export default App;
      


      


