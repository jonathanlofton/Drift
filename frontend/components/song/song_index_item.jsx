import React from 'react';
import { Link } from 'react-router-dom';

const SongIndexItem = ({ song }) => (
  <li>
    <Link to={`/songs/${song.id}`}>
      <span>{song.id}</span>
      <span>{song.title}</span>
    </Link>
  </li>
);

export default SongIndexItem;
