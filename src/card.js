import React, { Component } from 'react';
import CardContainer, { Title, Author } from './Card/e-card';
import color from './Card/e-palette';

export default class Card extends Component {
  render() {
    return (
      <a href={this.props.url} target="_blank">
        <CardContainer background={color(this.props.score)}>
          <Title>{this.props.title}</Title>
          <Author>{this.props.by}</Author>
        </CardContainer>
      </a>
    );
  }
}
