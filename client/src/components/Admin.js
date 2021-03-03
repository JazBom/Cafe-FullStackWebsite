import React from "react";
import { Link } from "react-router-dom";

import MenuList from './MenuList';
import Button from 'react-bootstrap/Button';


function Admin() {

    return (
        <div className="admin">
                <div className="cards">
                    <div className="card-one"><Link to="/admin/menu-update" className="link" style={{textDecoration: 'none', fontWeight: 'bold', fontSize: '1.3rem'}}>Update menu</Link></div>
                    <div className="card-two"><Link to="/admin/dogs" className="link" style={{textDecoration: 'none', fontWeight: 'bold', fontSize: '1.3rem'}}>Upload dog pics</Link></div>
                </div>
          
        </div>
    )
}

export { Admin };