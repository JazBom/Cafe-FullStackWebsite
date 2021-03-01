import React from "react";
import MenuList from '../private/MenuList';

function Menu () {
// fetch all menu data and append to different categories (separate lists?)??
return (
  
        <div className="menu">
          
          <div className="text">
          <MenuList/>
          </div>

          <div className="img-div">
          <img src="https://i.imgur.com/LTeu8Pr.jpg"/>
          <img src="https://i.imgur.com/Z9LzZUN.jpg?1"/>
          </div>
        
        </div>
    )
}

export { Menu };