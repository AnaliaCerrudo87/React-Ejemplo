import React,{useState,useEffect} from "react"
import Tabla1 from "../Vista/Tabla1"
import Registro from "./Registro"
import Home from "./Home"


import {Link} from 'react-router-dom';
import firebase from "../Config/firebase"



import Producto from "../Componentes/Producto"

function DetalleProducto(props) {

    const id = props.match.params.id;
    const [producto,setProducto] = useState({});
    const [loading,setLoading] = useState(true);
    const [mensaje,setMensaje] = useState("");
  
    useEffect(
        ()=>{
           
            firebase.db.doc("Productos/"+id)
            .get()
            .then(doc=>{

                console.log("DOc",doc)
                setProducto(doc)
                setLoading(false);
            })

        },
        []
    )
    
    if(loading){
        return(
            /* */
            <div>
                
                loading...
            </div>
        )
    }else{
        return(
         
        <Producto  id={producto.id} data={producto.data()} verDetalle={false}/>
        )
    }
        
    
}
export default DetalleProducto;