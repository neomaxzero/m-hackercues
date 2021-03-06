import React, { Component, useEffect } from "react";
import CardContainer, { Author, ColorCue } from "./Card/e-card";
import color from "./Card/e-palette";
import CardActions from "./Card/CardActions";
import styled from '@emotion/styled'
import { css } from 'emotion'

import Center from "./Center";
import mq from "./theme/mediaqueries";

const PrimaryContainer = styled("div")`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 100px);
`;

const Sizer = styled("div")`
  width: 100%;
  height: 60vh;

  ${mq.medium(css`
    width: 80%;
    height: 40vh;
  `)};
`;


 const Score = styled("div")`
  text-align: center;
  color: #c8e6fc;
  font-size: ${({ big }) => (big ? "3.5em" : "2.4em")};
  font-weight: bold;
  opacity: 0.4;
`;

export const Title = styled("h3")`
  font-size: 1.6em;
`;

const PrimaryCard = ({
  url,
  score,
  id,
  saveSeen,
  onDelete,
  onStashed,
  title,
  by,
}) => {

  useEffect(() => {
    const el = document.addEventListener("keyup", (e) => {
      if (e.key === "ArrowLeft") {
        onDelete(id);
      }

      if (e.key === "ArrowRight") {
        onStashed(id);
      }
    });
    return () => document.removeEventListener("keyup", el);
  }, []);

  return (
    <PrimaryContainer>
      <Sizer>
        <a href={url} target="_blank">
          <CardContainer background={color(score)} onClick={() => saveSeen(id)}>
            <CardActions
              onDelete={(e) => {
                e.stopPropagation();
                e.preventDefault();
                onDelete(id);
              }}
              onStashed={(e) => {
                e.stopPropagation();
                e.preventDefault();
                onStashed(id);
              }}
            />
            <ColorCue background={color(score)} />
            <Center vertical height="calc(100% - 100px)">
              <Score>{score}</Score>
              <Title>{title}</Title>
            </Center>
          </CardContainer>
        </a>
      </Sizer>
    </PrimaryContainer>
  );
};

export default PrimaryCard;
