import React, { useContext } from "react";
import { Link } from 'react-router-dom';

import { ThemeContext } from "styled-components";
import { Container, IconTube, SwitchToggle, IconLight, IconDark } from "./style";

const Header = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);

  return (
    <>
      <Container>
        <Link to="/">
          <IconTube />
        </Link>
        {title === "light" ? <IconLight /> : <IconDark />}
        <SwitchToggle
          onChange={toggleTheme}
          checked={title === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={16}
          width={30}
          handleDiameter={20}
          offColor="#44b310"
          onColor="#666"
        />
      </Container>
    </>
  );
};

export default Header;
