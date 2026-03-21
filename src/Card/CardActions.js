import React from "react";
import styled from '@emotion/styled';

const ActionContainer = styled("div")`
  display: flex;
  justify-content: flex-end;
  gap: 0.4rem;
  margin-bottom: 0.6rem;
`;

const Btn = styled("button")`
  height: 34px;
  min-width: 34px;
  padding: 0 12px;
  border-radius: 17px;
  font-size: 0.85em;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  transition: transform 0.1s, filter 0.1s;

  &:active {
    transform: scale(0.88);
    filter: brightness(0.8);
  }
`;

const DeleteBtn = styled(Btn)`
  background: rgba(255, 60, 60, 0.12);
  color: #ff7777;
  border: 1px solid rgba(255, 60, 60, 0.3);
`;

const SaveBtn = styled(Btn)`
  background: rgba(50, 210, 100, 0.1);
  color: #55ee99;
  border: 1px solid rgba(50, 210, 100, 0.25);
`;

const CardActions = ({ onDelete, onStashed }) => (
  <ActionContainer>
    <DeleteBtn onClick={onDelete}>✕</DeleteBtn>
    <SaveBtn onClick={onStashed}>✓</SaveBtn>
  </ActionContainer>
);

export default CardActions;
