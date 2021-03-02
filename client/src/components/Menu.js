import React from "react";
import { MenuList } from './MenuList';

export function Menu () {
// fetch all menu data and append to different categories (separate lists?)??
return (
  
        <div className="menu">
          
          <div className="text">
          <MenuList/>
          </div>

          <div className="img-div">
          <img src="https://i.imgur.com/LTeu8Pr.jpg" alt="coffee"/>
          <img src="https://i.imgur.com/Z9LzZUN.jpg?1" alt="food"/>
          </div>
        
        </div>
    )
}