import styled from 'styled-components';
import { ReactComponent as WindIcon } from '../asset/icon/wind.svg';

export const ContainerInner = styled.div`
  padding: 0 20px;
`;

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  height: 100%;
  min-height: calc(100vh - 50px);
  color: white;
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

export const SideBarWrapper = styled.div`
  background: #f7f7f7;
  grid-area: sidebar;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  max-width: 400px;
  box-sizing: border-box;
  box-shadow: 5px 0 6px 0 rgba(0, 0, 0, 0.16);
  margin-right: 4px;
`;
export const ContentWrapper = styled.main`
  background: #ededed;
  color: white;
  grid-area: main;
  padding: 0.25rem;
  flex: 4 1 0;
`;
