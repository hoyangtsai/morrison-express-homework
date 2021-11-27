import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  display: block;
  height: 30px;
  background-color: chartreuse;
`;

const Nav = styled.nav`
  padding-left: 60px;
  a {
    display: inline-block;
    vertical-align: middle;
    width: 100px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/layout1">Layout1</Link>
        <Link to="/layout2">Layout2</Link>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
