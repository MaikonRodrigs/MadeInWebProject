import React, { useEffect, useState } from 'react';
import RelatedVideos from '../RelatedVideos'

import {
  Container,
  Content,
  Thumbnail,
  Description,
  Statics,
  Views,
  Likeds,
  IconLiked,
  IconsView,
  LeftColumn,
  RightColumn
} from './styles';

import { api } from '../../services/api'

const VideoEmbed = () => {
  const API_KEY = "AIzaSyBCPyu77nYp314vjiyweIGRZF9UAKEb53A";
  const [video, setVideo] = useState([]);
  const [date, setDate] = useState([]);

  const [textSearch, setTextSearch] = useState([]);
  const [search, setSearch] = useState('');


  useEffect(() => {
    api
      .get(`videos?id=EhnXaybirdA&part=snippet,statistics&key=${API_KEY}`)
      .then((res) => setVideo(res.data.items));

    if (!video) {
      return (
        <div></div>
      )
    }

  }, [])


  const videoSrc = `https://www.youtube.com/embed/EhnXaybirdA`;

  return (
    <>
      {video.map(function (d, idx) {
        return (
          <Container key={d.id}>
            <LeftColumn>
              <Content>
                <Thumbnail>
                  <iframe src={videoSrc} allowFullScreen title="Video player" />
                </Thumbnail>
                <Statics>
                  <Views>
                    <IconsView />
                    <p>
                      {d.statistics.likeCount}
                    </p>
                  </Views>
                  <Likeds>
                    <IconLiked />
                    <p>
                      {d.statistics.viewCount}
                    </p>
                  </Likeds>
                </Statics>
              </Content>
              <Description>
                <h1>{d.snippet.title}</h1>
                <p>{d.snippet.description}</p>
              </Description>
            </LeftColumn>
            <RightColumn>
              <h1>Videos Relacionados</h1>
              {/* <RelatedVideos /> */}
            </RightColumn>
          </Container>
        )
      }
      )}
    </>
  )
}

export default VideoEmbed



