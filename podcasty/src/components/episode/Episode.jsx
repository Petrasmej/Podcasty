import React from 'react';

const Episode = ({ num, title, guest }) => (
  <div className="episode">
    <span className="episode__num">{num}</span>
    <div className="episode__body">
      <span className="episode__title">{title}</span>
      <span className="episode__guest">{guest}</span>
    </div>
  </div>
);

export default Episode;
