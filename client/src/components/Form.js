import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

const Form = (props) => {

    const [formState, setFormState] = useState({
        _id: '',
        item: '',
        price: '',
        category: '',
    });

    const handleChange = (e) => {
        const newState = { ...formState };
        newState[e.target.name] = e.target.value;
        console.log(e.target.name, e.target.value);
        console.log('newState', newState);
        console.log('formState', formState);
        setFormState(newState);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        props.submit(formState._id, formState.item, formState.price, formState.category);
        // props.menu.Button(formState.item, formState.price, formState.category);
        };

    return(
            <div className="form">
                <h2>Update Menu</h2>
                <form>
               
                <div className="buttons">
                    <Button className="menuButton" onClick={handleFormSubmit}>Add</Button>

                    {/* <Button type="submit" className="menuButton">Edit</Button>
                    <Button type="submit" className="menuButton">Delete</Button> */}
                </div>
                
                <div className="inputs">
                <label>Id: 
                        <input name="_id" className="form-field" value={formState._id} onChange={handleChange}></input>
                    </label>
                    <label>Item: 
                        <input name="item" className="form-field" value={formState.item} onChange={handleChange}></input>
                    </label>
                    <label>Price: 
                        <input name="price" className="form-field" value={formState.price} onChange={handleChange}></input>
                    </label>
                    <label>Category: 
                        <select name="category" className="form-field" value={formState.category} onChange={handleChange}>Select a category
                        <option name="category" value="specials">Specials</option>
                        <option name="category" value="coffee">Coffee</option>
                        <option name="category" value="breakfast">Breakfast</option>
                        <option name="category" value="lunch">Lunch</option>
                        <option name="category" value="snacks">Snacks</option>
                        </select>
                    </label>
                </div>
                    
                </form>
            </div>   
            );
};

export { Form };