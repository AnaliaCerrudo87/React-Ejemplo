import './App.css';
import {BrowserRouter,Route} from "react-router-dom"
import Home from "./Paginas/Home"

import Registro from "./Paginas/Registro"
import Login from "./Paginas/Login"
import DetalleProducto from "./Paginas/DetalleProducto"
import Menu from "./Componentes/Menu/index"
import { Container } from 'react-bootstrap';
import GlobalState from "./Context/GlobalState"
import Inicio from "./Inicio"
import'bootstrap/dist/css/bootstrap.min.css';




function App() {
 
  
  
 
  return (
    <GlobalState>
    <BrowserRouter>
     <Menu/>

      <Route path='/inicio' component={Inicio} exact />
      <Route path='/home' component={Home} exact />
      <Route path='/registro/' component={Registro} exact />
      <Route path='/Login' component={Login} exact />
      <Route path='/DetalleProducto/:id' component={DetalleProducto} exact />
      
    </BrowserRouter>
    </GlobalState>

  );
}

export default App;