import React, { useState } from 'react';


import { Animation, Container, Content, Thubmnail, RowText, ChannelName, Description } from './style';

const ResultsSearch = (props) => {
  const { thumbnail, title, description, channel, url } = props


  const [video, setVideo] = useState('');

  const HandleClickVideo = (url) => {
    
    window.open(url)?.focus()

   }

  return (
    <Container>
      <Animation>
        <Content onClick={HandleClickVideo}>
          <Thubmnail>
            <img src={thumbnail} alt="" />
          </Thubmnail>
          <RowText>
            <h1>{title}</h1>
            <p>{description}</p>
            <ChannelName>
              <span>{channel}</span>
            </ChannelName>
          </RowText>
        </Content>
      </Animation>
    </Container>
  )
}

export default ResultsSearch;