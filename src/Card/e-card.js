import styled from 'react-emotion';

const Card = styled('div')`
  background: linear-gradient(to right, #fd746c, #ff9068);
  border-radius: 2px;
  border: 1px solid;
  padding: 1em 1em 0;
  color: white;
  min-height: 4em;
  position: relative;
`;

export const CardShower = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.8em;
`;

export const Title = styled('h3')`
  font-size: 0.9em;
  font-weight: bold;
`;

export const Author = styled('span')`
  display: inline-block;
  text-align: center;
  color: #ffcbb7;
  font-size: 0.4em;
  padding: 0 0 0.4em;
`;

export const Score = styled('div')`
  text-align: center;
  color: #c8e6fc;
  position: absolute;
  font-size: 2.4em;
  right: 0;
  bottom: -10px;
  font-weight: bold;
  opacity: 0.4;
`;

export default Card;
