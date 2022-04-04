import React from "react";
import { NavLink } from "react-router-dom";
import HYu from "../../Assets/Image/logo.png";
import POP from "../../Assets/Image/banner.png";
import "./Navbar.css";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav
      style={
        pathname.includes("blog") ? { display: "none" } : { display: "flex" }
      }
    >
      <div className='logo-container'>
        <img src={HYu} alt='' />
      </div>
      <div className='link-container'>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='/first'
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='/review'
        >
          Review Details
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='/Question'
        >
          Blog
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='/login'
        >
          Dashboard
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
