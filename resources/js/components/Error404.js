import React from 'react';
import {Link} from 'react-router-dom';

export default function Error404() {
    return (
        <div className="alert alert-danger" role="alert">
                 <h3> 404 Page Not Found</h3>
                 <Link to="/" className="alert-link"> Back to Home</Link>
        </div>
    )
}
