import React, { useEffect, useState } from "react";

const MovieFormDelete = (props) => {

  const [formState, setFormState] = useState({
    item: '',
    price: '',
    category: ''
  })

  useEffect(() => {
    setFormState(props.movie);
    }, [props.movie]);

  const handleChange = (e) => {
    const newState = { ...formState }
    newState[e.target.name] = e.target.value;
    setFormState(newState);
  };

  const handleSubmit = () => {
    props.submit(formState);
  };
  
  return (
    <div>
      <h2>Delete Menu Item</h2>
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
                    <button type="submit">Delete</button>
          </form>
    </div>
  );

};

export { MovieFormDelete };