import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(55, 80, 110);
  background-color: rgb(240, 245, 250);
  &,
  &:active {
    text-decoration: none;
    color: rgb(0, 111, 232);
  }
  &:hover {
    opacity: 0.5;
  }

  &.active {
    background-color: rgb(255, 255, 255);
  }

  & span {
    margin-left: 5px;
  }
`;
