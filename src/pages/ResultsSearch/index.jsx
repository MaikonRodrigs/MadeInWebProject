import React from 'react';


import { Animation, Container, Content, Thubmnail, RowText, ChannelName, Description } from './style';

const ResultsSearch = (props) => {
  const { thumbnail, title, description, channel, url } = props

  return (
    <Container>
      <Animation>
        <Content onClick={url}>
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