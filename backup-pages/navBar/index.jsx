import React, { useState, useContext } from "react";

import { ThemeContext } from "styled-components";

import {
  Container,
  RowIcons,
  SwitchToggle,
  IconLight,
  IconDark,
  Content,
} from "./style";

export const NavBar = ({toggleTheme}) => {
  const { title } = useContext(ThemeContext);

  return (
    <>
      <Container>
        <Content>
          <RowIcons>
            {title === "light" ? <IconLight /> : <IconDark />}
          </RowIcons>
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
        </Content>
      </Container>
    </>
  );
};
