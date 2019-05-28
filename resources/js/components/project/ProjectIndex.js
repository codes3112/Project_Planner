import React, { Component } from "react";
import { BrowserRouter as Router, NavLink, Route , Switch} from "react-router-dom";
import ProjectDetail from './ProjectDetail'
import AddProject from './AddProject'
import EditProject from './EditProject'



class ProjectIndex extends Component {
    render() {
        return (
            <div>
                
                <Router>
                    <div>
                        <hr/>
                        <NavLink to="/project" className="btn btn-primary">Project List</NavLink>&nbsp;&nbsp;
                        <NavLink to="/project/add" className="btn btn-primary">Add New Project</NavLink>
                    <Switch>
                        <Route exact path='/project' component={ProjectDetail} />
                        <Route path='/project/add' component={AddProject} />
                        <Route path='/project/edit/:id' component={EditProject} />
                    </Switch>        
                    </div>
                </Router>
            </div>
        );
    }
}
export default ProjectIndex;
