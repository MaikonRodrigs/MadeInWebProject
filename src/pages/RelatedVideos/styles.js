import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
`;
export const Content = styled.div`
  padding: 13px 20px;
  justify-content: center;
  img {
    width: 100%;
  }
  h1 {
    color: ${(props) => props.theme.colors.primary};
    padding: 20px;
  }
`;
