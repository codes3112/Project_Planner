import React from "react";
import { BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ProjectIndex from './project/ProjectIndex';
const Navbar = () => {
    return (
        <Router>
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                < NavLink to="/" className="navbar-brand" >My_Project_Planner</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/project" >Projects </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" >About </NavLink>
                        </li>
                    </ul>
                        
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                </div>
            </nav>
                   <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} /> 
                        <Route exact path="/project" component={ProjectIndex} />
                    </Switch>          

                        
            </div>   
        </Router>
        



                );
            };
            
            export default Navbar;
