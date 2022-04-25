import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div class="container">
        <div class="row ">
          <ItemListContainer name='Bob Esponja' precio='$750'/>
          <ItemListContainer name='Hombre Araña' precio='$500'/>
          <ItemListContainer name='Sirenita' precio='$250'/>
          <ItemListContainer name='Astronautas' precio='$400'/>
          <ItemListContainer name='Jovenes Titanes' precio='$650'/>
          <ItemListContainer name='Animales del bosque' precio='$200'/>
        </div>
      </div>
    </div>
  );
}


export default App;
