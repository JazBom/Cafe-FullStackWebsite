import React, { useState } from "react";

const MenuFormAdd = (props) => {
    // const [title, setTitle] = useState("");
    // const [genre, setGenre] = useState("");
    // const [description, setDescription] = useState("");
    const [formState, setFormState] = useState({
        item: '',
        price: '',
        category: '',
    });

    const handleChange = (e) => {

    const newState = { ...formState };
    newState[e.target.name] = e.target.value;

    console.log('newState', newState);
    console.log('formState', formState);
    setFormState(newState);
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    props.submit(formState.item, formState.price, formState.category);
    };

    return(
            <div>
                <h2>Add Menu Item</h2>
                <form onSubmit={handleSubmit}>
                    <label>Item
                        <input name="item" value={formState.item} onChange={handleChange}></input>
                    </label>
                    <label>Price
                        <input name="price" value={formState.price} onChange={handleChange}></input>
                    </label>
                    <label>Category
                        <select name="category" value={formState.category} onChange={handleChange}>
                        <option name="category" value="specials">specials</option>
                        <option name="category" value="coffee">coffee</option>
                        <option name="category" value="breakfast">breakfast</option>
                        <option name="category" value="lunch">lunch</option>
                        <option name="category" value="snacks">snacks</option>
                        </select>
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>   
            );
};

export { MenuFormAdd };