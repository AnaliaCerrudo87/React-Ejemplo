import React,{Component,useState} from "react"
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import {Link} from "react-router-dom"

import Encabezado1 from '../Vista/Encabezado1';

function Producto(props){
    const {data,titulo} = props
    
    const verDetalle = (props.verDetalle!==false?true:false);

    
    const {id,price,name,description,photo_url,stock,sku}=props.data
    const [mensaje,setMensaje]=useState("")

    const comprar = ()=>{
        
        if(data.stock-1==0){
            setMensaje("No hay stock")
        }else{
            setMensaje("Gracias por su compra!!")
        }
    }
    return(
        
          <div>
             
        <table>
            
            <Encabezado1/>
            <tr>
            <th>{sku}</th>
            <th>{name}</th>
            <th>{description}</th>
            <th><img src={photo_url}></img></th>
            <th>{price}</th>
            <th>{stock}</th>
            <th><button onClick={comprar}>Comprar</button></th>
            {
                verDetalle && 
                <button ><Link to={"/producto/"+id}>Ver Detalle</Link></button>
            }
            </tr>
            
        </table>
        <br></br>
        <Alert variant="light">
            <Alert.Heading>{mensaje}</Alert.Heading>
        </Alert>
        <br></br>
        <Button variant="outline-info" size="lg" block><Link to={"/Home/"}>Ver Lista Productos</Link></Button>
        </div>  
    )
}
export default Producto;