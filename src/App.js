import logo from './logo.svg';
import './App.css';
import NavBar from './navBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div>
      <ItemListContainer/>
      </div>


    </div>
  );
}

export default App;
