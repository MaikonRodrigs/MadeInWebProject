import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { YoutubeApi } from "../../services/YoutubeApi";
import ResultsSearch from '../ResultsSearch/'
import {
  Animation,
  Container,
  SectionLogo,
  IconTube,
  FormSearch,
  ButtonSend,
  ResetSearch,
  Results,
  ShowResults,
  IconLoading
} from './style';

const HomePage = ({ enterTextSearch }) => {
  const API_KEY = `${process.env.REACT_APP_API_KEY_YT}`
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  let history = useHistory()

  const handleEnterVideo = (videoId) => {
    history.push('/video/' + videoId, '_self')
  }

  const submitValue = (event) => {
    event.preventDefault();
    enterTextSearch(search);

    if (search === '') {
      return;
    }

    YoutubeApi
      .get(`search?part=id,snippet&q=${search}&maxResults=9&&key=${API_KEY}`)
      .then((res) => setData(res.data.items));
    if (!search) {
      return (
        <div></div>
      )
    }

  }

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleReset = () => {
    setSearch('');
  }

  if (!data) {
    return (
      <>
        <IconLoading />
      </>
    )
  }

  if (data === '') {
    return(
      <h1>ENVIADO</h1>
    )
  }

  return (
    <>
      <Container className={data.length > 0 && 'expandedSearch'}>
        <Animation >
          <SectionLogo >
            <IconTube />
            <h1>
              MadeIn<strong>WebTube</strong>.
            </h1>
          </SectionLogo>
          <FormSearch onSubmit={submitValue}>
            <input
              type="text"
              placeholder="Pesquisar"
              value={search}
              onChange={handleChange}
            />
            {search.length > 0 &&
              <ResetSearch onClick={handleReset} />
            }
            <ButtonSend onClick={submitValue} />
          </FormSearch>
        </Animation>
        {data.length > 0 &&
          <Results>
            <p>Mostrando <strong>{data.length}</strong> resultados da sua pesquisa</p>
          </Results>
        }
      </Container>
      <ShowResults>
        {
          data.map(function (d, idx) {
            return (
              <div key={d.id.videoId} onClick={() => handleEnterVideo(d.id.videoId)}>
                <ResultsSearch
                  key={d.id.videoId}
                  title={d.snippet.title}
                  channel={d.snippet.channelTitle}
                  thumbnail={d.snippet.thumbnails.medium.url}
                  description={d.snippet.description}
                />
              </div>
            )
          })
        };
      </ShowResults>
    </>
  )
}

export default HomePage;