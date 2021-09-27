import React from 'react';

import { Animation, Container, Content, Thubmnail, RowText, ChannelName } from './style';

const ResultsSearch = (props, key) => {
  const { thumbnail, title, description, channel } = props

  return (
    <Container>
      <Animation>
        <Content>
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
    </Container >
  )
}

export default ResultsSearch;