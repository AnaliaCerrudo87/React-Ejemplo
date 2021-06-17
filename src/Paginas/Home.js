import Tabla from "../Vista/Tabla"
import Login from "./Login"
import Registro from "./Registro"
import Menu from "../Componentes/Menu/index"
import firebase from "../Config/firebase" 
import {Link} from 'react-router-dom';
import React,{useState,useEffect} from "react"

function Home(props) {

const [productos,setProductos] = useState([]);
const [loading,setLoading] = useState(true);

const [mensaje,setMensaje] = useState("");
//componentDidMount
useEffect(
    ()=>{
        
        
         firebase.db.collection("Productos")
         .get()
         .then(querySnapshot=>{
            console.log(querySnapshot.docs)
           
             datosProductos:setProductos(querySnapshot.docs);
             setLoading(false);
            
            
          console.log("Conexion Firebase",firebase.database())
       
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
            <div>
                
                <div><h1>Lista de Productos</h1></div>
                <br></br>
                <Tabla datosProductos={ productos} />
                <div><h2>{setMensaje.mensaje}</h2></div>
                
            </div>
           
        );
    }


}

export default Home;