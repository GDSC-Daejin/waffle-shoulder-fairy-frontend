import React from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ErrorText = styled.p`
  font-size: 3rem;
  color: black;
  font-weight: 600;
  margin-top: 0;
`;
const Error = () => {
  return (
    <LayoutContainer>
      <ErrorText>404 not found</ErrorText>
      <ErrorText>존재하지 않는 페이지입니다.</ErrorText>
    </LayoutContainer>
  );
};
export default Error;
