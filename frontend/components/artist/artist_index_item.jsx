import React from 'react';
import { Link } from 'react-router-dom';

class ArtistIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

  }

  render() {
    const { artist } = this.props;
    return (
      <li className="artist-index-item" >
        <Link to={`/music/artists/${artist.id}`}>
          <img src={artist.image_url} alt={artist.name} />
           <h1>{ artist.name } </h1>
        </Link>
      </li>
    );
  }
}

export default ArtistIndexItem;
