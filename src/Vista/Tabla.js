import React, {Component} from 'react';
import Encabezado from './Encabezado';
import Cuerpo from './Cuerpo';
//import Home from './Home';


class Tabla extends Component{
 render(){
    const { datosProductos} = this.props;
   
    return(

<table className="table">
<Encabezado/>
<Cuerpo datosProductos={datosProductos} />

</table>

    );
 }

}
export default Tabla;