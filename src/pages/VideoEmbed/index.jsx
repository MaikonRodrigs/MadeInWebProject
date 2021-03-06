import React, { useEffect, useState } from 'react';
import { YoutubeApi } from '../../services/YoutubeApi'
import { useParams, useHistory } from 'react-router-dom'
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
  RightColumn,
  BackSearch,
  IconHome,
  Column
} from './styles';

const VideoEmbed = () => {
  const API_KEY = `${process.env.REACT_APP_API_KEY_YT}`
  const [video, setVideo] = useState([]);
  const { videoId } = useParams()
  let history = useHistory()

  const HandleHome = () => {
    history.push('/', '_self')
  }

  useEffect(() => {
    YoutubeApi
      .get(`videos?id=${videoId}&part=snippet,statistics&key=${API_KEY}`)
      .then((res) => {
        setVideo(res.data.items[0])
        console.log(res)
      });

    if (!video) {
      return (
        <div></div>
      )
    }
    // eslint-disable-next-line
  }, [])

  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  if (!video.id) {
    return (
      <div></div>
    )
  }
  return (
    <>

      <Container key={video.id.videoId}>
        <LeftColumn>
          <Content>
            <BackSearch >
              <Column onClick={HandleHome}>
                <IconHome />
                <h1>Voltar</h1>
              </Column>
            </BackSearch>
            <Thumbnail>
              <iframe src={videoSrc} allowFullScreen title="Video player" />
            </Thumbnail>
            <Statics>
              <Views>
                <IconsView />
                <p>
                  {video.statistics.likeCount}
                </p>
              </Views>
              <Likeds>
                <IconLiked />
                <p>
                  {video.statistics.viewCount}
                </p>
              </Likeds>
            </Statics>
          </Content>
          <Description>
            <h1>{video.snippet.title}</h1>
            <p>{video.snippet.description}</p>
          </Description>
        </LeftColumn>
        <RightColumn>
          <h1>Assista tambem:</h1>
          <RelatedVideos IdKeyVideo={video.snippet.title} />
        </RightColumn>
      </Container>
    </>
  )
}

export default VideoEmbed



