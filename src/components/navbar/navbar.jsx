import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Logo, Menu, MenuIcon, MenuItem, Nav } from "./navbar.styles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo href="#">Your Logo</Logo>
      <MenuIcon onClick={handleToggle}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <Menu isOpen={isOpen}>
        <MenuItem href="#">Home</MenuItem>
        <MenuItem href="#">About</MenuItem>
        <MenuItem href="#">Services</MenuItem>
        <MenuItem href="#">Projects</MenuItem>
        <MenuItem href="#">Contact</MenuItem>
      </Menu>
    </Nav>
  );
};
export default Navbar;
