import React from 'react';
import ReactDOM from 'react-dom';
import Shower from './shower';
import Title, { Footer } from './e-layout';

import './styles.css';

function App() {
  return (
    <div className="App">
      <Title>NEWS@YCOMBINATOR</Title>
      <Shower />
      <a href="https://z3ro.com.ar" target="_blank" rel="noopener noreferrer">
        <Footer>Neomaxzero - z3ro.com.ar</Footer>
      </a>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
