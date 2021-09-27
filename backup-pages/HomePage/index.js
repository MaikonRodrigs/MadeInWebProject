import React, { useState, useContext } from "react";

import {
  Container,
  Content,
  SectionLogo,
  IconTube,
  SectionSearch,
  Input,
  ButtonSend,
  IconSearch
} from "./styles";

export const HomePage = ({ toggleTheme, enterTextSearch }) => {

  const [search, setSearch] = useState("");

  const submitValue = () => {
    enterTextSearch(search);
  };

  return (
    <>
      <Container>
        <Content>
          <SectionLogo>
            <IconTube />
            <h1>
              MadeIn<strong>WebTube</strong>.
            </h1>
          </SectionLogo>
          <SectionSearch>
            <Input
              type="text"
              placeholder="Pesquisar"
              onChange={(e) => setSearch(e.target.value)}
            />
            <ButtonSend onClick={submitValue}><IconSearch /></ButtonSend>
          </SectionSearch>
        </Content>
      </Container>
    </>
  );
};
