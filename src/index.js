import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';
import Title from './e-layout';

import './styles.css';

function App() {
  return (
    <div className="App">
      <Title>NEWS@YCOMBINATOR</Title>
      <Card />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
