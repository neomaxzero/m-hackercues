import styled from 'react-emotion';

const Card = styled('div')`
  border: 3px solid ${props => props.background};
  border-radius: 3px;
  padding: 1em 1em 0;
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
  color: #aaa;
  font-size: 0.4em;
  padding: 0 0 0.4em;
`;

export default Card;
