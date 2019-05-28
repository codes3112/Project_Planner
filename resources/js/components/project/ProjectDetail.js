import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

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

    onDelete(project_id){
        axios.delete('http://localhost:8000/project/delete/'+project_id)
            .then(response=>{
                var projects = this.state.projects;
                for(var i=0; i<projects.length; i++){
                    if(projects[i].id == project_id ){
                        projects.splice(i,1);
                        this.setState({projects});
                    }
                }
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
                    <th scope="col">Action</th>
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
                            <td>
                                <Link to ={`/project/edit/${project.id}`}>Edit |</Link><a href="#" onClick={this.onDelete.bind(this, project.id)}> Delete</a></td>
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
