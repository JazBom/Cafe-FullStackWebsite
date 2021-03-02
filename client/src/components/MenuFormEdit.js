import React, { useEffect, useState } from "react";

const MovieFormEdit = (props) => {
  // const [title, setTitle] = useState("");
  // const [genre, setGenre] = useState("");
  // const [description, setDescription] = useState("");
  // 1st element - > state Variable
  // 2nd element - > function to change that state variable
  const [formState, setFormState] = useState({
    item: '',
    price: '',
    category: ''
  })

  useEffect(() => {
    setFormState(props.movie);
    console.log('useEffect edit');
    }, [props.movie]);

  // 1st element - > state Variable
  // 2nd element - > function to change that state variable
  const handleChange = (e) => {
    // console.log('formState', formState);
    const newState = { ...formState }
    newState[e.target.name] = e.target.value;
    // Alternate one line for the previous two lines
    // const newState = { ...formState, [e.target.name]: e.target.value }
    // console.log('newState', newState);
    setFormState(newState);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    props.submit(formState);
  };
  
  return (
    <div>
      <h2>Edit Menu Item</h2>
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
                    <button type="submit">Edit</button>
          </form>
    </div>
  );

};

export { MovieFormEdit };