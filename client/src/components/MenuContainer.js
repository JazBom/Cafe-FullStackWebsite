import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { MenuForm } from "./MenuFormAdd";
import { MenuFormEdit } from "./MenuFormEdit";
import { MenuFormDelete } from "./MenuFormDelete";
import { MenuList } from "./MenuList";

// This container does the following
// 1. Function for items in list to show up in form when clicked
//2. Function to fetch all menu items from DB
//3. Function to add, updated and delete menu items
//4. Functions to set state and add menu items to state variable
//5. Passes all menu items ('menu') as props to children - forms for menu add, menu edit form, menu delete

const MenuContainer = () => {
 //initialise state variables
const [menuArray, setMenuArray] = useState([]);
const [menuEdit, setMenuEdit] = useState({ item: '', price: '', category: ''});
const [menuDelete, setMenuDelete] = useState({ item: '', price: '', category: ''});

const handleMenuClick = (menuIndex) => {
    const menu = menuArray[menuIndex];
    console.log('menu:', menu)
    setMenuEdit(menu);
    setMenuDelete(menu);
}

const handleEditMenu = (menu) => {
const foundMenuId = menuArray.findIndex((menuEl) => {
console.log('menuEl:', menuEl);
return menuEl._id === menu._id;
});
console.log('foundMenuId:', foundMenuId);
const newMenu = [...menuArray];
newMenu[foundMenuId] = menu;
setMenuArray(newMenu);

fetch(`http://localhost:9000/api/v1/menus/${menu._id}`, {
    method: 'PUT',
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(menu)
}).then((response) => {
    console.log('PUT menu response')
}).then((menuData) => {
    console.log("EDIT menu data", menuData);
    setMenuArray(menuData.data);
});
};

const handleDeleteMenu = (menu) => {
    const foundMenuId = menuArray.findIndex((menuEl) => {
    console.log('menuEl:', menuEl);
    return menuEl._id === menu._id;
    });
    console.log('foundMenuId:', foundMenuId);
    
    fetch(`http://localhost:9000/api/v1/menus/${menu._id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        console.log("DELETE menu response", response);
        return response.json();
    })
};

const handleMenuFormSubmit = (item, price, category) => {
const newMenu = { item: item, price: price, category: category};
const newMenu = [...menuArray];
newMenu.push(newMenu);
setMenuArray(newMenu);

fetch('http://localhost:9000/api/v1/menus', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMenu),
    }).then((response) => {
    console.log("POST menu response", response);
    })     
};

useEffect(() => {
    fetch('http://localhost:9000/api/v1/menus', {
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
}, []);


const tempMenuArray = [
    {_id: 1, item: 'egg muffin', price: '$8', category: 'breakfast'},
    {_id: 2, item: 'flat white', price: '$5', category: 'coffee'},
    {_id: 3, item: 'salad roll', price: '$10', category: 'lunch'}
    ];

return(
    <Router>
    <div>
        <MenuList menu={tempMenuArray} handleClick={handleMenuClick}/>
        
        <Link to="/menus/add">Add Menu Item</Link>
        <Link to="/menus/edit">Edit Menu Item</Link>
        <Link to="/menus/delete">Delete Menu Item</Link>

        <Switch>
            <Route path="/menus/add">
            <MenuForm submit={handleMenuFormSubmit} />
            </Route>
            <Route path="/menus/edit">
            <MenuFormEdit submit={handleEditMenu} menu={menuEdit}/>
            </Route>
            <Route path="/menus/delete">
            <MenuFormDelete submit={handleDeleteMenu} menu={menuDelete}/>
            </Route>
        </Switch>
    </div>
    </Router>
    );
};

export { MenuContainer };