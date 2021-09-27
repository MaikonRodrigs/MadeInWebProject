import React, { useState, useEffect } from 'react';

import { Container, Content } from './styles';
import { api } from '../../services/api'

const RelatedVideos = () => {
  const API_KEY = "AIzaSyBCPyu77nYp314vjiyweIGRZF9UAKEb53A";
  const [date, setDate] = useState([]);
  const [search, setSearch] = useState('');


  useEffect(() => {

    api
      .get(`search?part=id,snippet&q=Iphone13&maxResults=3&&key=${API_KEY}`)
      .then((res) => setDate(res.data.items));
    if (!search) {
      return (
        <div></div>
      )
    }
  }, [])

  return (
    <>
      {
        date.map(function (d, idx) {
          return (
            <Container key={d.id}>
              <Content>
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