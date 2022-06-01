import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Montserrat&family=Source+Sans+Pro:wght@300;400&display=swap');
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        list-style-type: style none;
    }
    body {
        font-family: 'Indie Flower', cursive;
        background-color: ${(props) => props.theme.bgColor};
        color: #fff;
        height: 100vh;
    }
`;

export default GlobalStyle;
