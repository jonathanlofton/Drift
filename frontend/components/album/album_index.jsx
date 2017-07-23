import React from 'react';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchAlbums();
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Albums</h1>
      </div>
    );
  }
}

export default AlbumIndex;
