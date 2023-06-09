import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;

        text-decoration: none;
    }

    h1,h2,h3,h4,p {
        font-weight: 400;
        font-family: 'Roboto';
        font-style: normal;
        text-align: center;
    }
`;
