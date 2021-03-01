import React from "react";
import {
    Link
  } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function NavAdmin() {
  return (
    <div className="navBar">

    <Button variant="info" className="homeButton" href="/home"></Button>
      
    <ul className="nav no-bull">
    <li><Link to="/NewUserForm">New user</Link></li>
    <li><Link to="/LogInForm">Existing user</Link></li>
    </ul>
    
    </div> 
  );
};

export { NavAdmin };