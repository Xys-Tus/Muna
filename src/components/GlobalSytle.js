import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%;
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgray;
        }
    }
    .iconStyle{
        color: white;
        width: 2rem;
        height: 2rem;
        margin: 0rem 0.5rem;
    }
    
    .navIcon{
        color: gray;
        cursor: pointer;
        margin-right: 2rem;
    }
    .detailIcon{
        color: black;
        cursor: pointer;
        width: 2rem;
        height: 2rem;
    }
     body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }
    /* h2{
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #ff7676
    }
    h3{
        font-size: 1.3rem;
        color: #333;
        padding: 1.5rem 0rem;
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }
    a{
        text-decoration: none;
        color: #333;
    }
    img{
        display: block;
    }
    input{
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
    } */
`;

export default GlobalStyles;
