import React, { useState } from "react";
import {
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
} from "./styles";

import axios from "axios";

const API_KEY = "AIzaSyDdqKlhCOBQ2kcoi3TLTtEq6VpHm1Q5164";
const API_BASE_URL = "https://www.googleapis.com/youtube/v3";

export const ListVideosSearch = ({ Search }) => {

  const [api, setApi] = useState([]);

  axios
    .get(
      `https://www.googleapis.com/youtube/v3/search?part=id,snippet&q={Rockeseat}&maxResults=1&&key=${API_KEY}`
    )
    .then((response) => {
      setApi(response.data.items);
      console.log(api);
    });

  return (
    <ContainerListVideos>
      <SectionListVideos>
        {api.map(function (d, idx) {
          return (
            <RowSearch key={idx}>
              <Thumb>
                  <img src={d.snippet.thumbnails.default.url} alt=""/>
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
  );
};
