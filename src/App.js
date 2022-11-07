import Header from './components/Header';
import Routes from './Routes';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Header />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
