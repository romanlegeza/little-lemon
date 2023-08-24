import { ThemeProvider } from '@mui/material';
import { appTheme } from './theme';
import '@mui/material/styles';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
