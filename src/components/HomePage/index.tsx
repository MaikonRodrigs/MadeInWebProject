import React from "react";
import { ButtonSend, Container, Content, SectionLogo, IconTube, SectionSearch, Input, RowButton} from "./styles";

import { ListVideosSearch } from '../listVideosSearch/index'
interface Props {
    toggleTheme(): void;
}

export const HomePage = ({ toggleTheme }: Props) => {
    return (
        <Container>
            <Content>
                <SectionLogo>
                    <IconTube />
                    <h1>MadeIn<strong>WebTube</strong>.</h1>
                </SectionLogo>
                <SectionSearch>
                    <Input type="text" placeholder="SearchVideo" />
                    <RowButton>
                        <ButtonSend />
                    </RowButton>
                </SectionSearch>
                <ListVideosSearch />
            </Content>
        </Container>
    )
}