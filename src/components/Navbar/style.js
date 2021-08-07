import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  padding: 0 2rem;
  background: #202020;
  // height: 120px;
  display: flex;
  flex-wrap: wrap;
`;
export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 1rem 2rem;
  cursor: pointer;

  &.active {
    font-weight: bold;
  }
  &:hover {
    color: #fff;
  }
`;
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 120%);
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  // justify-content: center;
  margin-right: 188px;
  margin-left: 188px;
  // position: relative;

  @media screen and (max-width: 768px) {
    // display: none;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    width: 100%;
  }
`;
export const Logo = styled.span`
  display: flex;
  justify-content: start;
  padding: 20px;
`;
