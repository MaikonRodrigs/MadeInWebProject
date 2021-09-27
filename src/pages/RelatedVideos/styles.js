import styled from 'styled-components';
import { PlayCircle } from '@styled-icons/bootstrap/PlayCircle'

export const Container = styled.div`
  display: flex;
  

  @media (min-width: 720px) {
    display: flex;
    flex-direction: column;
  }
`;

export const IconPlayCircle = styled(PlayCircle)`
  width: 50px;
  height: 50px;
  margin-left: 130px;
  color: red;
  position: absolute;
  z-index: 99;
  fill: ${(props) => props.theme.colors.text_secondary};
  &:hover {
    fill: red;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px;
  justify-content: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  
  @media (min-width: 720px) {
    display: flex;
    width: 100%;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border: 2px solid ${(props) => props.theme.colors.text};
  }
`;
