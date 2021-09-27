import React, { useState } from "react";
import { api } from "../../services/api";
import {

  ChannelName,
  ContainerListVideos,
  SectionListVideos,
  RowSearch,
  Thumb,
  ColumnVideo,
  TitleVideo,
  DescriptionVideo,

} from "./styles";

const API_KEY = "AIzaSyBOxHV6Zid_UFsxpxi7kbd7Bsn0oLbugzw";

export const ListVideosSearch = ({ searchText }) => {
  const [date, setDate] = useState([]);
  console.log(searchText);

  if (!searchText) {
    return(
      <h1>Teste</h1>
    ) 
  }

  api
    .get(`search?part=id,snippet&q=${searchText}&maxResults=3&&key=${API_KEY}`)
    .then((response) => setDate(response.data.items));

  return (
    <ContainerListVideos>
      <SectionListVideos>
        {date.map(function (d, idx) {
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
              </ColumnVideo>
            </RowSearch>
          );
        })}
      </SectionListVideos>
    </ContainerListVideos>
  );
};
