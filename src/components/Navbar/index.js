import React, { useState } from 'react';
import { Nav, Menu, NavLink, Bars, Logo } from './style';
import logo from '../../assets/images/no-grau-logo.svg';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Nav>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <Bars onClick={() => setIsOpen(!isOpen)} />
        <Menu isOpen={isOpen}>
          <NavLink exact to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/quem-somos" activeStyle>
            Quem somos
          </NavLink>
          <NavLink to="/vitrine" activeStyle>
            Vitrine
          </NavLink>
          <NavLink to="/filtro" activeStyle>
            Filtro
          </NavLink>
        </Menu>
      </Nav>
    </>
  );
};

export default Navbar;


