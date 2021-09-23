import React, { useState } from "react";
import { ChannelName, ColumnViewAndEmbed, CopyEmbed, IconEmbed, IconViewShow, Container, SectionListVideos, RowSearch, Thumb, ColumnVideo, TitleVideo, DescriptionVideo, ViewsVideo } from "./styles";



export const ListVideosSearch = () => {

    return (
        <Container>
            <SectionListVideos>
                <RowSearch>
                    <Thumb />
                    <ColumnVideo>
                        <TitleVideo>
                            <h1>Hello, World! JS TS Enjoy!!!Hello World! JS TS Enjoy!!!Hello</h1>
                        </TitleVideo>
                        <ChannelName>
                            <p>Rockeseat</p>
                        </ChannelName>
                        <DescriptionVideo>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </DescriptionVideo>

                        <ColumnViewAndEmbed>
                            <ViewsVideo>
                                <IconViewShow />
                                <p>2810</p>
                            </ViewsVideo>
                            <CopyEmbed>
                                <IconEmbed />
                                <p>COPY EMBED</p>
                            </CopyEmbed>
                        </ColumnViewAndEmbed>

                    </ColumnVideo>
                </RowSearch>
            </SectionListVideos>
        </Container>
    )
}