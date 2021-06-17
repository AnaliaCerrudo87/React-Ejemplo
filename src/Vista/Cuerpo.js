
import React,{Component,useState} from "react"
import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button'
import firebase from "../Config/firebase" 

 const Cuerpo  =(props)=>{
    const filas=props.datosProductos.map((fila,indice)=>{
    const verDetalle = (props.verDetalle!==false?true:false);
    
        
        
    return(

<tr key={indice}>
    <th>{fila.data().name}</th>

    <th>{fila.data().price}</th>

    <th>{fila.data().sku}</th>
    
    <th>{fila.data().description}</th>
    
    
    {
                verDetalle && 
                <Button variant="outline-info" ><Link to={"/DetalleProducto/"+fila.data().id}>Ver Detalle</Link></Button>
                
                
            }
            
           

</tr>

    );
    })

    return <tbody>{filas}</tbody>
}
export default Cuerpo;