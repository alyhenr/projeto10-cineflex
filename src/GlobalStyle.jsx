import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    h1,h2,h3,h4,p {
        font-family: 'Roboto';
        font-style: normal;
    }
`;
