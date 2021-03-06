import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuList from "./MenuList";
import { Form } from "./Form";

//1. Function for items in list to show up in form when clicked
//2. Function to fetch all menu items from DB and render in MenuList
//3. Function to add, updated and delete menu items
//4. Functions to set state and add menu items to state variable

const MenuForm = (props) => {
  //initialise state variables

  const [menuArray, setMenuArray] = useState([]);
  const [menuEditItem, setMenuEditItem] = useState({
    _id: "",
    item: "",
    price: "",
    category: "",
  });
  const [menuDeleteItem, setMenuDeleteItem] = useState({
    _id: "",
    item: "",
    price: "",
    category: "",
  });
  const [selectedMenuItem, setSelectedMenuItem] = useState({
    _id: "",
    item: "",
    price: "",
    category: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const onMenuItemClick = (menuElId) => {
    const menuElIndex = menuArray.findIndex((el) => el._id === menuElId);
    const menuEl = menuArray[menuElIndex];
    setSelectedMenuItem(menuEl);
  };

  // Add item button logic in menu form
  const handleFormSubmit = (_id, item, price, category) => {
    const newMenuItem = {
      _id: _id,
      item: item,
      price: price,
      category: category,
    };
    const newMenuArray = [...menuArray];

    fetch("http://localhost:9000/api/menu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMenuItem),
    })
      .then((response) => {
        console.log(response.status);
        if (response.status === 201 || response.status === 200) {
          console.log("POST menu response", response);
          newMenuArray.push(newMenuItem);
          setMenuArray(newMenuArray);

        } else if (response.status === 500) {
          response.json().then((body) => {
            console.log(body);
            setMenuArray(menuArray);
            setErrorMessage("Could not save - is the ID unique?");
          });
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("Could not save - is the ID unique?");
      });
  };


  // Edit item button logic in menu form
  const handleFormEdit = (_id, item, price, category) => {
    const menuEditItem = {
      _id: _id,
      item: item,
      price: price,
      category: category,
    };
    setMenuEditItem(menuEditItem);
    const newMenuArray = [...menuArray];
  

    fetch(`http://localhost:9000/api/menu/${menuEditItem._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(menuEditItem),
      })
    .then((response) => {
      console.log(response.status);
      if (response.status === 201 || response.status === 200) {
        console.log("PUT menu response", response);
        const menuItemIndex = newMenuArray.findIndex((el) => el._id === menuEditItem._id);
        newMenuArray[menuItemIndex].item = menuEditItem.item;
        newMenuArray[menuItemIndex].price = menuEditItem.price;
        newMenuArray[menuItemIndex].category = menuEditItem.category;
        setMenuArray(newMenuArray)
      
      } else if (response.status === 500) {
        response.json()
        .then((body) => {
          console.log(body);
          setMenuArray(menuArray);
          setErrorMessage("Could not update - is the ID correct?");
        });
      }
    }).catch((err) => {
      console.log(err);
      setErrorMessage("Could not save - is the ID unique?");
    });

  };

  const handleFormDelete = (_id, item, price, category) => {
    const menuDeleteItem = {
        _id: _id,
        item: item,
        price: price,
        category: category,
      };
    setMenuDeleteItem(menuDeleteItem);
    const newMenuArray = [...menuArray];
    newMenuArray[menuDeleteItem, menuArray] = [menuDeleteItem, ...menuArray];

    fetch(`http://localhost:9000/api/menu/${menuDeleteItem._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (response.status === 201 || response.status === 200) {
        console.log("DELETE menu response", response);
        const menuToDeleteIndex = newMenuArray.findIndex(el => el._id === menuDeleteItem._id);
        newMenuArray.splice(menuToDeleteIndex, 1);
        setMenuArray(newMenuArray);
     
      } else if (response.status === 500) {
        response.json()
        .then((body) => {
          console.log(body);
         
          setErrorMessage("Could not delete - is the ID correct?");
        });
      }
    });
  };


  useEffect(() => {
    fetch("http://localhost:9000/api/menu", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("GET menu response", response);
        return response.json();
      })
      .then((menuData) => {
        console.log("GET menu data", menuData);
        setMenuArray(menuData.data);
      });

  }, []);

  return (
    <div className="menu-form">
      <div className="div-one-list">
        <MenuList
          menu={menuArray}
          canClick="true"
          clickEvent={onMenuItemClick}
        />
      </div>

      <div className="div-two-form">
        <Form
          menuItem={selectedMenuItem}
          submit={handleFormSubmit}
          editsubmit={handleFormEdit}
          deletesubmit={handleFormDelete}
        />
        <div
          style={
            errorMessage.length <= 0
              ? { display: "none" }
              : { display: "block" }
          }
        >
          {errorMessage}
        </div>
      </div>
    </div>
  );
};

export { MenuForm };
