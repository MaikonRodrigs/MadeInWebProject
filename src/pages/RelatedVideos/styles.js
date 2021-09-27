import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  @media (min-width: 720px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Content = styled.div`
  padding: 18px;
  justify-content: center;
  
  @media (min-width: 720px) {
    display: flex;
    width: 100%;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
