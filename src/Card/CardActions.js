import React from "react";

import styled from '@emotion/styled'
import { css } from 'emotion'

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
  margin-left: 0.4rem;
`;

const CardActions = ({ onDelete, onStashed }) => (
  <ActionContainer>
    <Btn onClick={onDelete}>del</Btn>
    <Btn onClick={onStashed}>save</Btn>
  </ActionContainer>
);

export default CardActions;
