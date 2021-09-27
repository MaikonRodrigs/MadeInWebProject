import styled from "styled-components";
import { appearFromBottom } from "../../utils/animations";

export const Animation = styled.div`
  animation: ${appearFromBottom} 1s;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const Content = styled.div`
  width: 320px;
  /* overflow: auto; */
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  cursor: pointer;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.text};
  }
`;

export const Thubmnail = styled.div`
  width: 100%;
  height: auto;

  img {
    border-radius: 5px 0 o 5px;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const RowText = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme.colors.primary};
    font-size: var(--mediumtext);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 5px 10px;
    width: 100%;
  }

  > p {
    color: ${(props) => props.theme.colors.text_primary};
    font-size: var(--highlowtext);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    padding: 5px 10px;
    height: 70px;
  }
`;

export const ChannelName = styled.div`
  padding: 5px 10px;
  height: 40px;

  span {
    font-size: var(--highlowtext);
    color: ${(props) => props.theme.colors.text_secondary};
    background: ${(props) => props.theme.colors.primary};
    cursor: pointer;
    padding: 3px 12px;
    border-radius: 10px;
  }
`;
