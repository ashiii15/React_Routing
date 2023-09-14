import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./Auth";

function Navbar() {
  const navStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "Bold" : "normal",
      textDecoration: isActive ? "none" : "",
      fontSize: isActive ? "17px" : "15px",
    };
  };
  const auth = useAuth();
  return (
    <nav className="mainNav">
      <NavLink style={navStyle} to="/">
        Home
      </NavLink>
      <NavLink style={navStyle} to="/about">
        About
      </NavLink>
      <NavLink style={navStyle} to="/products">
        Products
      </NavLink>
      <NavLink style={navStyle} to="/profile">
        Profile
      </NavLink>
      {!auth.user && (
        <NavLink style={navStyle} to="/login">
          login
        </NavLink>
      )}
    </nav>
  );
}

export default Navbar;
