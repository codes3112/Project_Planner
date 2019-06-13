import React from 'react'
import plan from '../../plan.jpg'


export default function Home() {
    console.log(plan)
    return (
        <div className="jumbotron jumbotron-fluid" style={{marginBottom:0}}>
            <div className="container" >
                <h1 className="display-4">Your Projects Organizer</h1>
                <p className="lead">Plan and Organize your projects And Stay ahead...</p>
            </div>
            <img src={plan} className="img-fluid " style={inLine} alt="Project_plan" ></img>
        </div>
    )
}
 var inLine={ 
              maxWidth: '100%',
              height:'auto',
              
            }