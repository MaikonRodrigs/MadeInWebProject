import styled, { keyframes } from "styled-components";

import { Playcanvas } from "@styled-icons/simple-icons/Playcanvas";
import { Search } from "@styled-icons/ionicons-sharp/Search";
import { ViewShow } from "@styled-icons/zondicons/ViewShow";
import { Sun } from "@styled-icons/heroicons-solid/Sun";
import { Moon } from "@styled-icons/heroicons-solid/Moon";

import Switch from "react-switch";

export const SwitchToggle = styled(Switch)`
  margin-right: 30px;
  margin-top: 10px;

`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

`;

export const RowIcons = styled.div`

`;

export const IconLight = styled(Sun)`
  width: 30px;
  height: 30px;
  color: yellow;
`;

export const IconDark = styled(Moon)`
  width: 30px;
  height: 30px;
  color: yellow;
`;

export const Container = styled.div`
  padding: 10px;
  display: flex;
  height: 100vh;
  background: ${(props) => props.theme.colors.primary};
`;

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;

  animation: ${appearFromTop} 1.7s;

  p {
    color: ${(props) => props.theme.colors.text};
    font-size: var(--highlowtext);
    margin-top: 5px;
  }
`;

export const SectionLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${(props) => props.theme.colors.text_secondary};
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
  fill: ${(props) => props.theme.colors.text_secondary};
  margin-right: 5px;
`;

export const SectionSearch = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
`;

export const Input = styled.input`
  font-size: 12px;
  width: 20rem;
  height: 2.5rem;
  padding: 10px 15px;
  color: ${(props) => props.theme.colors.text};
  max-width: 30rem;

  ::placeholder {
    color: ${(props) => props.theme.colors.primary};
  }

  :focus,
  input:focus,
  select:focus {
    box-shadow: 0 0 0 0;
    border: none;
    outline: 0;
  }
`;

export const ButtonSend = styled(Search)`
  width: 20px;
  height: 20px;
  color: ${(props) => props.theme.colors.text_secondary};
`;

export const RowButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.text};
  width: 3rem;
  height: 2.5rem;
  border-radius: 0px 5px 5px 0;
  cursor: pointer;
`;

// LIST VIEW STYLED

export const ContainerListVideos = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;

  @media (m-width: 768px) {
  }
`;

export const Results = styled.div`
  p {
    color: ${(props) => props.theme.colors.text_secondary};
    font-size: var(--lowtext);
  }
`;

export const SectionListVideos = styled.div`
  display: flex;
  flex-direction: column;

  width: 450px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 820px;
  }
`;

export const RowSearch = styled.div`
  display: flex;
  justify-content: space-between;

  border: 1px solid var(--white);
  padding: 10px;
  margin: 10px 0;

  @media (min-width: 768px) {
  }
`;

export const Thumb = styled.div`
  width: 140px;
  height: 140px;
  background: #fff;
  border-radius: 3px;

  display: flex;
  flex-shrink: 0;

  img {
    width: 140px;
    height: 140px;
  }

  @media (min-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

export const ColumnVideo = styled.div`
  flex-direction: row;
`;

export const TitleVideo = styled.div`
  width: 300px;

  @media (min-width: 768px) {
    width: 650px;
  }
  h1 {
    color: ${(props) => props.theme.colors.text_secondary};
    font-size: var(--mediumtext);
    padding: 5px 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ChannelName = styled.div`
  margin-left: 11px;
  margin-top: -3px;

  display: inline-block;
  border: 1px solid ${(props) => props.theme.colors.text_secondary};
  border-radius: 10px;
  padding: 2px 10px;

  p {
    font-size: var(--icontext);
    color: ${(props) => props.theme.colors.text_secondary};
    cursor: pointer;
  }
`;

export const DescriptionVideo = styled.div`
  width: 300px;
  margin-top: 10px;

  @media (min-width: 768px) {
    width: 650px;
  }

  p {
    color: ${(props) => props.theme.colors.text_secondary};
    font-size: var(--highlowtext);
    padding: 5px 12px 15px;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const ViewsVideo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 12px;

  p {
    color: ${(props) => props.theme.colors.text_secondary};
    font-size: var(--icontext);
    margin-left: -5px;
  }
`;

export const IconViewShow = styled(ViewShow)`
  width: 14px;
  height: 14px;
  color: ${(props) => props.theme.colors.text_secondary};
  margin: 2px 13px;
`;

export const CopyEmbed = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
  margin-right: 30px;

  p {
    font-size: var(--icontext);
    color: ${(props) => props.theme.colors.text_secondary};
    cursor: pointer;
  }

  > a {
    text-decoration: none;
    text-transform: none;
  }
`;
export const IconEmbed = styled.div``;

export const ColumnViewAndEmbed = styled.div`
  display: flex;
  justify-content: space-between;
`;
