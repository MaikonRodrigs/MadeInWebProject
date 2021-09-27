import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html, border-style, #root {
        max-height: 100vh;
    }

    *, button, input {
        border: 0;
        background: none;
        font-family: 'Blinker', sans-serif;

    }
    
    html {
      background: ${(props) => props.theme.colors.background};
    }
    
    ul {
    list-style: none;
  }

    :root {
    --white: #e5e5e5;
    --black: #1A1A1A;
    --gray: #7A7A7A;

    --light_primary: #084b83;
    --light_secondary: #cfd6ea;
    --light_text: #1A1A1A;
    --light_text_secondary: #347fc4;

    --dark_primary: #1A1A1A;
    --dark_secondary: #424342;
    --dark_text: #ececec;
    --dark_text_secondary: #fff;

    --hightitle: 90px;
    --mediumtitle: 60px;
    --lowtitle: 50px;
    --lowtitlemob: 26px; 
    --hightext: 24px;
    --mediumtext: 18px;
    --lowtext: 14px;
    --highlowtext: 12px;
    --icontext: 11px;
  }
`;
