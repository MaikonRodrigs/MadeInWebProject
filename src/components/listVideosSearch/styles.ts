import styled from "styled-components";

import { ViewShow } from "@styled-icons/zondicons/ViewShow";

export const Container = styled.div`
  display: flex;
  max-width: 720px;

  margin-top: 40px;
`;

export const SectionListVideos = styled.div`
  display: flex;

  width: 450px;
  border: 1px solid red;

  @media (min-width: 720px) {
    width: 650px;
  }
`;

export const RowSearch = styled.div`
  display: flex;

  justify-content: space-between;
`;

export const Thumb = styled.div`
  width: 140px;
  height: 140px;
  background: #fff;
  border-radius: 3px;

  display: flex;
  flex-shrink: 0;

  @media (min-width: 720px) {
    width: 250px;
    height: 250px;
  }
`;

export const ColumnVideo = styled.div`
  flex-direction: row;
`;

export const TitleVideo = styled.div`
  width: 320px;

  @media (min-width: 720px) {
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
  width: 320px;
  margin-top: 10px;

  @media (min-width: 720px) {
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
`;
export const IconEmbed = styled.div``;

export const ColumnViewAndEmbed = styled.div`
  display: flex;
  justify-content: space-between;
`;
