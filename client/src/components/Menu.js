import React, { useState, useEffect } from "react";
import MenuList from './MenuList';

export function Menu () {
// fetch all menu data FROM DB and render under different categories lists
// render in div with classname 'text'

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


// const tempMenuArray = [
//   {_id: 1, item: 'egg muffin', price: '$8', category: 'breakfast'},
//   {_id: 2, item: 'flat white', price: '$5', category: 'coffee'},
//   {_id: 3, item: 'salad roll', price: '$10', category: 'lunch'}
//   ];
return (
        <div className="menu">
          
          <div className="text">
            <div>
            <h3>Menu</h3>
            <MenuList menu={menuArray} canClick="false" />
            {/* <ul>
              <li>{tempMenuArray[0].item} - {tempMenuArray[0].price}</li>
              <li>{tempMenuArray[1].item} - {tempMenuArray[1].price}</li>
              <li>{tempMenuArray[2].item} - {tempMenuArray[2].price}</li>
            </ul> */}
            </div>
          </div>

          <div className="img-div">
          {/* <img src="https://i.imgur.com/LTeu8Pr.jpg" alt="coffee"/> */}
          <img src="https://i.imgur.com/Z9LzZUN.jpg?1" alt="food"/>
          </div>
        
        </div>
    )
}