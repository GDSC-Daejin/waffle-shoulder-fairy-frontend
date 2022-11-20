import Header from './components/Header';
import Routes from './Routes';
import GlobalStyles from './styles/globalStyles';

import Sidebar from './components/Sidebar';
import {
  ContentWrapper,
  LayoutContainer,
  SideBarWrapper,
} from './styles/layouts';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <LayoutContainer>
        <SideBarWrapper>
          <Sidebar />
        </SideBarWrapper>
        <ContentWrapper>
          <Routes />
        </ContentWrapper>
      </LayoutContainer>
    </>
  );
}

export default App;
