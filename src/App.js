import Header from './components/Header';
import Routes from './Routes';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes />
    </>
  );
}

export default App;
