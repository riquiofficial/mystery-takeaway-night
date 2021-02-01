import { createGlobalStyle } from "styled-components";
import table2 from "../images/table2.jpg";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h1 {
    margin-bottom: 2rem;
  }

  h2 {
    margin: 0.8rem 0;
  }

  body {
    font-family: 'Special Elite', cursive;
    height: 100vh;
    background-image: linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7) ),url(${table2});
    background-color: #cccccc;
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover; 
    color: #d8d8d8;
  }
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 10px;
  }
  label {
    margin: 0 1rem 1rem 0;
  }
  input {
    margin: 0 1rem 1rem 0;
    width: 5rem;
    height: 2rem;
    border-radius: 3px;
    border: none;
  }
  .btn {
    border-radius: 3px;
    box-shadow: 2px 2px 5px #000;
    border: none;
    background-color: orangered;
    color: white;
    transition: all .3s ease-out;
    &:hover {
      transform:translateY(-2px);
    }
  }
  
  @media screen and (max-width: 400px) {
    .content {
      margin: 0;
    }
    
  }
 
`;

export default GlobalStyles;
