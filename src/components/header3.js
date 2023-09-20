import React from "react";
import './header3.css'
import fruits from './images/fruit.png'

function Header3() {
    return (
      <header>
       <nav className="header3">
       <img className="image3" src={fruits}></img>
        </nav >
        
      </header>
    );
  }
  export default Header3;