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
          <ItemListContainer></ItemListContainer>
        </div>
      </div>
    </div>
  );
}


export default App;
