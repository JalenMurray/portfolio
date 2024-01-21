import { Link } from 'react-router-dom';
import { NavbarContainer, Links } from './navbar.styles';

const Navbar = () => {
  return (
    <NavbarContainer>
      <Links>
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/experiences"> Experience </Link>
      </Links>
    </NavbarContainer>
  );
};

export default Navbar;
