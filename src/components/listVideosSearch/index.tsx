import React, { useState } from "react";
import { Results, ChannelName, ColumnViewAndEmbed, CopyEmbed, IconEmbed, IconViewShow, Container, SectionListVideos, RowSearch, Thumb, ColumnVideo, TitleVideo, DescriptionVideo, ViewsVideo } from "./styles";

import axios from 'axios'

const API_KEY = 'AIzaSyBGjyaOkOAHn4SvsGXWAUjd43O0WxV_9X4';
const API_BASE_URL = 'https://www.googleapis.com/youtube/v3';


export const ListVideosSearch = () => {

    let data: any = [];


    axios.get(`${API_BASE_URL}/search?part=id,snippet&q=Rockeseat&key=${API_KEY}`)
        .then(response => {
            data = response.data.items;
            console.log(data);
        });
    data = [
        {
            "titulo": 'JSX - Incorporar o video no React com Typescript',
            "descricao": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
            "channel": "Rockeseat",
            "views": "19124",
            "embed": "COPY EMBED",
            "id": "as89d7as"
        }, {
            "titulo": 'Java - Incorporar o video no React com Typescript',
            "descricao": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
            "channel": "Rockeseat",
            "views": "91314",
            "embed": "COPY EMBED",
            "id": "as89dasd7as"
        }, {
            "titulo": 'Type - Incorporar o video no React com Typescript',
            "descricao": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
            "channel": "Rockeseat",
            "views": "1214",
            "embed": "COPY EMBED",
            "id": "as89d7123123as"
        },
        {
            "titulo": 'React - Incorporar o video no React com Typescript',
            "descricao": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
            "channel": "Rockeseat",
            "views": "1214",
            "embed": "COPY EMBED",
            "id": "as89d7123123as"
        }
    ]

    return (
        <Container className="loader">
            <SectionListVideos>
                <>
                    {data.length > 0 &&
                        <Results>
                            <p>{data.length} resultados da sua pesquisa</p>
                        </Results>
                    }
                    {
                        data.length > 0 &&
                        data.map((item: any) => {
                            return (
                                <RowSearch key={item.id}>
                                    <p></p>
                                    <Thumb />
                                    <ColumnVideo>
                                        <TitleVideo>
                                            <h1>{item.titulo}</h1>
                                        </TitleVideo>
                                        <ChannelName>
                                            <p>{item.channel}</p>
                                        </ChannelName>
                                        <DescriptionVideo>
                                            <p>{item.descricao}</p>
                                        </DescriptionVideo>
                                        <ColumnViewAndEmbed>
                                            <ViewsVideo>
                                                <IconViewShow />
                                                <p>{item.views}</p>
                                            </ViewsVideo>
                                            <CopyEmbed>
                                                <a href={item.embed}>
                                                    <p>COPY EMBED </p>
                                                </a>
                                            </CopyEmbed>
                                        </ColumnViewAndEmbed>
                                    </ColumnVideo>
                                </RowSearch>
                            );
                        })
                    }
                </>

            </SectionListVideos>
        </Container >
    )
}