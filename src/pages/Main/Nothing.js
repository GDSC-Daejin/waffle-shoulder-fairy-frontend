import React from 'react';
import { EmptyText, ImgWrapper, WindImg } from '../Main/styled';
const Nothing = () => {
  return (
    <span>
      <ImgWrapper>
        <WindImg />
      </ImgWrapper>
      <EmptyText>일정이 없습니다.</EmptyText>
      <EmptyText>새로운 일정을 입력해주세요.</EmptyText>
    </span>
  );
};

export default Nothing;
