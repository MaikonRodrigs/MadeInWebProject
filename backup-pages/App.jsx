import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { HomePage } from "./components/HomePage/index";

import light from "./styles/theme/light";
import dark from "./styles/theme/dark";

import GlobalStyle from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

import { NavBar } from "./components/navBar/";
import { ListVideosSearch } from "./components/listVideosSearch";

function App() {
  const [theme, setTheme] = useState(light);
  const [searchText, setSearchText] = useState();

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const enterTextSearch = (value) => {
    setSearchText(value);
  };

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <NavBar toggleTheme={toggleTheme} />
          <Switch>
            <Route
              exact path="/"
              component={HomePage}
            />
            <Route
              path="/search/:searchText/"
              component={ListVideosSearch}
            />
          </Switch>
          <GlobalStyle />
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
