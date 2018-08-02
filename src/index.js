import React from 'react';
import ReactDOM from 'react-dom';
import Shower from './shower';
import Title, { Footer, H, Rest } from './e-layout';

import './styles.css';

function App() {
  return (
    <div className="App">
      <Title>
        <H>H</H>
        <Rest>ackercues</Rest>
      </Title>

      <Shower />
      <a href="https://z3ro.com.ar" target="_blank" rel="noopener noreferrer">
        <Footer>Neomaxzero - z3ro.com.ar</Footer>
      </a>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
