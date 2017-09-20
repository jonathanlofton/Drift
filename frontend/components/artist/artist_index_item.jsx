import React from 'react';
import { Link } from 'react-router-dom';

class ArtistIndexItem extends React.Component {

  render() {
    const { artist } = this.props;
    return (
      <li className="artist-index-item" >
        <Link to={`/music/artists/${artist.id}`}>
          <div className="artist-index-item-img">
            <img src={artist.image_url} alt={artist.name} />
          </div>


           <h1 className="artist-name">{ artist.name }</h1>
        </Link>
      </li>
    );
  }
}

export default ArtistIndexItem;
