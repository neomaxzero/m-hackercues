import React, { Component } from "react";
import news from "./news.service";
import { CardShower, Loader } from "./Card/e-card";
import Card from "./card";
import PrimaryCard from "./PrimaryCard";
import Center from "./Center";
import { H2, Message } from "./Card/e-elements";
export default class Shower extends Component {
  state = {
    data: [],
    loading: true,
    elementsSeen: JSON.parse(localStorage.getItem("seen") || "[]"),
    elementsDeleted: JSON.parse(localStorage.getItem("deleted") || "[]"),
    elementsStashed: JSON.parse(localStorage.getItem("stashed") || "[]"),
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

  saveStashed = (id) => {
    localStorage.setItem(
      "stashed",
      JSON.stringify([...this.state.elementsStashed, id])
    );

    this.setState({ elementsStashed: [...this.state.elementsStashed, id] });
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
    const [firstElement, ...restCards] = this.state.data
      .filter((el) => !this.state.elementsSeen.includes(el.id))
      .filter((el) => !this.state.elementsDeleted.includes(el.id))
      .filter((el) => !this.state.elementsStashed.includes(el.id));
    return (
      <div>
        {!firstElement && (
          <Center height="80vh">
            <Message>We are done! for now...</Message>
          </Center>
        )}
        {firstElement && (
          <PrimaryCard
            key={firstElement.id}
            title={firstElement.title}
            by={firstElement.by}
            score={firstElement.score}
            url={firstElement.url}
            id={firstElement.id}
            saveSeen={this.saveSeen}
            onDelete={this.onDelete}
            onStashed={this.saveStashed}
          />
        )}
        <CardShower>
          {restCards.map((el) => (
            <Card
              key={el.id}
              title={el.title}
              by={el.by}
              score={el.score}
              url={el.url}
              id={el.id}
              saveSeen={this.saveSeen}
              onDelete={this.onDelete}
              onStashed={this.saveStashed}
            />
          ))}
        </CardShower>
        {/* <H2>Saved</H2>
        <CardShower>
          {this.state.elementsStashed.map((el) => (
            <Card
              key={el.id}
              title={el.title}
              by={el.by}
              score={el.score}
              url={el.url}
              id={el.id}
              saveSeen={this.saveSeen}
              onDelete={this.onDelete}
              onStashed={this.saveStashed}
            />
          ))}
        </CardShower>
        <H2>Deleted</H2>
        <CardShower>
          {this.state.elementsStashed.map((el) => (
            <Card
              key={el.id}
              title={el.title}
              by={el.by}
              score={el.score}
              url={el.url}
              id={el.id}
              saveSeen={this.saveSeen}
              onDelete={this.onDelete}
              onStashed={this.saveStashed}
            />
          ))} */}
        </CardShower>
        
      </div>
    );
  }
}
