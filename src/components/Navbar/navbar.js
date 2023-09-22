
// import React from "react";

// import './navbar.css'
// import omgLogo from '../images/omg.png'
// import basket from '../images/basket.svg'
// //import search from '../images/search_duoline.svg'

// function Navbar()
// {
//         return (
//             <div>
//             <nav className="navbaritems" >
//                 <ul>
//                <li><img className="image1" src={omgLogo}></img></li>
//                <li><img className="image2" src={basket}></img></li>
//               {/* <li><img className="image3" src={search}></img></li> */}
//                 </ul>
//             </nav >
//             </div>
//         )
//     }
  
    
//     export default  Navbar;
import React from "react";

 

import './navbar.css'

import omgLogo from '../images/omg.png'

import basket from '../images/basket.svg'
import avtar from '../images/user-avatar-filled-alt.svg'
//import search from '../images/search_duoline.svg'

function Navbar() {

    return (
                <div className="d1">
                <div className="navContent">

                    <img className="image1" src={omgLogo}></img>
                    <i class="fa-sharp fa-light fa-pipe" ></i>
                    <div className="div"><input type="text" className="searchBar" placeholder="Search over 5000+ products here" /><button id="searchButtn" >Search</button></div>
                   <img className="avtar" src={avtar}></img>
                    <h4 className="name">Srivani Gaddam</h4>
                    <img className="image2" src={basket}></img>

                </div>

            

        </div>

    )

}





export default Navbar;