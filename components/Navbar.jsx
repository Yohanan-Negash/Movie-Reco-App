import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 10px;
`;
const NavbarList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
`;
const NavbarItem = styled.li`
  margin: 0 20px;
`;
const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarList>
        <NavbarItem>
          <NavbarLink to={`/`}>Home</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to={`/movies`}>Movies</NavbarLink>
        </NavbarItem>
      </NavbarList>
    </NavbarContainer>
  );
}

export default Navbar;
