import React from "react";
import ReactDOM from "react-dom";
import Shower from "./shower";
import Title, { Footer, H, Rest, Main, App as AppStyled } from "./e-layout";

import "./styles.css";

function App() {
  return (
    <AppStyled>
      <Title>
        <H>H</H>
        <Rest>ackercues</Rest>
      </Title>
      <Main>
        <Shower />
      </Main>
      <Footer>
        <a href="https://blog.m4x.io" target="_blank" rel="noopener noreferrer">
          m4x.io
        </a>
      </Footer>
    </AppStyled>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
