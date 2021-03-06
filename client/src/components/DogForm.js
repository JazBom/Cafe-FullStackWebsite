import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { DogImages } from './DogImages';

function DogForm () {

const [formState, setFormState] = useState({
    url: ''
});
const [dogImageArray, setDogImageArray] = useState([]);
// const [selectedDogImage, setSelectedDogImage] = useState({url: '' });
// const [dogImageDelete, setDogImageDelete] = useState({url: "" });
const [errorMessage, setErrorMessage] = useState('');

const handleChange = (e) => {
    const newState = { ...formState };
    newState[e.target.name] = e.target.value;
    console.log(e.target.name, e.target.value);
    console.log('newState', newState);
    console.log('formState', formState);
    setFormState(newState);
};

// useEffect(() => {
//     fetch("http://localhost:9000/api/dog", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         console.log("GET dog response", response);
//         return response.json();
//       })
//       .then((dogImageData) => {
//         console.log("GET dog data", dogImageData);
//         setDogImageArray(dogImageData.data);
//       });
//       setFormState(dogImageArray);
//   }, []);

  // const onDogImageClick = (dogElUrl) => {
  //   const dogElVal = dogImageArray.findIndex((el) => el._id === dogElUrl);
  //   const dogEl = dogImageArray[dogElVal];
  //   setSelectedDogImage(dogEl);
  //   // const dogElIndex = dogImageArray.findIndex((el) => el._id === dogElId);
  //   // const dogEl = dogImageArray[dogElIndex];
  //   // setSelectedDogImage(dogEl);
  // };

  const handleFormSubmit = (url) => {
  const newDogImage = {
      url: url
    };
  const newDogImageArray = [...dogImageArray];
  newDogImageArray.push(newDogImage);
  setDogImageArray(newDogImageArray);
  
  fetch("http://localhost:9000/api/dog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDogImage),
      })
      // .then((response) => {
      //   if (response.status === 201) {
      //     console.log("POST dog image response", response);
      //     newDogImageArray.push(newDogImage);
      //     setDogImageArray(newDogImageArray);
      //   } else if (response.status === 500) {
      //     response.json().then((body) => {
      //       console.log(body);
      //       setDogImageArray(dogImageArray);
      //       setErrorMessage("Could not save - is image a duplicate?");
      //     });
      //   }
      // })
      // .catch((err) => {
      //   console.log(err);
      //   setErrorMessage("Could not save - is image a duplicate?");
      // });
  };

  // const handleFormDelete = (e, _id, url) => {
  //   e.preventDefault();
  //   const dogImageDelete = {
  //     url: url
  //   };
  //   const newDogImageArray = [...dogImageArray];
  //   setDogImageDelete(selectedDogImage);

  //   fetch(`http://localhost:9000/api/menu/${dogImageDelete._id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then((response) => {
  //       newDogImageArray.splice(dogImageDelete);
  //       setDogImageArray(newDogImageArray);
  //       console.log("DELETE dog image response", response);
  //       return response.json();
  //   });
  // };

  const tempDogImageArray = [{
    url: "https://i.imgur.com/HM6Nnft.jpg",
  },
  {
    url: "https://i.imgur.com/o9cvfta.jpg?1",
  },
  {
    url: "https://i.imgur.com/JY9p7Z2.png?1"
  }
];

    return (
        
        <div className="dogs">
        <h2>Update Dog Pics</h2>
        <p>Add a url, or click on a pic to delete!</p>
        <form>
        
        <div className="inputs">
            <label><input name="url" className="form-field" value={formState.url} onChange={handleChange}></input>
            </label>
        </div>
        
        <div className="buttons">
            <Button className="dogImageButton" onClick={handleFormSubmit}>Add</Button>
            {/* <Button className="dogImageButton" onClick={handleFormDelete}>Delete</Button> */}
        </div>
        </form>
        
        <DogImages 
            dogs={dogImageArray}
            canClick="true"
            // clickEvent={onDogImageClick}
            />
    </div>  
    )
}

export { DogForm };