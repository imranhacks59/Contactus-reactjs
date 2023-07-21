import React from "react";
import "./Navbar.css";
function Navbar() {
 
  return (
    <>
        <div className="nav-container">
            <h2 style={{
                color:'rgb(116 19 19)'
            }}>TECHVICTUS</h2>
        
          <div className="nav-menu">
          <ul >
            <li className="nav-item">
                Home
            </li>
            <li className="nav-item">
                Programs
            </li>
            <li className="nav-item">
                Infrastructure
            </li>
            <li className="nav-item">
                Partners
            </li>
            <li className="nav-item">
                Login
            </li>
          </ul>
          </div>
         
        </div>
    </>
  );
}

export default Navbar;