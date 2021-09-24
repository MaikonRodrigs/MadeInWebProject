import styled from "styled-components";

import { Playcanvas } from "@styled-icons/simple-icons/Playcanvas";
import { Search } from "@styled-icons/ionicons-sharp/Search";

export const Container = styled.div`
  padding: 10px;
  display: flex;
  height: 100%;
  background: ${(props) => props.theme.colors.primary};
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;   
  margin: 0 auto;
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
  flex-direction: row;
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
