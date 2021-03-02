import React from "react";
import {
  BrowserRouter as Link
} from "react-router-dom";

function Admin () {
    return (
        <div>
            <div className="container">
            <div className="cards">
            <div className="card-one"><Link to="/NewUserForm" className="link" style={{textDecoration: 'none', fontWeight: 'bold', fontSize: '1.3rem'}}>Register for New Log-in</Link></div>
            <div className="card-two"><Link to="/LogInForm" className="link" style={{textDecoration: 'none', fontWeight: 'bold', fontSize: '1.3rem'}}>Existing User Log-in</Link></div>
        </div>
        </div>
        </div>
    )
}

export { Admin };