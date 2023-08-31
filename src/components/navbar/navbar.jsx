import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import { Menu } from '@mui/material';

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  const toggleHandler = () => setExpandNavbar((prev) => !prev);

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? 'open' : 'close'}>
      <div className="toggleButton">
        <button onClick={toggleHandler}>
          <Menu />
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/experiences"> Experience </Link>
      </div>
    </div>
  );
};

export default Navbar;
