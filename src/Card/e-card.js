import styled from '@emotion/styled';
import { css } from 'emotion';
import mq from "../theme/mediaqueries";

const Card = styled("div")`
  background: linear-gradient(145deg, #280420, #6a0018);
  border-radius: 10px;
  border: 1px solid rgba(150, 0, 40, 0.5);
  padding: 0.85em 0.85em 0.6em;
  color: white;
  height: 100%;
  position: relative;
  box-shadow: 0 3px 14px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  transition: transform 0.12s;

  &:active {
    transform: scale(0.97);
  }
`;

export const CardShower = styled("div")`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.55em;
  padding-bottom: 1rem;

  ${mq.medium(css`
    grid-template-columns: repeat(4, 1fr);
  `)};
`;

export const Title = styled("h3")`
  font-size: 0.88em;
  line-height: 1.4;
  color: white;
  font-weight: 600;
`;

export const Author = styled("span")`
  display: block;
  color: rgba(255, 200, 160, 0.6);
  font-size: 0.72em;
  margin-top: 0.35em;
`;

export const Score = styled("div")`
  position: absolute;
  right: 0.4rem;
  bottom: -0.2rem;
  font-size: 2em;
  font-weight: 900;
  opacity: 0.2;
  color: white;
`;

export const Loader = styled("div")`
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.85em;
  letter-spacing: 0.08em;
`;

export const ColorCue = styled("div")`
  background-color: ${({ background }) => background};
  height: 4px;
  margin: -0.85em -0.85em 0.75em;
  border-radius: 10px 10px 0 0;
`;

export default Card;
