import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import Main from './pages/main';

const Global = createGlobalStyle`
  body, #root {
    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    height: 100vh;
    width: 100vw;
    font-family: 'Roboto';
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <Main />
  </React.StrictMode>,
  document.getElementById('root'),
);
