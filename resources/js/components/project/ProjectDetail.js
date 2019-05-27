import React, { Component } from 'react';
import axios from 'axios';

export class ProjectDetail extends Component {
    constructor(){
        super();
        this.state ={
            projects:[]
        }

    }

    componentDidMount() {
        axios.get('http://localhost:8000/project')
        .then(response=>{
            this.setState({
                projects:response.data
            });
        })
    }
    
    render() {
        
        return (
            <div className="container">
               <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Project Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Created_At</th>
                    <th scope="col">Updated_At</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.projects.map(project=>{
                        
                        return(
                        <tr key={project.id}>
                        <th scope="row" >{project.id}</th>
                            <td>{project.name}</td>
                            <td>{project.active ==1 ? ('Active'):'InActive'}</td>
                            <td>{project.created_at}</td>
                            <td>{project.updated_at}</td>
                        </tr>
                        )
                    })
                }
                    
                </tbody>
                </table>
            </div>
        )
    }
}

export default ProjectDetail
