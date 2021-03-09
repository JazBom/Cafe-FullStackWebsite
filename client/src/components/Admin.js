import React from "react";
import { Link } from "react-router-dom";

import MenuList from './MenuList';
import Button from 'react-bootstrap/Button';


function Admin() {

    return (
        <div className="admin">
                <div className="cards">
                    <div className="card-one"><Link to="/admin/menu-update" className="link" style={{textDecoration: 'none', fontWeight: 'bold'}}>Update menu</Link></div>
                    <div className="card-two"><Link to="/admin/dogs" className="link" style={{textDecoration: 'none', fontWeight: 'bold'}}>Upload dog pics</Link></div>
                </div>
          
        </div>
    )
}

export { Admin };