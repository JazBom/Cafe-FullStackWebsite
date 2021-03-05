import React, { Component } from "react";

const DogImages = (props) => {

    const dogPics = props.dogs
    .map((el) => {
      return (
        <li
          key={el._id}
          className='dog-pic'
          onClick={() => props.clickEvent(el._id)}
        >
           <img src= {el.url} />
        </li>
      );
    });

  return (
    <div className="dog-images">
    <ul className="dog-images-list no-bull">
      {dogPics}
    </ul>
    </div>
  );
};

export { DogImages };
