import styled, { css } from 'styled-components';
import { ReactComponent as AddIcon } from '../../asset/icon/add.svg';
import { ReactComponent as RemoveIcon } from '../../asset/icon/remove.svg';
import { ReactComponent as TagIcon } from '../../asset/icon/tag-line.svg';
import { ReactComponent as CalanderIcon } from '../../asset/icon/calender-line.svg';
import { ReactComponent as EditIcon } from '../../asset/icon/edit.svg';

export const TodoInputWrapper = styled.div`
  margin-top: 3rem;
  box-shadow: 3px 3px 2px grey;
  width: 47.6vw;
  height: 6rem;
  border-radius: 1rem;
  background: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TodoInput = styled.input`
  width: 40vw;
  height: ${(props) => props.height || '3rem'};
  font-size: ${(props) => props.size || '1rem'};
  border: none;
  background-color: rgba(0, 0, 0, 0);
  padding: 0 0.6rem;
  margin: 0;
  border-bottom: 2px solid #495ea3;
  color: black;
  &:focus {
    outline: none;
    border-bottom: 2px solid #a6a6a6;
  }
`;
export const MemoInput = styled(TodoInput)`
  border-bottom: none;
  &:focus {
    border-bottom: none;
  }
`;

export const Hr = styled.div`
  width: 10rem;
  height: 1px;
  color: grey;
`;
export const AddBtn = styled(AddIcon)`
  fill: grey;
  cursor: pointer;
  position: absolute;
  margin-top: 0.6rem;
  margin-left: -2.4rem;
  width: 1.8rem;
  height: 1.8rem;
  &:hover {
    fill: #3d3d3d;
    transition: all ease 0.2s 0s;
  }
`;
export const CateBtn = styled.button`
  position: absolue;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;
export const TagBtn = styled(TagIcon)`
  width: 1.5rem;
  height: 1.5rem;
  fill: grey;
  cursor: pointer;
  position: absolute;
  margin-top: 0.5rem;
  margin-left: -4rem;

  &:hover {
    fill: #3d3d3d;
    transition: all ease 0.2s 0s;
  }
`;
export const CalendarBtn = styled(CalanderIcon)`
  width: 1.5rem;
  height: 1.5rem;
  fill: grey;
  cursor: pointer;
  position: absolute;
  margin-top: 0.5rem;
  margin-left: -2rem;

  &:hover {
    fill: #3d3d3d;
    transition: all ease 0.2s 0s;
  }
`;
export const CheckInput = styled.input`
  cursor: pointer;
  margin-right: 1rem;
  &.checked {
    color: #22b8cf;
  }
`;
export const RemoveBtn = styled(RemoveIcon)`
  cursor: pointer;
  &:hover {
  }
`;
export const TodoItemWrapper = styled.div`
  display: flex;
  padding: 0.8rem;
  align-items: center;
  height: 2.5rem;
  width: 55vw;

  border-bottom: 1px solid #a6a6a6;
`;
export const TodoContent = styled.p`
  width: 100%;
  font-size: 1rem;
  color: #3d3d3d;
  cursor: pointer;
  ${({ isCompleted }) =>
    isCompleted &&
    css`
      text-decoration: line-through;
      color: grey};
    `};
`;

export const MemoContent = styled.p`
  display: felx;
  width: 15%;
  text-ailne: center;
  align-items: center;

  background-color: yellow;
  justify-content: space-between;
  margin: 5px;
  padding: 5px:
  border-radius: 10px;
  font-size: 1rem;
  color: black;
  cursor: pointer;
  ${({ isCompleted }) =>
    isCompleted &&
    css`
      text-decoration: line-through;
      color: grey};
    `};
`;
export const TodoNothing = styled.p`
  font-size: 0.9rem;
`;
export const TodoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const EditBtn = styled(EditIcon)`
  cursor: pointer;
  margin-right: 0.7rem;
  width: 1.8rem;
  height: 1.8rem;
  &:hover {
    fill: grey;
  }
`;

export const DropDowns = styled.div`
  margin-right: 0.7rem;
  width: 1.8rem;
  height: 1.8rem;
`
