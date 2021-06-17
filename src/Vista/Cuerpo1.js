import React,{Component,useState} from "react"
import Home from "../Paginas/Home"
import {Link} from "react-router-dom"
import firebase from "../Config/firebase"

const Cuerpo1 =(props)=>{
    const {id,price,name,description,photo_url,stock}=props
    
    
    return(


    <tr>
    <th>{id}</th>
    <th>{name}</th>
    <th>{description}</th>
    <th><img src={photo_url}></img></th>
    <th>{stock}</th>
    <th>{price}</th>
    
    <th><button  onClick={props.comprarProducto}>Comprar</button></th>
    


</tr>

    );
    

    return <tbody>{props}</tbody>
}


export default Cuerpo1;