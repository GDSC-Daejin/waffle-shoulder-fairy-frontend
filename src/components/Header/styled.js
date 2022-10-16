import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.div`
  width: 100vw;
  background: aliceblue;
  display: flex;
  box-shadow: 3px 3px lightgray;
  position: relative;
  height: 3rem;
`;
export const HeaderTitle = styled(Link)`
  font-size: 1.5rem;
  display: inline-block;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  color: black;
  margin: 0.5rem 2.4rem 0 1.5rem;
  text-decoration: none;

  &:hover,
  &:focus {
    color: #404040;
    transition: all ease 0.2s 0s;
  }
`;
export const HeaderItem = styled(NavLink)`
  font-size: 0.9rem;
  margin-right: 2rem;
  display: inline-block;
  cursor: pointer;
  margin-top: 1rem;
  text-decoration: none;
  color: black;
  &:hover,
  &:focus {
    color: #404040;
    transition: all ease 0.2s 0s;
  }
`;

export const ItemWrapper = styled.div`
  float: right;
`;
export const HeaderSection = styled.div`
  width: 100%;
`;
