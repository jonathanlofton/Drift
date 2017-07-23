import React from 'react';

class AlbumIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { album } = this.props;
    console.log(this.props)
    return (
      <li className="album-item">
        <h1>{album.name}</h1>
        <img src={album.image_url} alt={album.name}></img>
      </li>
    )
  }
}

export default AlbumIndexItem;
