import React, { useState } from "react";
import './navbar.css';
import logo from './images/omg.png';
import userlogo from './images/user-avatar-filled-alt.svg';
import basketlogo from './images/basket.svg';
import search from './images/search_duoline.svg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Navbar() {

  return (
    <div className="Navigationbar">
      <nav className="firstnav">
        <div className="nav1">
          <img className="omglogo" src={logo}></img>
          <div className="search">
             <div className="search-bar">
             <img className="searchimg" src={search}></img>
             <input type="text" className="searching" placeholder="            Search 500+ Products Here...."/>
             <button id="searchbutton">Search</button>
             </div>
              </div>
          <div className="namelogo">
            <img className="img1" src={userlogo}></img>
            <h4 className="name">Srivani Gaddam</h4>
          </div>
          <KeyboardArrowDownIcon className="arrow"/>
          <img id="basket" src={basketlogo}></img>
          <span class="quantity">0</span>
        </div>

        <ul className="nav2">
          <div className="details">
            <li><a className="a1" href="abc">Categories</a></li>
            <li className="icon"><KeyboardArrowDownIcon/></li>
            <li><a className="a1" href="abc">About</a></li>
            <li><a className="a1" href="abc">Contact</a></li>
          </div>
          <div className="location">
            <li><a className="a1" href="abc">Location  : </a></li>
            <li><a className="a2" href="abc">Uppal Hyderabad...</a></li>
            <li><a className="a1" id="change" href="abc" abc>Change</a></li>
          </div>
          /</ul>
        <ul className="navitems">
          <div className="nav3">
            <li className="l1"><a className="anchor" href="abc">Home</a></li>
            <div className="greater-than-icon">&gt;</div>
            <li className="l2"><a className="anchor" href="abc">Categories</a></li>
            <div className="greater-than-icon">&gt;</div>
            <li className="l3"><a className="anchor" href="abc">Fruits</a></li>
            <li ><button className="btn">Search Results</button></li>
          </div>
        </ul>

      </nav>
    </div>

  );
}
export default Navbar;

