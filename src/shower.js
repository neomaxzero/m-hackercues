import React, { Component } from 'react';
import news from './news.service';
import { CardShower } from './Card/e-card';
import Card from './card';
// by: "rubyn00bie"
// descendants: 93
// id: 17636032
// kids: Array[20]
// score: 270
// time: 1532828694
// title: "Detecting the use of "curl | bash" server-side"
// type: "story"
// url: "https://www.idontplaydarts.com/2016/04/detecting-curl-pipe-bash-server-side/"

export default class Shower extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    news().then(results => this.setState({ data: results }));
  }
  render() {
    if (!this.state.data) return null;
    return (
      <CardShower>
        {this.state.data.map(el => (
          <Card title={el.title} by={el.by} score={el.score} url={el.url} />
        ))}
      </CardShower>
    );
  }
}
