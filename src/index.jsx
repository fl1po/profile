import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import Main from './pages/main';

const Global = createGlobalStyle`
  body, #root {
    background-color: #555572;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    height: 100vh;
    width: 100vw;
    font-family: 'Roboto', sans-serif;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <Main />
  </React.StrictMode>,
  document.getElementById('root'),
);
