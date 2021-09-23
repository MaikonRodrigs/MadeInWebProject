import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html, border-style, #root {
        max-height: 100vh;
        max-width: 100%;

        width: 100%;
        height: 100%;
    }

    *, button, input {
        border: 0;
        background: none;
        font-family: 'Blinker', sans-serif;
    }
    
    html {
      background: ${props => props.theme.colors.background};
      
 
    }

    :root {
    --primary: #A34AB1;
    --secondary: #C4C4C4;
    --third: #DEBEE3;

    --white: #ffffff;
    --black: #1A1A1A;
    --gray: #7A7A7A;


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