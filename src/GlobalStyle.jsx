import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
// Styled component는 자동완성이 안 되는거였다...ㅠㅠ
:root{
    --color-blackpink: #f7a7bb;
}

body{
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
}


`;

export default GlobalStyle;
