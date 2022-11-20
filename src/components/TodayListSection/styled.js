import styled, { css } from 'styled-components';

export const TodoNothing = styled.p`
  font-size: 0.9rem;
  color: black;
  text-align: center;
`;
export const ListItem = styled.p`
  font-size: 0.9rem;
  color: #424242;
  ${({ isCompleted }) =>
    isCompleted &&
    css`
      text-decoration: line-through;
      color: grey};
    `}
`;

export const ListCheck = styled.input`
  cursor: pointer;
`;

export const ItemWrapper = styled.span`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;
