// import React from "react";
// import './header1.css'

// function Header1() {
//     return (
//       <header>
//        <nav className="header">
//             {/* <div className="horizontal-list">
//             <ul>
//             <li>categories</li>
//             <li>about</li>
//             <li>categories</li>
//             </ul>
//             </div> */}
//             </nav >
        
//       </header>
//     );
//   }
//   export default Header1;
import React from "react";
import './header1.css'

function Header1() {

  return (

    <header className="header">

      <div className="horizontal-list">

        <ul>

          <li>categories</li>

          <li>about</li>

          <li>contact</li>

        </ul>

      </div>

      <div>

        <h5>Location:</h5>
        <label>Uppal Hyderabad...</label>
        <a>Change</a>

      </div>
    </header>

  );

}
export default Header1;

 