import React from "react";
import styled, { css } from "react-emotion";

const ActionContainer = styled("div")`
  margin-bottom: 1rem;
  text-align: right;
`;

const Btn = styled("button")`
  border: 1px solid #b2002a;
  padding: 3px 10px;
  color: #b2002a;
  border-radius: 4px;
  background-color: #44000a;
  cursor: pointer;
`;

const CardActions = ({ onDelete }) => (
  <ActionContainer>
    <Btn onClick={onDelete}>del</Btn>
  </ActionContainer>
);

export default CardActions;
