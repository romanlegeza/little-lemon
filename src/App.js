import { Grid, ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import Item from '@mui/material/Grid';
import '@mui/material/styles';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { routes } from './constants';
import { appTheme } from './theme';


function App() {
  return (
    <Router>
      <ThemeProvider theme={appTheme}>
        <Header />
        <Grid container>
          <Grid item xs={12} md={12}>
            <Item>
              <Box display="flex" justifyContent="center" alignItems="center" sx={{ minWidth: 300 }}>
                <Routes>
                  {routes.map((item, index) => {
                    return <Route key={index} path={item.path} element={<item.component />} />;
                  })}
                </Routes>
              </Box>
            </Item>
          </Grid>
        </Grid>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
