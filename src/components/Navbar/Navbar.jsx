 import React, { useState } from 'react';
import './Navbar.css';
import Safe_sphere from '../Assets/Safe_Sphere1.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const navigate = useNavigate();

  const handleNavigation = (path, menuItem) => {
    navigate(path);
    setMenu(menuItem);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={Safe_sphere} alt="logo" />
      </div>
      <ul className="nav-menu">
        <li onClick={() => handleNavigation('/', 'Home')}>
          Home
          {menu === "Home" ? <hr /> : null}
        </li>
        <li onClick={() => handleNavigation('/Aboutus', 'AboutUs')}>
          About Us
          {menu === "AboutUs" ? <hr /> : null}
        </li>
        <li onClick={() => handleNavigation('/Contact', 'Contact')}>
          Contact Us
          {menu === "Contact" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login">
        <button onClick={() => navigate('/Login')}>Login</button>
        {/* {menu ==="Login" ? <hr/>:null} */}
      </div>
    </div>
  );
}

export default Navbar;
