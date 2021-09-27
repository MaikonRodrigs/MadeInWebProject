import styled from "styled-components";

import { Playcanvas } from "@styled-icons/simple-icons/Playcanvas";
import { Search } from "@styled-icons/ionicons-sharp/Search";
import { Spinner3 } from "@styled-icons/evil/Spinner3";
import { CloseCircle } from "@styled-icons/ionicons-solid/CloseCircle";

import {
  Rotate,
  appearFromTop,
} from "../../utils/animations";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  padding: 20px;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;

  &.expandedSearch {
    height: 200px;
    position: sticky;
    top: 0;
    background: ${(props) => props.theme.colors.secondary};

    animation: ${appearFromTop} 1s;
  }
`;

export const ShowResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 720px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0px;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    padding: 0px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
    display: grid;
    grid-template-columns: 33% 33% 33%;
    padding: 0px;
    margin: 0 auto;
  }

`;

export const Animation = styled.div`
  animation: ${appearFromTop} 2s;
`;

export const Button = styled.button`
  width: 20px;
  height: 40px;
  background: red;
`;

export const Results = styled.div`
  display: flex;

  p {
    color: ${(props) => props.theme.colors.text};
    font-size: var(--lowtext);
    justify-content: left;
    text-align: left;
  }
`;

export const SectionLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${(props) => props.theme.colors.text};
    font-weight: 300;
    font-size: var(--lowtitlemob);
  }

  strong {
    text-decoration: underline;
  }
`;

export const IconTube = styled(Playcanvas)`
  width: 30px;
  height: 30px;
  fill: ${(props) => props.theme.colors.text};
  margin-right: 5px;
`;

export const FormSearch = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px;
  border-radius: 15px;
  padding: 10px 10px 10px 15px;
  margin-left: 20px;
  background: ${(props) => props.theme.colors.primary};

  input {
    color: ${(props) => props.theme.colors.text_secondary};
    outline: 0;

    width: 200px;
    transition: width 1s ease-in-out;

    &::placeholder {
      color: ${(props) => props.theme.colors.text_secondary};
      font-size: var(--lowtext);
    }
  }
`;

export const ButtonSend = styled(Search)`
  width: 28px;
  height: 28px;
  margin-left: 10px;
  color: ${(props) => props.theme.colors.text_secondary};
  background: red;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const ResetSearch = styled(CloseCircle)`
  width: 20px;
  height: 20px;
  color: #fff;
  margin-left: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const Spinner = styled.div``;

export const IconLoading = styled(Spinner3)`
  width: 45px;
  height: 45px;
  fill: ${(props) => props.theme.colors.primary};
  animation: ${Rotate} 2s linear infinite;
`;
