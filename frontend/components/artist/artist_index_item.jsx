import React from 'react';
import { Link } from 'react-router-dom';

const ArtistIndexItem = ({ artist }) => (
  <li className="artist-index-item" >
    <Link to={`/artists/${artist.id}`}>
      <img src={artist.image_url} alt={artist.name} />
      <span> { artist.name } </span>
    </Link>
  </li>
);

export default ArtistIndexItem;
