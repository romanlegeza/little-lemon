import '@mui/material/styles';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from '@mui/material';
import { appTheme } from './theme';
import menuItems from './constants';


function App() {
  return (
    <Router>
      <ThemeProvider theme={appTheme}>
        <Header />
        <Routes>
          {menuItems.map((item, index) => {
            return <Route key={index} path={item.path} element={<item.component />} />;
          })}
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
