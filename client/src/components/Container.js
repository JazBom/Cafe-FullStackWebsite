import React from "react";
import {
  BrowserRouter as Link
} from "react-router-dom";

function Container() {
  return (
    <div className="home">
    <div className="banner">
        <h1 className="lilo-heading">Lilo</h1>
        <h2 className="lilo-sub-heading">Brunch, bistro meals and craft beers in a relaxed, rustic-chic locale with playful green decor.</h2>
    </div>
    <div className="container">
    <div className="cards">
        <div className="card-one"><Link to="/about" className="link" style={{textDecoration: 'none', fontWeight: 'bold', fontSize: '1.3rem'}}>About</Link></div>
        <div className="card-two"><Link to="/menu" className="link" style={{textDecoration: 'none', fontWeight: 'bold', fontSize: '1.3rem'}}>Menu</Link></div>
    </div>
    </div>
    </div>
  );
}

export { Container };
