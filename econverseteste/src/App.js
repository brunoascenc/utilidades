import { ThemeProvider } from 'styled-components';
import Header from './components/header/header';
import { ContextProvider } from './context/data-provides';
import GlobalStyles from './globalStyles';
import Home from './pages/home/home';
import Theme from './styles/theme';

function App() {
  return (
    <ContextProvider>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <Header />
        <Home />
      </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
