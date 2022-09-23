import './App.css';

import NavBar from './components/NavBar';

import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
     <NavBar/>
    
     <ItemListContainer>
          <h2>Carrito Compras</h2>
          <p>Producto 1</p>
     </ItemListContainer>
     </div>
  );
}

export default App;
