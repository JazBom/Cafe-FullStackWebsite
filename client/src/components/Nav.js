import React from "react";
import {
  Link
} from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Nav() {
  return (
    <div className="navBar">

    <Button variant="info" className="homeButton" href="/home"></Button>
      
    <ul className="nav no-bull">
    <li><Link to="/about">About</Link></li>
    <li><Link to="/menu">Menu</Link></li>
    <li><a href='#Footer'>Location</a></li>
    <li><a href='#Footer'>Contact</a></li>
    </ul>
    
    </div> 
  );
};

export { Nav };