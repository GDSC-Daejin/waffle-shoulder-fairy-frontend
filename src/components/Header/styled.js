import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  background: aliceblue;
  box-shadow: 3px 3px lightgray;
  position: relative;
`;
export const HeaderTitle = styled(Link)`
  font-size: 1.4rem;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  color: black;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #404040;
    transition: all ease 0.2s 0s;
  }
`;
export const HeaderItem = styled(NavLink)`
  font-size: 0.9rem;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: black;
  &:hover,
  &:focus {
    color: #404040;
    transition: all ease 0.2s 0s;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
export const HeaderSection = styled.div`
  width: 92%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
