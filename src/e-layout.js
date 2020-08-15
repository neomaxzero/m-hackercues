import styled from "react-emotion";

export const App = styled("div")`
  font-family: "Montserrat", sans-serif;
  background: linear-gradient(to bottom, #1f0318, #660014);
  text-align: center;
  padding: 1.5em;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Title = styled("h3")`
  padding: 0 0 1.6em;
  color: white;
  text-align: center;
  font-size: 0.8em;
  font-family: "Roboto", sans-serif;
`;

export const H = styled("span")`
  font-weight: 400;
`;

export const Rest = styled("span")`
  font-weight: 100;
  opacity: 0.5;
  font-size: 1.3em;
`;

export const Footer = styled("footer")`
  text-align: center;
  font-size: 0.8em;
  padding-top: 1em;
  color: #eee;
`;

export const Main = styled("main")`
  flex-grow: 2;
`;

export default Title;
