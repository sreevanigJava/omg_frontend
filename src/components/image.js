import React from "react";
import './image.css'
import fruits from './images/neworange.png'

function Image() {
    return (
      <div>
       <img className="image3" src={fruits}></img>
      </div>
    );
  }
  export default Image;