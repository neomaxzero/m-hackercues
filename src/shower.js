import React, { Component } from "react";
import styled from '@emotion/styled';
import news from "./news.service";
import { CardShower, Loader } from "./Card/e-card";
import Card from "./card";
import PrimaryCard from "./PrimaryCard";
import Center from "./Center";
import { Message } from "./Card/e-elements";

const TabBar = styled("div")`
  display: flex;
  margin: 0 auto 1.25rem;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 10px;
  padding: 4px;
  width: fit-content;
`;

const Tab = styled("button")`
  padding: 8px 24px;
  border: none;
  background: ${({ isActive }) => isActive ? 'rgba(255, 255, 255, 0.14)' : 'transparent'};
  color: ${({ isActive }) => isActive ? 'white' : 'rgba(255, 255, 255, 0.38)'};
  border-radius: 8px;
  font-size: 0.85em;
  font-weight: ${({ isActive }) => isActive ? '700' : '400'};
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  -webkit-tap-highlight-color: transparent;
  transition: background 0.18s, color 0.18s;
`;

const Counter = styled("div")`
  text-align: center;
  color: rgba(255, 255, 255, 0.26);
  font-size: 0.7em;
  margin-bottom: 0.6rem;
  letter-spacing: 0.07em;
  text-transform: uppercase;
`;

export default class Shower extends Component {
  state = {
    data: [],
    loading: true,
    tab: 'feed',
    elementsSeen: JSON.parse(localStorage.getItem("seen") || "[]"),
    elementsDeleted: JSON.parse(localStorage.getItem("deleted") || "[]"),
    elementsStashed: JSON.parse(localStorage.getItem("stashed") || "[]"),
  };

  componentDidMount() {
    news().then((results) => this.setState({ data: results, loading: false }));
  }

  setTab = (tab) => this.setState({ tab });

  saveSeen = (id) => {
    const updated = [...this.state.elementsSeen, id];
    localStorage.setItem("seen", JSON.stringify(updated));
    this.setState({ elementsSeen: updated });
  };

  saveStashed = (id) => {
    const updated = [...this.state.elementsStashed, id];
    localStorage.setItem("stashed", JSON.stringify(updated));
    this.setState({ elementsStashed: updated });
  };

  onDelete = (id) => {
    const updated = [...this.state.elementsDeleted, id];
    localStorage.setItem("deleted", JSON.stringify(updated));
    this.setState({ elementsDeleted: updated });
  };

  onUnsave = (id) => {
    const updated = this.state.elementsStashed.filter(i => i !== id);
    localStorage.setItem("stashed", JSON.stringify(updated));
    this.setState({ elementsStashed: updated });
  };

  render() {
    const { loading, tab, data, elementsSeen, elementsDeleted, elementsStashed } = this.state;

    if (loading) return <Loader>Loading...</Loader>;

    const feedCards = data
      .filter(el => !elementsSeen.includes(el.id))
      .filter(el => !elementsDeleted.includes(el.id))
      .filter(el => !elementsStashed.includes(el.id));

    const savedStories = data.filter(el => elementsStashed.includes(el.id));
    const [firstElement, ...restCards] = feedCards;

    return (
      <div>
        <TabBar>
          <Tab isActive={tab === 'feed'} onClick={() => this.setTab('feed')}>Feed</Tab>
          <Tab isActive={tab === 'saved'} onClick={() => this.setTab('saved')}>
            Saved{elementsStashed.length > 0 ? ` (${elementsStashed.length})` : ''}
          </Tab>
        </TabBar>

        {tab === 'feed' && (
          <React.Fragment>
            {!firstElement && (
              <Center height="65vh">
                <Message>All caught up!</Message>
              </Center>
            )}
            {firstElement && (
              <React.Fragment>
                <Counter>{feedCards.length} {feedCards.length === 1 ? 'story' : 'stories'} left</Counter>
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
              </React.Fragment>
            )}
            <CardShower>
              {restCards.map(el => (
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
          </React.Fragment>
        )}

        {tab === 'saved' && (
          <React.Fragment>
            {savedStories.length === 0 && (
              <Center height="65vh">
                <Message>No saved stories yet</Message>
              </Center>
            )}
            <CardShower>
              {savedStories.map(el => (
                <Card
                  key={el.id}
                  title={el.title}
                  by={el.by}
                  score={el.score}
                  url={el.url}
                  id={el.id}
                  saveSeen={this.saveSeen}
                  onDelete={this.onUnsave}
                  onStashed={this.saveStashed}
                />
              ))}
            </CardShower>
          </React.Fragment>
        )}
      </div>
    );
  }
}
