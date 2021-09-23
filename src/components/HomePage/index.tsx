import React from "react";
import { Container } from "./styles";

interface Props {
    toggleTheme(): void;
}

export const HomePage = ({toggleTheme}: Props) => {
    return (
        <Container >
            <h1>Hello, World!</h1>
        </Container>
    )
}