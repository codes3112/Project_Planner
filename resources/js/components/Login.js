import React, { Component } from "react";
import { login } from "./Userfunctions";

import ErrorAlert from './ErrorAlert';


export default class Login extends Component {
    
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            error:{},
            alert_message:""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();       
        const user = {
            email: this.state.email,
            password: this.state.password
        };

        if (user.email && user.password) {
            console.log(user.email, user.password) 
              
            login(user).then(res => {
                if(res){
                console.log("inside login",res)
                this.props.history.push("/project");}else{
            
                this.setState({alert_message:"error"})  }           
            });
            
         }
    }
    render() {
        return (
            <div className="container" style={{textAlign:'left'}}>
            <hr/>
            {this.state.alert_message == "error" ? <ErrorAlert/>:null}
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form  onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">
                                Please Sign In
                            </h1>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                            >
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
