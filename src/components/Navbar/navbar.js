
import React from "react";

import './navbar.css'
import omgLogo from '../images/omg.png'
import basket from '../images/basket.svg'
import search from '../images/search_duoline.svg'

function Navbar()
{
        return (
            <div>
            <nav className="navbaritems" >
                <ul>
               <li><img className="image1" src={omgLogo}></img></li>
               <li><img className="image2" src={basket}></img></li>
               <li><img className="image3" src={search}></img></li>
                </ul>
            </nav >
            </div>
        )
    }
  
    
    export default  Navbar;