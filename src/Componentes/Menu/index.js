import React,{Component} from "react"
import {Link} from "react-router-dom"
import {Navbar,Nav} from 'react-bootstrap'
import Option from "./Option"
import EcommerceContext from "../../Context/EcommerceContext"

function Menu(props){

    return(
        <EcommerceContext.Consumer>
            {
                context=>
            <div>

            <Navbar bg="light"expand="lg">
                <Navbar.Brand href="#Inicio"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">

                    {
                                    context.userLogin &&
                                    <>
                                    <Option path="/Inicio" label="Inicio"/> 
                                     
                                    <Nav.Link  onClick={()=>context.logoutUser(false)}>Salir</Nav.Link> 
                                    </>
                                }

                                {
                                    !context.userLogin &&
                                    <>
                                    <Option path="/Inicio" label="Inicio"/>
                                    <Option path="/registro" label="Registro"/>  
                                    <Option path="/Login" label="Login"/>
                                    
                                    </>
                                }
                            
                </Nav>
                </Navbar.Collapse>
            </Navbar>
           
        </div>
        }
        </EcommerceContext.Consumer>
        )
}
export default Menu;