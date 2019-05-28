import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./NavBar";
import Footer from "./Footer";


export default class Index extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
                <NavBar />
                

               
                <Footer />
            </div>
            </BrowserRouter>
        );
    }
}

if (document.getElementById("app")) {
    ReactDOM.render(<Index />, document.getElementById("app"));
}
