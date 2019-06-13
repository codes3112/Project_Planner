import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from "./NavBar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import ProjectIndex from './project/ProjectIndex';
import Login from './Login';
import Register from './Register';
import Error404 from './Error404';


export default class Index extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
                <NavBar />
                <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} /> 
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/project" component={ProjectIndex} />                        
                        <Route exact path='/project/add' component={ProjectIndex} />
                        <Route exact path='/project/edit/:id' component={ProjectIndex} />
                        <Route path='/' component={Error404} />
                    </Switch> 

               
                <Footer />
            </div>
            </BrowserRouter>
        );
    }
}

if (document.getElementById("app")) {
    ReactDOM.render(<Index />, document.getElementById("app"));
}
