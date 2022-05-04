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
        <Routes>
          <Route path="/" element={<ItemListContainer titulo="Hola desde React Router"/>}/>
          <Route path="/category/:categoryid" element={<ItemListContainer titulo="Categoria de Productos"/>}/>
          <Route path="/product/:itemid" element={ <ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
          
           
    </div>
  );
}

        
      
      
      
      
export default App;
      


      


