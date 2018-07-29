import React, { Component } from 'react';
import news from './news.service';
import CardContainer, { Title } from './Card/e-card';

// by: "rubyn00bie"
// descendants: 93
// id: 17636032
// kids: Array[20]
// score: 270
// time: 1532828694
// title: "Detecting the use of "curl | bash" server-side"
// type: "story"
// url: "https://www.idontplaydarts.com/2016/04/detecting-curl-pipe-bash-server-side/"

export default class Card extends Component {
  state = {
    data: {},
  };
  componentDidMount() {
    news().then(results => this.setState({ data: results }));
  }
  render() {
    const cardInfo = this.state.data[0];
    if (!cardInfo) return null;
    return (
      <a href={cardInfo.url} target="_blank">
        <CardContainer>
          <Title>{cardInfo.title}</Title>
        </CardContainer>
      </a>
    );
  }
}
