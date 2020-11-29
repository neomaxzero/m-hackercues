import styled from '@emotion/styled'
import { css } from 'emotion'
import mq from "../theme/mediaqueries";

const Card = styled("div")`
  background: linear-gradient(to right, #1f0318, #660014);
  border-radius: 2px;
  border: 1px solid #660014;
  padding: 1em 1em 0;
  color: white;
  height: 100%;
  position: relative;
`;

export const CardShower = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.8em;

  ${mq.medium(css`
    grid-template-columns: repeat(5, 1fr);
  `)};
`;

export const Title = styled("h3")`
  font-size: 0.9em;
`;

export const Author = styled("span")`
  display: inline-block;
  text-align: center;
  color: #ffcbb7;
  font-size: ${({ big }) => (big ? "1em" : "0.4em")};
  padding: 0 0 0.4em;
`;

export const Score = styled("div")`
  text-align: center;
  color: #c8e6fc;
  position: absolute;
  font-size: ${({ big }) => (big ? "3.5em" : "2.4em")};
  right: 0;
  bottom: -10px;
  font-weight: bold;
  opacity: 0.4;
`;

export const Loader = styled("div")`
  text-align: center;
  color: white;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ColorCue = styled("div")`
  background-color: ${({ background }) => background};
  height: 5px;
  margin-bottom: 10px;
`;
export default Card;
