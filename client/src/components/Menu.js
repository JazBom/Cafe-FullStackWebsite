import React, { useState, useEffect } from "react";
import MenuList from './MenuList';

export function Menu () {

  const[menuArray, setMenuArray] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/api/menu', {
      method: "GET",
      headers: {
          "Content-Type": "application/json"
      },
    })
    .then((response) => {
        console.log("GET menu response", response);
        return response.json();
    }).then((menuData) => {
        console.log("GET menu data", menuData);
        setMenuArray(menuData.data);
    });
  });

return (
        <div className="menu">
          
          <div className="text">
            <div>
            <MenuList menu={menuArray} canClick="false" />
          
            </div>
          </div>

          <div className="img-div">
          
          <img src="https://i.imgur.com/Z9LzZUN.jpg?1" alt="food"/>
          </div>
        
        </div>
    )
}