import styled from 'styled-components';
import { ReactComponent as WindIcon } from '../../asset/icon/wind.svg';
import { ReactComponent as UserIcon } from '../../asset/icon/user.svg';

export const LayoutContainer = styled.div`
  display: grid;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  grid-template-columns: 1.2fr 5fr;
  grid-template-areas: 'sidebar main';
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
    grid-template-areas:
      'nav'
      'sidebar'
      'main'
      'content"'
      'footer';
  }
  color: white;
`;

export const SideBar = styled.div`
  background: #f7f7f7;
  grid-area: sidebar;
  padding: 0.25rem;
  box-shadow: 4px 4px 2px lightgrey;
`;

export const Main = styled.main`
  background: #ededed;
  color: white;
  grid-area: main;
  padding: 0.25rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const WindImg = styled(WindIcon)`
  width: 12rem;
  height: 12rem;
  margin-top: 4rem;
`;

export const UserImg = styled(UserIcon)`
  width: 13vw;
  height: 13vw;
  fill: #676d82;
  display: flex;
  margin: 1.5rem auto;
`;
export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const EmptyText = styled.p`
  font-size: 0.9rem;
  color: #3d3d3d;
  text-align: center;
  margin: 0;
`;
export const UserName = styled.p`
  font-size: 1.7rem;
  color: #424242;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 0;
`;
export const UserText = styled.p`
  text-align: center;
  color: #3d3d3d;
  font-size: 0.9rem;
`;
export const ProfileWrapper = styled.span`
  position: relative;
`;
