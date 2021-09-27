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
  const API_KEY =`${process.env.REACT_APP_API_KEY_YT}`
  const [video, setVideo] = useState([]);

  const IdKeyVideo = 'Orkut'

  useEffect(() => {
    api
      .get(`videos?id=EhnXaybirdA&part=snippet,statistics&key=${API_KEY}`)
      .then((res) => setVideo(res.data.items));
    if (!video) {
      return (
        <div></div>
      )
    }
// eslint-disable-next-line
  }, [])

  const videoSrc = `https://www.youtube.com/embed/EhnXaybirdA`;

  return (
    <>
      {video.map(function (d, idx) {
        return (
          <Container key={d.id.videoId}>
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
              <RelatedVideos IdKeyVideo={IdKeyVideo}/>
            </RightColumn>
          </Container>
        )
      }
      )}
    </>
  )
}

export default VideoEmbed



