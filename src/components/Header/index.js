import React from 'react';
import {
  HeaderItem,
  HeaderSection,
  HeaderTitle,
  HeaderWrapper,
  ItemWrapper,
} from './styled';
const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderSection>
        <HeaderTitle to={'/'}>Time Fairy</HeaderTitle>
        <ItemWrapper>
          <HeaderItem to={'/mypage'}>MY PAGE</HeaderItem>
          <HeaderItem to={'/Login'}>LOGIN</HeaderItem>
        </ItemWrapper>
      </HeaderSection>
    </HeaderWrapper>
  );
};

export default Header;
