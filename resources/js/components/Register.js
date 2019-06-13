import React, { Component } from 'react'
import { register } from './Userfunctions';
import ErrorAlert from './ErrorAlert';

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            error: {},
            alert_message: ""

        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault();
        const newUser = {
            name: this.state.first_name + ' ' + this.state.last_name,
            email: this.state.email,
            password: this.state.password
        }

        register(newUser).then(res => {
            console.log("from register", res)
            if (res) {
                this.props.history.push('/login')
            } else {

                this.setState({ alert_message: "error" })
            }

        })

    }
    render() {
        return (
            <div className="container" style={{ textAlign: 'left' }}>
                <hr />
                {this.state.alert_message == "error" ? <ErrorAlert /> : null}
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">
                                Register
                            </h1>
                            <div className="form-group">
                                <label htmlFor="first_name"> First Name</label>
                                <input type="text"
                                    className="form-control"
                                    name="first_name"
                                    placeholder="Enter first name"
                                    value={this.state.first_name}
                                    onChange={this.onChange}
                                    required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="last_name"> Last Name</label>
                                <input type="text"
                                    className="form-control"
                                    name="last_name"
                                    placeholder="Enter last name"
                                    value={this.state.last_name}
                                    onChange={this.onChange}
                                    required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email"> Email</label>
                                <input type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password"> Password</label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    required />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
