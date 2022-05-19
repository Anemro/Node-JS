import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContexProvider } from './store/CartContext';
import CartView from './components/CartView';
import dataToFireBase  from './jasonToFirestore';




function App() {
  return (
    <div className="App">
      
      <CartContexProvider>
        <BrowserRouter>
          <NavBar/>
          {/* <button onClick={ dataToFireBase }>Subir datos</button>  Boton actualizar base de datos*/}
          <Routes>
            <Route path="/" element={<ItemListContainer titulo="Hola desde React Router"/>}/>
            <Route path="/category/:categoryid" element={<ItemListContainer titulo="Categoria de Productos"/>}/>
            <Route path="/product/:itemid" element={ <ItemDetailContainer />} />
            <Route path="/cart" element={ <CartView /> }/>
          </Routes>
        </BrowserRouter>
      </CartContexProvider>
    </div>
  );
}

          
           

        
      
      
      
      
export default App;
      


      


