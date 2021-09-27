import styled from "styled-components";

import { Sun } from "@styled-icons/heroicons-solid/Sun";
import { Moon } from "@styled-icons/heroicons-solid/Moon";

import Switch from "react-switch";


export const Container = styled.div`
  position: fixed;
  width: 100%;
  padding: 15px;
  `;

export const RowIcons = styled.div``;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SwitchToggle = styled(Switch)`

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