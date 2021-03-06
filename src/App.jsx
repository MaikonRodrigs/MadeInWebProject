import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header/";
import HomePage from "./pages/HomePage/"
import ResultsSearch from "./pages/ResultsSearch";
import VideoEmbed from "./pages/VideoEmbed";

import light from "./styles/theme/light";
import dark from "./styles/theme/dark";

import GlobalStyle from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

function App() {
  const [theme, setTheme] = useState(dark);
  // eslint-disable-next-line
  const [searchText, setSearchText] = useState('');

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const enterTextSearch = (value) => {
    setSearchText(value);
  };

  return (

    <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header toggleTheme={toggleTheme} />
          <Switch>
            <Route exact path="/" render={(Props) => <HomePage enterTextSearch={enterTextSearch} />} />
            <Route exact path="/results" conponent={ResultsSearch} />
            <Route path="/video/:videoId" component={VideoEmbed} />
          </Switch>
          <GlobalStyle />
        </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
