import React,{useState} from "react"
import {Link} from 'react-router-dom';
import firebase from "../Config/firebase"
import Menu from "../Componentes/Menu/index"
import Button from 'react-bootstrap/Button'

import AlertCustom from "../Config/AlertCustom";


function Registro(){
    const [form,setForm] = useState({nombre:'',apellido:'',email:'',password:''})
    const [alert,setAlert] = useState({variant:"",text:""})
    

    const handleSubmit = (event)=>{
        event.preventDefault();
        let email=form.email;
        let password=form.password;
        firebase.auth.createUserWithEmailAndPassword(email,password)
        .then((data)=>{

            console.log("Usuario creado",data.user.uid)
            firebase.db.collection("Usuarios").add({

                nombre: form.nombre,
                apellido: form.apellido,
                email: form.email,
                userId: data.user.uid
            })
            .then (data=>{

                console.log(data);
                setAlert({variant:"success",text:"Registro Exitoso!"})
                
            })
            .catch(error=>{
                console.log("Error al agregar",error)
                setAlert({variant:"danger",text:"Ha ocurrido un error,intente nuevamente"})
            })

        })
        .catch ((error)=>{

            console.log("Error", error);
            setAlert({variant:"danger",text:"Ha ocurrido un error,intente nuevamente"})
            
        })
        
    }
    const handleChange = (event)=>{
        const target = event.target;
        const name = event.target.name
        const value = event.target.value
       
        setForm({...form,[name]:value})
    }

    
    
    return(
        /* */
       
        <div className="fondo1">
         
        <form onSubmit={handleSubmit} className="Tp">
            <div >
                <label>Nombre</label>
                <input type="text" name="nombre" value={form.nombre} onChange={handleChange}></input>
            </div>
            <div>
                <label>Apellido</label>
                <input type="text" name="apellido" value={form.apellido} onChange={handleChange}></input>
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange}></input>
            </div>
            <div>
                <label>Contraseña</label>
                <input type="password" name="password" value={form.password} onChange={handleChange}></input>
            </div>
            <Button variant="success" type="submit">Registrarse</Button>
            
            <AlertCustom variant={alert.variant} text={alert.text}/> 
        </form>
        
        </div>
    )
    
}
export default Registro;