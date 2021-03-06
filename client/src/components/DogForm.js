import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { DogImages } from './DogImages';

function DogForm () {

const [formState, setFormState] = useState({
  imgUrl: ''
});
const [dogImageArray, setDogImageArray] = useState([]);
const [errorMessage, setErrorMessage] = useState('');

const handleChange = (e) => {
    const newState = { ...formState };
    newState[e.target.name] = e.target.value;
    console.log(e.target.name, e.target.value);
    console.log('newState', newState);
    console.log('formState', formState);
    setFormState(newState);
};

  const onDogImageClick = (dogElUrl) => {
    console.log(dogElUrl)
    const dogElVal = dogImageArray.findIndex((el) => el.imgUrl === dogElUrl);
    const dogEl = dogImageArray[dogElVal];
    setFormState(dogEl);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newDogImage = {
      imgUrl: formState.imgUrl
    };
    const newDogImageArray = [...dogImageArray];

    fetch("http://localhost:9000/api/dog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDogImage),
    })
      .then((response) => {
        console.log(response.status);
        if (response.status === 201 || response.status === 200) {
          console.log("POST dog response", response);
          newDogImageArray.push(newDogImage);
          setDogImageArray(newDogImageArray);

        } else if (response.status === 500) {
          response.json().then((body) => {
            console.log(body);
            setDogImageArray(dogImageArray);
            setErrorMessage("Could not save - is the ID unique?");
          });
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("Could not save - is the ID unique?");
      });
  };

  const handleFormDelete = (e) => {
    e.preventDefault();

    const dogImageDelete = {
      imgUrl: formState.imgUrl
    };
    const newDogImageArray = dogImageArray.filter((el) => el.imgUrl !== dogImageDelete.imgUrl);

    fetch(`http://localhost:9000/api/dog/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify(dogImageDelete)
    })
    .then((response) => {
      console.log(response.status);
      if (response.status === 201 || response.status === 200) {
        console.log("DELETE dog response", response);
        setDogImageArray(newDogImageArray);
      } else if (response.status === 500) {
        response.json().then((body) => {
          console.log(body);
          setDogImageArray(dogImageArray);
          setErrorMessage("Could not save - is the ID unique?");
        });
      }
    })
    .catch((err) => {
      console.log(err);
      setErrorMessage("Could not save - is the ID unique?");
    });
};

useEffect(() => {
  fetch("http://localhost:9000/api/dog", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      console.log("GET dog response", response);
      return response.json();
    })
    .then((dogImageData) => {
      console.log("GET dog data", dogImageData);
      setDogImageArray(dogImageData.data);
    });
}, []);

    return (
        
        <div className="dogs">
        <h2>Update Dog Pics</h2>
        <p>Add a url, or click on a pic to delete!</p>
        <form>
        
        <div className="inputs">
            <label>
              <input name="imgUrl" className="form-field" value={formState.imgUrl} onChange={handleChange}></input>
            </label>
        </div>
        
        <div className="buttons">
            <Button className="dogImageButton" onClick={handleFormSubmit}>Add</Button>
            <Button className="dogImageButton" onClick={handleFormDelete}>Delete</Button>
        </div>
        </form>
        
        <DogImages 
            dogs={dogImageArray}
            canClick="true"
            clickEvent={onDogImageClick}
            />
    </div>  
    )
}

export { DogForm };