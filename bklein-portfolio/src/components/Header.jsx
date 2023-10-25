import React, { useState } from "react";
import { MenuData } from "./MenuData";

function Header () {
  const [clicked, setClicked] = useState(false);
  
  const handleClick = () => {
    setClicked(!clicked)
  }
 
    return (
      <nav className="NavBarItems px-4">
        <h1 className="logo" >
          <i className="fa-solid fa-cube pe-3"></i>
          <span>Brian Klein</span>
        </h1>
        <div className="menu-icons" onClick={handleClick}>
          <i className={clicked ? "fas fa-bars" : "fas fa-rectangle-xmark"}></i>
        </div>
        <ul className={clicked ? "nav-menu" : "nav-menu active"}>
          {MenuData.map((menu, index) => {
            return (
              <li key={index}>
                <a href={menu.url} className={menu.class}>
                  <i className={menu.icon}></i>
                  {menu.title}
                </a>
              </li>
            )
          })}

        </ul>
      </nav>
    )
  }

export default Header