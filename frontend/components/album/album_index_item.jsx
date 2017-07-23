import React from 'react';
import { Link } from 'react-router-dom';

class AlbumIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { album } = this.props;
    console.log(this.props)
    return (
      <li className="album-item">
        <Link to={`/music/albums/${album.id}`}>
          <img src={album.image_url} alt={album.name}></img>
          <h1>{album.name}</h1>
        </Link>
      </li>
    )
  }
}

export default AlbumIndexItem;
