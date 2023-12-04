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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const NavbarItem = styled.li`
  margin: 0 20px;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
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
        <NavbarItem>
          <NavbarLink to={`/popular`}>Popular</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to={`/trending`}>Trending</NavbarLink>
        </NavbarItem>
      </NavbarList>
    </NavbarContainer>
  );
}

export default Navbar;
