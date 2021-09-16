import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul{
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    *:focus {
        outline: none;
    }

    body{
        background: #ffffff;
        font-family: 'Lato', sans-serif;
        font-size: 10px;
        overflow-x: hidden;
    }
`;

export default GlobalStyles;
