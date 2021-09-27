import styled from "styled-components";
import { Like } from "@styled-icons/evil/Like";
import { ViewShow } from "@styled-icons/zondicons/ViewShow";

export const Container = styled.div`
  height: 100vh;
  max-width: 1366px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
  }
`;

export const Thumbnail = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 10px;

  @media (min-width: 1280px) {
    align-items: flex-start;
    width: 100%;
    height: 700px;
  }

  iframe {
    width: 98vw;
    height: 290px;
    padding: 7px;

    @media (min-width: 1280px) {
      height: 500px;
    }
  }
`;

export const Description = styled.div`
  padding: 10px 20px;

  h1 {
    color: ${(props) => props.theme.colors.primary};
    font-size: var(--mediumtext);
  }
  p {
    margin: 20px 0 20px;
    font-size: var(--lowtext);
  }
`;

export const Statics = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 10px 15px;

  p {
    font-size: var(--lowtext);
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const Views = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconsView = styled(Like)`
  width: 25px;
  height: 25px;
  fill: ${(props) => props.theme.colors.primary};
`;

export const Likeds = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;

  p {
    margin-left: 5px;
  }
`;

export const IconLiked = styled(ViewShow)`
  width: 20px;
  height: 20px;
  fill: ${(props) => props.theme.colors.primary};
`;

export const RelatedVideos = styled.div`
  display: flex;
  flex: 1;
  padding: 0 17px;

  h1 {
    font-size: var(--hightext);
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const LeftColumn = styled.div`
  width: 99%;

  @media (min-width: 1280px) {
    width: 70%;
  }
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 560px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
  }

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 1280) {
    width: 30%;
  }

  h1 {
    font-size: var(--hightext);
    color: ${(props) => props.theme.colors.primary};
    padding: 10px 20px;
    text-align: center;

    @media (min-width: 720px) {
      text-align: left;
    }
  }
`;
