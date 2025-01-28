import { createGlobalStyle } from "styled-components";
import Poppins from "../../../src/assets/Poppins-ExtraLight.ttf"; // Import the TTF font file

const GlobalStyles = createGlobalStyle` 
@font-face {
    font-family: "Poppins", sans-serif;
    src: url(${Poppins}) format('truetype');
    font-weight:200;
    /* Additional font properties like font-weight, font-style, etc. */
  }
::-moz-selection {
    background: #2D65F8;
    text-shadow: none;
    color: #ffffff;
}
::selection {
    background: #2D65F8;
    text-shadow: none;
    color: #ffffff;
} 

html,
body {
    font-family: "Poppins", sans-serif!important;
    font-weight: 200!important;
    font-size: 16px; 
    vertical-align: baseline;
    font-weight: 500;
    line-height: 1.6;
    font-weight: 500;
    overflow-x: hidden; 
    background-color: #1c0638!important; /* Your color code */


img {
    height: auto;
}

p {
    margin: 0px;
    line-height: 1.8;  
}


h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0px;
    line-height: 1.35;
    font-family: "Poppins", sans-serif!important;
    font-weight: 200!important;
}

a {
    text-decoration: none !important;
    outline: none;
    transition: all .4s;
}


ul, ol {
    list-style: outside none none;
    margin: 0px;
    padding: 0px;
}

html,
body, p, a{
    font-family: "Poppins", sans-serif!important;
    font-weight: 200!important;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
} 

@media (min-width: 1400px){
    .container{
        max-width: 1200px;
        padding: 0px 20px;
    }
} 

`;

export default GlobalStyles;
