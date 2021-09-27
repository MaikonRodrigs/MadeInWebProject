import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import { api } from '../../services/api'

const VideoEmbed = () => {
  const API_KEY = "AIzaSyDBNKVE8LaZJErE8O2WYxcf4vP5Ev9R_dQ";
  const [video, setVideo] = useState([]);

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
  console.log(video)

  const videoSrc = `https://www.youtube.com/embed/EhnXaybirdA`;

  return (
    <>
      {video.map(function (d, idx) {
        return (
          <Container key={d.id}>
            <h1>{d.snippet.title}!</h1>
            <iframe src={videoSrc} allowFullScreen title="Video player" />
          </Container>
        )
      }
      )}
    </>
  )
}

export default VideoEmbed



