import React, { Component } from "react";
import news from "./news.service";
import { CardShower, Loader } from "./Card/e-card";
import Card from "./card";
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
    loading: true,
    elementsSeen: JSON.parse(localStorage.getItem("seen") || "[]"),
    elementsDeleted: JSON.parse(localStorage.getItem("deleted") || "[]"),
  };

  componentDidMount() {
    news().then((results) => this.setState({ data: results, loading: false }));
  }

  saveSeen = (id) => {
    localStorage.setItem(
      "seen",
      JSON.stringify([...this.state.elementsSeen, id])
    );

    this.setState({ elementsSeen: [...this.state.elementsSeen, id] });
  };

  onDelete = (id) => {
    localStorage.setItem(
      "deleted",
      JSON.stringify([...this.state.elementsDeleted, id])
    );

    this.setState({ elementsDeleted: [...this.state.elementsDeleted, id] });
  };

  render() {
    if (!this.state.data.length) return <Loader>Loading...</Loader>;

    return (
      <CardShower>
        {this.state.data
          .filter((el) => !this.state.elementsSeen.includes(el.id))
          .filter((el) => !this.state.elementsDeleted.includes(el.id))
          .map((el) => (
            <Card
              key={el.id}
              title={el.title}
              by={el.by}
              score={el.score}
              url={el.url}
              id={el.id}
              saveSeen={this.saveSeen}
              onDelete={this.onDelete}
            />
          ))}
      </CardShower>
    );
  }
}
