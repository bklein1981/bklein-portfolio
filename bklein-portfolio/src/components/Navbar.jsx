import React, { Component } from "react";
import { MenuData } from "./MenuData";

class NavBar extends Component {
  state = { clicked: false };
  handleClick = () => 
  { this.setState({ clicked: !this.state.clicked }) 
}
  render() {
    return (
      <nav className="NavBarItems px-4">
        <h1 className="logo" >
          <i className="fa-solid fa-cube"></i>
        </h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-bars" : "fas fa-rectangle-xmark"}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu" : "nav-menu active"}>
          { MenuData.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} className={item.class}>
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            ) 
          })}

        </ul>
      </nav>
    )
  }
}
export default NavBar