import styled from 'styled-components';
import { ReactComponent as UserIcon } from '../../asset/icon/user.svg';

export const ProfileWrapper = styled.span`
  position: relative;
  margin-bottom: 50px;
`;
export const UserImg = styled(UserIcon)`
  width: 13vw;
  height: 13vw;
  fill: #676d82;
  display: flex;
  margin: 1.5rem auto;
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
