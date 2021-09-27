import React, { useState } from "react";

import { api } from "../../services/api";

import ResultsSearch from '../ResultsSearch/'
import { Animation, Container, SectionLogo, IconTube, FormSearch, ButtonSend, ResetSearch, Results, ShowResults } from './style';


const HomePage = ({ enterTextSearch }) => {
  const API_KEY = "AIzaSyBCPyu77nYp314vjiyweIGRZF9UAKEb53A";
  const [search, setSearch] = useState('');
  const [date, setDate] = useState([]);

  const submitValue = (event) => {
    event.preventDefault();
    enterTextSearch(search);

    api
      .get(`search?part=id,snippet&q=${search}&maxResults=2&&key=${API_KEY}`)
      .then((res) => setDate(res.data.items));
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

  return (
    <>
      <Container className={date.length > 0 && 'expandedSearch'}>
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
        {date.length > 0 &&
          <Results>
            <p>Mostrando <strong>{date.length}</strong> resultados da sua pesquisa</p>
          </Results>
        }
      </Container>
      <ShowResults>
        {
          date.map(function (d, idx) {
            return (
              <div key={d.id.video}>
                <ResultsSearch
                  url={d.id.video}
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