import { keyframes } from "styled-components";

export const Rotate = keyframes`

  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(720deg);
  }
`;

export const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const appearFromBottom = keyframes`
    from {
    opacity: 0;
    transform: translateY(50px);
  }
    to {
    opacity: 1;
    transform: translateY(0px);
  }
`;
