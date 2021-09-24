import React, { useState } from 'react';

import { HomePage } from './components/HomePage/index';

import light from './styles/theme/light';
import dark from './styles/theme/dark';

import GlobalStyle from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'



function App() {


  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <HomePage toggleTheme={toggleTheme} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
