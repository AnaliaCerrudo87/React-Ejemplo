import React, {Component} from 'react';
import Encabezado1 from './Encabezado1'
import Cuerpo1 from './Cuerpo1';
import Home from '../Paginas/Home';


class Tabla1 extends Component{
 render(){
    const { datosProductos} = this.props;
    return(

<table className="table">
<Encabezado1/>
<Cuerpo1 datosProductos={datosProductos} />

</table>

    );
 }

}
export default Tabla1;
