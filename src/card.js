import React, { Component } from "react";
import CardContainer, { Title, Author, Score, ColorCue } from "./Card/e-card";
import color from "./Card/e-palette";

export default class Card extends Component {
  render() {
    return (
      <a href={this.props.url} target="_blank">
        <CardContainer
          background={color(this.props.score)}
          onClick={() => this.props.saveSeen(this.props.id)}
        >
          <ColorCue background={color(this.props.score)} />
          <Title>{this.props.title}</Title>
          <Score>{this.props.score}</Score>
          <Author>{this.props.by}</Author>
        </CardContainer>
      </a>
    );
  }
}
