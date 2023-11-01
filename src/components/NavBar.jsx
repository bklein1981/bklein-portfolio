import React, { useState } from "react";
import { MenuData } from "./Pages/Page-Data/MenuData";

function NavBar ({currentPage, handlePageChange}) {
  const [clicked, setClicked] = useState(false);
  
  const handleClick = () => {
    setClicked(!clicked)
  }
    return (
      <nav className="NavBarItems px-4">
        <div className="logo" >
          <img src="./src/assets/images/portfolio-logo.png" className="logo-icon" alt="portfolio-log" />
          <span>Brian Klein</span>
        </div>
        <div className="menu-icons" onClick={handleClick}>
          <i className={clicked ? "fas fa-bars" : "fas fa-rectangle-xmark"}></i>
        </div>
        <ul className={clicked ? "nav-menu" : "nav-menu active"}>
          {MenuData.map((menu, index) => {        
            return (
              <li key={index}>
                <a href={menu.url} className={menu.class} onClick={() => handlePageChange(menu.nav)}>
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

export default NavBar