import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuList from './MenuList';
import { Form } from './Form';
import Button from 'react-bootstrap/Button';
// This container does the following
// 1. Function for items in list to show up in form when clicked
//2. Function to fetch all menu items from DB
//3. Function to add, updated and delete menu items
//4. Functions to set state and add menu items to state variable
//5. Passes all menu items ('menu') as props to children - forms for menu add, menu edit form, menu delete
const MenuForm = (props) => {
 //initialise state variables

const [menuArray, setMenuArray] = useState([]);
// const [menuEdit, setMenuEdit] = useState({ _id: '', item: '', price: '', category: ''});
// const [menuDelete, setMenuDelete] = useState({ _id: '', item: '', price: '', category: ''});

const handleClick = (menuIndex) => {
const menu = menuArray[menuIndex];
console.log('menu:', menu)
// setMenuEdit(menu);
// setMenuDelete(menu);
}

const handleFormSubmit = (_id, item, price, category) => {
    const newMenuItem = { _id: _id, item: item, price: price, category: category };

    fetch('http://localhost:9000/api/menu', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMenuItem),
        }).then((response) => {
        console.log("POST menu response", response);
        }).catch(err => { console.log(err) });
    
    const newMenuArray = [...menuArray];
    newMenuArray.push(newMenuItem);
    setMenuArray(newMenuArray);     

    };

    const handleFormEdit = (menu) => {
        const editMenuItemId = menuArray.findIndex((el) => {
        return el._id === menu._id;
        });
        const newMenuArray = [...menuArray];
        
        console.log('editMenuItem Id:', editMenuItemId);
        newMenuArray[editMenuItemId] = menu;
        setMenuArray(newMenuArray);
        
        fetch(`http://localhost:9000/api/menu/${menu._id}`, {
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

const handleFormDelete = (menu) => {
        const foundMenuId = menuArray.findIndex((menuEl) => {
        console.log('menuEl:', menuEl);
        return menuEl._id === menu._id;
        });
        console.log('foundMenuId:', foundMenuId);
        
        fetch(`http://localhost:9000/api/menu/${menu._id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            console.log("DELETE menu response", response);
            return response.json();
        })
    };

const tempMenuArray = [
    {_id: 1, item: 'egg muffin', price: '$8', category: 'breakfast'},
    {_id: 2, item: 'flat white', price: '$5', category: 'coffee'},
    {_id: 3, item: 'salad roll', price: '$10', category: 'lunch'}
    ];

return(
     <div className="menu-form">
         
         <div className="div-one-list">
         <MenuList menu={menuArray} handleClick={handleClick}/>
         </div>
         
         <div className="div-two-form">
         <Form menu={menuArray} submit={handleFormSubmit} editsubmit={handleFormEdit} deletesubmit={handleFormDelete}/>
         </div>

    </div>
    );
};

export { MenuForm };