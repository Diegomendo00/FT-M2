import React from "react";
import Logo from "../logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <div className="nav-bar">
      <img src={Logo} alt="logo Henry" />
      <h3> Henry Weather - App</h3>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default Nav;
