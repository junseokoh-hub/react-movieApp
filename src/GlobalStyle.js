import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        list-style: none;
    }
    body {
        font-family: 'Times New Roman', Times, serif;
        background-color: ${(props) => props.theme.bgColor};
        color: #fff;
        height: 110vh;
    }
    a {
        text-decoration-line: none;
        color: ${(props) => props.theme.whiteColor};
    }
`;

export default GlobalStyle;
