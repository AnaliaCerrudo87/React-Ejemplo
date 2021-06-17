import React,{useState,useContext} from "react"

import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import {useHistory} from 'react-router-dom';
import firebase from "../Config/firebase"
import EcommerceContext from "../Context/EcommerceContext"
import AlertCustom from "../Config/AlertCustom";

function Login(){
    const context = useContext(EcommerceContext)
    const [form,setForm] = useState({email:'',password:''})
    const [alert,setAlert] = useState({variant:"",text:""})
    const history=useHistory();

    const handleSubmit = (event)=>{
        event.preventDefault()
        firebase.auth.signInWithEmailAndPassword(form.email,form.password)
    .then(data=>{
        context.loginUser()
        console.log("Login correcto",data)
        history.push("/home")
    })

.catch(error=>{
    setAlert({variant:"danger",text:"Login Incorrecto"})
    console.log("Error",error)
    
})

}
            
 
    
    const handleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value
       
        setForm({...form,[name]:value})
    }

    return(
        /* */
        <div className="fondo">
           
        <form onSubmit={handleSubmit} className="Tp">
            <div >
                <label>Usuario</label>
                <input type="email" name="email" value={form.email} onChange={handleChange}></input>
            </div>
           
            <div>
                <label>Contraseña</label>
                <input type="password" name="password" value={form.password} onChange={handleChange}></input>
            </div>
            <Button variant="secondary" type="submit" >Login</Button>
            <AlertCustom variant={alert.variant} text={alert.text}/> 
          <br></br>
            
           
        </form>
        
        </div>
    )
}

export default Login;