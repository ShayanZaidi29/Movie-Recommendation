
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import ".//Slidebar.css";

function Slidebar() {
  return (
    <>
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/">
        About
      </a>
      <a className="menu-item" href="/">
        Settings
      </a>
      <a className="menu-item" href="/">
        Profile
      </a>
     
    </Menu>
  </>
    

  )
}

export default Slidebar
      

