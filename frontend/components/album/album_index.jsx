import React from 'react';
import AlbumIndexItem from './album_index_item';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchAlbums();
  }

  render() {
    const { albums } = this.props;
    return (
      <div className="album-content-page">
        <h1 className="album-title">Albums</h1>
        <ul className="album-list">
          {albums.map(album => <AlbumIndexItem key={album.id} album={album} />)}
        </ul>
      </div>

    );
  }
}

export default AlbumIndex;
