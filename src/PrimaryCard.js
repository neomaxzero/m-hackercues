import React, { useEffect, useRef, useState } from "react";
import CardContainer, { ColorCue } from "./Card/e-card";
import color from "./Card/e-palette";
import styled from '@emotion/styled';
import { css } from 'emotion';
import Center from "./Center";
import mq from "./theme/mediaqueries";

const PrimaryWrap = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.25rem;
  padding: 0 0.5rem;
`;

const Sizer = styled("div")`
  width: 100%;
  max-width: 600px;
  height: 52vh;
  position: relative;
  user-select: none;

  ${mq.medium(css`
    width: 80%;
    height: 40vh;
  `)};
`;

const CardWrap = styled("div")`
  width: 100%;
  height: 100%;
`;

const ScoreDisplay = styled("div")`
  font-size: 3.5em;
  font-weight: 900;
  color: ${({ scoreColor }) => scoreColor};
  line-height: 1;
  letter-spacing: -2px;
  margin-bottom: 0.3rem;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
`;

const TitleDisplay = styled("h3")`
  font-size: 1.3em;
  line-height: 1.4;
  font-weight: 700;
  color: white;
  margin: 0;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
`;

const AuthorDisplay = styled("div")`
  font-size: 0.8em;
  color: rgba(255, 200, 160, 0.65);
  margin-top: 0.65rem;
`;

const SwipeOverlay = styled("div")`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: ${({ side }) => side === 'left' ? 'flex-start' : 'flex-end'};
  padding: 1.5rem;
  pointer-events: none;
  z-index: 10;
  opacity: ${({ opacity }) => opacity};
`;

const SwipeLabel = styled("div")`
  font-size: 2em;
  font-weight: 900;
  padding: 0.25rem 0.75rem;
  border-radius: 8px;
  border: 3px solid ${({ type }) => type === 'skip' ? '#ff5555' : '#44dd88'};
  color: ${({ type }) => type === 'skip' ? '#ff5555' : '#44dd88'};
  transform: rotate(${({ type }) => type === 'skip' ? '10deg' : '-10deg'});
  letter-spacing: 0.05em;
`;

const SwipeHints = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  padding: 0.35rem 0.5rem;
  font-size: 0.62em;
  color: rgba(255, 255, 255, 0.2);
  letter-spacing: 0.05em;
`;

const ActionRow = styled("div")`
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
  width: 100%;
  max-width: 600px;
  padding: 0 0.25rem;
`;

const ActionBtn = styled("button")`
  flex: 1;
  height: 50px;
  border-radius: 25px;
  font-size: 1em;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  font-family: 'Montserrat', sans-serif;
  transition: transform 0.12s, filter 0.12s;

  &:active {
    transform: scale(0.93);
    filter: brightness(0.8);
  }
`;

const SkipBtn = styled(ActionBtn)`
  background: rgba(255, 55, 55, 0.13);
  color: #ff7777;
  border: 1.5px solid rgba(255, 55, 55, 0.3);
`;

const SaveBtn = styled(ActionBtn)`
  background: rgba(50, 210, 100, 0.12);
  color: #55ee99;
  border: 1.5px solid rgba(50, 210, 100, 0.28);
`;

const PrimaryCard = ({ url, score, id, saveSeen, onDelete, onStashed, title, by }) => {
  const [offset, setOffset] = useState(0);
  const touchStartX = useRef(null);
  const touching = useRef(false);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowLeft") onDelete(id);
      if (e.key === "ArrowRight") onStashed(id);
    };
    document.addEventListener("keyup", handler);
    return () => document.removeEventListener("keyup", handler);
  }, [id, onDelete, onStashed]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touching.current = true;
  };

  const onTouchMove = (e) => {
    if (!touching.current) return;
    setOffset(e.touches[0].clientX - touchStartX.current);
  };

  const onTouchEnd = () => {
    if (Math.abs(offset) > 90) {
      if (offset < 0) onDelete(id);
      else onStashed(id);
    }
    setOffset(0);
    touching.current = false;
  };

  const swipeProgress = Math.min(Math.abs(offset) / 90, 1);
  const scoreColor = color(score);

  return (
    <PrimaryWrap>
      <Sizer
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <CardWrap
          style={{
            transform: `translateX(${offset}px) rotate(${offset * 0.04}deg)`,
            transition: touching.current ? 'none' : 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            <CardContainer background={scoreColor} onClick={() => saveSeen(id)}>
              {offset < -20 && (
                <SwipeOverlay side="left" opacity={swipeProgress}>
                  <SwipeLabel type="skip">SKIP</SwipeLabel>
                </SwipeOverlay>
              )}
              {offset > 20 && (
                <SwipeOverlay side="right" opacity={swipeProgress}>
                  <SwipeLabel type="save">SAVE</SwipeLabel>
                </SwipeOverlay>
              )}
              <ColorCue background={scoreColor} />
              <Center vertical height="calc(100% - 60px)">
                <ScoreDisplay scoreColor={scoreColor}>{score}</ScoreDisplay>
                <TitleDisplay>{title}</TitleDisplay>
                <AuthorDisplay>by {by}</AuthorDisplay>
              </Center>
            </CardContainer>
          </a>
        </CardWrap>
      </Sizer>
      <SwipeHints>
        <span>← swipe to skip</span>
        <span>swipe to save →</span>
      </SwipeHints>
      <ActionRow>
        <SkipBtn onClick={() => onDelete(id)}>✕ Skip</SkipBtn>
        <SaveBtn onClick={() => onStashed(id)}>✓ Save</SaveBtn>
      </ActionRow>
    </PrimaryWrap>
  );
};

export default PrimaryCard;
