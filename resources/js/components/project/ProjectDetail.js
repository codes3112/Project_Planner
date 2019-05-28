import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Pagination from "react-js-pagination";

export class ProjectDetail extends Component {
    constructor(){
        super();
        this.state ={
            projects:[],
            activePage : 1,
            itemsCountPerPage : 1,
            totalItemsCount : 1,
            pageRangeDisplayed:3
        }
        this.handlePageChange=this.handlePageChange.bind(this);

    }
    
    componentDidMount() {
        axios.get('http://localhost:8000/project')
        .then(response=>{
            this.setState({
                projects:response.data.data,
                itemsCountPerPage:response.data.per_age,
                totalItemsCount:response.data.total,
                activePage:response.data.current_page
            });
        })
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        //this.setState({activePage: pageNumber});
        //"http://localhost:8000/project?page=1"
        axios.get('http://localhost:8000/project?page='+pageNumber)
        .then(response=>{
            this.setState({
                projects:response.data.data,
                itemsCountPerPage:response.data.per_age,
                totalItemsCount:response.data.total,
                activePage:response.data.current_page
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
                <div className="d-flex justify-content-center">
                <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.activePage}
                        totalItemsCount={this.state.totalItemsCount}
                        pageRangeDisplayed={this.state.pageRangeDisplayed}
                        onChange={this.handlePageChange}
                        itemClass="page-item"
                        linkClass="page-link"
                />
          </div>
            </div>
            
        )
    }
}

export default ProjectDetail
