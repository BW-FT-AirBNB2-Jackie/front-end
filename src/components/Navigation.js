import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import useDarkMode from '../hooks/useDarkMode';


const Navigation = (props) => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <h1>RV AirBnB</h1>
      <Nav pills>
        <NavItem>
          <NavLink href="/"  >Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/auth" >Log In</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/auth" >Sign Up</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Users" >Users</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Owners" >Land Owners</NavLink>
        </NavItem>
      </Nav>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navigation;
