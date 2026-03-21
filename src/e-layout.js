import styled from '@emotion/styled';

export const App = styled("div")`
  font-family: "Montserrat", sans-serif;
  background: linear-gradient(to bottom, #1a0215, #5c0010);
  text-align: center;
  padding: 1.25em 1em;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Title = styled("h3")`
  padding: 0 0 1.1em;
  color: white;
  text-align: center;
  font-size: 0.9em;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.04em;
`;

export const H = styled("span")`
  font-weight: 700;
  color: #ff6600;
  font-size: 1.15em;
`;

export const Rest = styled("span")`
  font-weight: 300;
  opacity: 0.5;
  font-size: 1.1em;
`;

export const Footer = styled("footer")`
  text-align: center;
  font-size: 0.72em;
  padding-top: 1.25em;
  color: rgba(255, 255, 255, 0.3);
`;

export const Main = styled("main")`
  flex-grow: 2;
`;

export default Title;
