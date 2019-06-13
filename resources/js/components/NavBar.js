import React, { Component } from 'react';
import { withRouter, NavLink} from "react-router-dom";
import { getProfile } from "./Userfunctions";


class Navbar extends Component {
    

    logOut(e){
        e.preventDefault();
        localStorage.removeItem('usertoken');
        this.props.history.push('/');
    }
    render() {
        const loginRegLink =(
            <ul className="navbar-nav"> 
                        
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/login">Login </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/register">Register </NavLink>
                        </li>
            </ul>
                   
            )
            const userLink =( 
                <ul className="navbar-nav">                                                   
                        
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" >My Profile </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/project" >Projects </NavLink>
                        </li>
                        <li className="nav-item">
                            <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
                                Logout
                            </a>                    
                        </li>
                                              
                </ul>
                
                           
                        
                        
               
            
            )
            return(
                 
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
             < NavLink to="/" className="navbar-brand" style={{color:'#e0f7a5', fontWeight:'bolder'}} >My_Project_Planner</NavLink>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">                   
                    
                <ul className="navbar-nav mr-auto">  
                        <li className="nav-link">
                            <NavLink to="/" className="nav-item">
                                Home
                            </NavLink>
                        </li>
                        {localStorage.usertoken ? userLink : loginRegLink}
                    </ul>
                    <form className="form-inline my-2 my-lg-0">                            
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                   </div>
                   
    
                    
                </nav>
            )
        }
    }
    
    
    export default withRouter(Navbar)
    
                


                            

          
