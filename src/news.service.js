const BASE_URL = 'https://hacker-news.firebaseio.com/v0/';

const NEWS_TOP_URL = `${BASE_URL}/topstories.json?print=pretty`;
const createItemUrl = id => `${BASE_URL}/item/${id}.json?print=pretty`;

const getTop10news = () =>
  fetch(NEWS_TOP_URL)
    .then(response => response.json())
    .then(top500 => top500.slice(0, 25))
    .then(top10 => top10.map(item => createItemUrl(item)))
    .then(top10urls => {
      const arrayofpromises = top10urls.map(e =>
        fetch(e).then(response => response.json()),
      );
      return Promise.all(arrayofpromises);
    });
export default getTop10news;
