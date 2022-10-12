import styled, { css } from 'styled-components';

export const ContentWrapper = styled.div`
  width: 15vw;
  min-height: 15vw;
  border-radius: 7px;
  box-shadow: 2px 1px 5px 1px rgba(0, 0, 0, 0.5);
  display: relative;
  flex-direction: column;
  justify-content: center;
  margin: 2rem auto;
`;

export const ListTitle = styled.p`
  font-size: 1rem;
  color: #424242;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`;
export const TodoNothing = styled.p`
  font-size: 0.9rem;
  color: black;
  text-align: center;
`;
export const ListItem = styled.p`
  font-size: 0.9rem;
  color: #424242;
  text-align: center;
  margin-top: 0.4rem;
  ${({ isCompleted }) =>
    isCompleted &&
    css`
      text-decoration: line-through;
      color: grey};
    `}
`;

export const ListCheck = styled.input`
  margin-bottom: 0.6rem;
  margin-right: 0.4rem;
  cursor: pointer;
`;

export const ItemWrapper = styled.span`
  display: flex;
  justify-content: center;
`;
