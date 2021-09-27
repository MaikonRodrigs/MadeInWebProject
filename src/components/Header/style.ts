import styled, { css, keyframes } from "styled-components";

import { Sun } from "@styled-icons/heroicons-solid/Sun";
import { Moon } from "@styled-icons/heroicons-solid/Moon";
import { Playcanvas } from "@styled-icons/simple-icons/Playcanvas";

import Switch from "react-switch";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  position: sticky;
  top: 0;
  height: 55px;
  background: ${(props) => props.theme.colors.primary};
  padding: 5px;
`;

const AnimationLogo = keyframes`

  from {
  -webkit-transform: rotate(0deg);
  }
  to {
  -webkit-transform: rotate(359deg);
`;

export const IconTube = styled(Playcanvas)`
  width: 25px;
  height: 25px;
  fill: ${(props) => props.theme.colors.text_secondary};
  flex-shrink: 0;
  margin-left: 5px;

    animation: ${AnimationLogo} 5s infinite linear;

  }
`;

export const SwitchToggle = styled(Switch)``;

const SizedIcons = css`
  width: 30px;
  height: 30px;
`;

export const IconLight = styled(Sun)`
  ${SizedIcons}
  color: yellow;
`;

export const IconDark = styled(Moon)`
  ${SizedIcons}
  color: yellow;
`;
