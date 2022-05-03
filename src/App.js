import './App.css';
import NavBar from './components/NavBar';
/* import ItemListContainer from './components/ItemListContainer'; */
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="container">
        <div className="row ">
          {/* <ItemListContainer></ItemListContainer> */}
          <ItemDetailContainer id={6}></ItemDetailContainer>
          <ItemDetailContainer id={2}></ItemDetailContainer>
          <ItemDetailContainer id={3}></ItemDetailContainer>
          <ItemDetailContainer id={4}></ItemDetailContainer>
          <ItemDetailContainer id={1}></ItemDetailContainer>
          <ItemDetailContainer id={7}></ItemDetailContainer>
        </div>
      </div>
    </div>
  );
}


export default App;
