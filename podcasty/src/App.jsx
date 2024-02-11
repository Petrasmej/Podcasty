import React from 'react';
import Episode from './components/episode/Episode';
import episodes from './data/episodes';

const App = () => (
  <>
    <h1>Podcasty</h1>
    <ul className="episodes-list">
      {episodes.map((episode) => (
        <Episode
          num={episode.num}
          key={episode.num}
          title={episode.title}
          guest={episode.guest}
        />
      ))}
    </ul>
  </>
);

export default App;
