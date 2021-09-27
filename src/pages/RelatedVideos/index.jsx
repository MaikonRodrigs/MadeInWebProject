import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Content, IconPlayCircle } from './styles';
import { YoutubeApi } from '../../services/YoutubeApi';

const RelatedVideos = ({ IdKeyVideo }) => {
  const API_KEY = `${process.env.REACT_APP_API_KEY_YT}`
  const [data, setData] = useState([]);
  // eslint-disable-next-line
  const [search, setSearch] = useState('');
  let history = useHistory()

  const handleEnterVideo = (videoId) => {
    history.push('/video/' + videoId, '_self')
  }
  
  useEffect(() => {

    YoutubeApi
      .get(`search?part=id,snippet&q=${IdKeyVideo}&maxResults=3&&key=${API_KEY}`)
      .then((res) => setData(res.data.items));
    if (!search) {
      return (
        <div></div>
      )
    }
  // eslint-disable-next-line
  }, [])

  return (
    <>
      {
        data.map(function (d, idx) {
          return (
            <Container key={d.id.videoId} onClick={() => handleEnterVideo(d.id.videoId)}>
              <Content>
                <IconPlayCircle onClick={() => handleEnterVideo(d.id.videoId)}/>
                <img src={d.snippet.thumbnails.medium.url} alt="" />
              </Content>
            </Container>
          )
        }
        )
      }
    </>
  )
}

export default RelatedVideos;