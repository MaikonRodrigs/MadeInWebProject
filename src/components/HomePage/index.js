import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";

import axios from "axios";

import { useForm } from "react-hook-form";
import {
  ButtonSend,
  Container,
  Content,
  SectionLogo,
  IconTube,
  SectionSearch,
  Input,
  RowButton,
  Results,
  ChannelName,
  ColumnViewAndEmbed,
  CopyEmbed,
  IconEmbed,
  IconViewShow,
  ContainerListVideos,
  SectionListVideos,
  RowSearch,
  Thumb,
  ColumnVideo,
  TitleVideo,
  DescriptionVideo,
  ViewsVideo,
  SwitchToggle,
  IconLight,
  IconDark,
  NavBar,
  RowIcons,
} from "./styles";

export const HomePage = ({ toggleTheme }) => {
  const API_KEY = "AIzaSyAsDRyoEsBhZQOvGpx8cYMe1V-_1V7guBk";
  const [api, setApi] = useState([]);
  const [valueSearch, setValueSearch] = useState();

  const { title } = useContext(ThemeContext);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${valueSearch}&maxResults=1&&key=${API_KEY}`
      )
      .then((response) => {
        setApi(response.data.items);
      });
  }, [valueSearch]);

  const { register, handleSubmit } = useForm();
  const onsubmit = (data) => setValueSearch(data.pesquisa);

  return (
    <>
      <Container>
        <NavBar>
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
        </NavBar>
        <Content>
          <SectionLogo>
            <IconTube />
            <h1>
              MadeIn<strong>WebTube</strong>.
            </h1>
          </SectionLogo>
          <SectionSearch>
            <form onSubmit={handleSubmit(onsubmit)}>
              <Input
                {...register("pesquisa")}
                placeholder="Digite sua pesquisa"
              />
            </form>
          </SectionSearch>
          <p>Aperte enter para pesquisar</p>
        </Content>
      </Container>
      {api > 0 && (
        <>
          <ContainerListVideos>
            <SectionListVideos>
              {api.map(function (d, idx) {
                return (
                  <RowSearch key={idx}>
                    <Thumb>
                      <img src={d.snippet.thumbnails.default.url} alt="" />
                    </Thumb>
                    <ColumnVideo>
                      <TitleVideo>
                        <h1>{d.snippet.title}</h1>
                      </TitleVideo>
                      <ChannelName>
                        <p>{d.snippet.channelTitle}</p>
                      </ChannelName>
                      <DescriptionVideo>
                        <p>{d.snippet.description}</p>
                      </DescriptionVideo>
                      <ColumnViewAndEmbed>
                        <ViewsVideo>
                          <IconViewShow />
                          <p>{d.snippet.title}</p>
                        </ViewsVideo>
                        <CopyEmbed>
                          <a href="#">
                            <p>COPY EMBED </p>
                          </a>
                        </CopyEmbed>
                      </ColumnViewAndEmbed>
                    </ColumnVideo>
                  </RowSearch>
                );
              })}
            </SectionListVideos>
          </ContainerListVideos>
        </>
      )}
    </>
  );
};
