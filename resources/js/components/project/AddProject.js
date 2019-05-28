import React, { Component } from 'react';
import axios from 'axios';

export default class AddProject extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            project_name: "",
            project_body: "",
            project_status:"1"
            
        }

    }
    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        const project = {
            project_name: this.state.project_name,
            project_body: this.state.project_body,
            project_status:this.state.project_status
        }
        console.log(project);
        axios.post('http://localhost:8000/api/project/store', project)
            .then(res => console.log(res.data));

        this.setState({
            project_name: "",
            project_body: "",
            project_status:"1"
            
        })

    }

    render() {

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="project_name" className="badge badge-secondary">Project Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="project_name"
                            placeholder="Enter Project Title"
                            onChange={this.handleChange.bind(this)}
                            value={this.state.project_name}
                        />
                        <label htmlFor="project_body" className="badge badge-secondary">Project Details</label>
                        <textarea
                            className="form-control" rows="4"
                            id="project_body"
                            placeholder="Enter Project Details"
                            onChange={this.handleChange.bind(this)}
                            value={this.state.project_body}
                        />
                         <label htmlFor="project_status" className="badge badge-secondary" value={this.state.value} onChange={this.handleChange.bind(this)}>Project Status</label>
                            <select className="form-control" id="project_status">
                            <option defaultValue="1">Active</option>
                            <option value="0">InActive</option>
                            
                        </select>


                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
