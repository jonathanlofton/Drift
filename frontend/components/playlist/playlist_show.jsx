import React from 'react';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const playlistId = this.props.match.params.playlistId;
    this.props.fetchPlaylist(playlistId);
  }

  render() {
    console.log(this.props)
    if (this.props.playlist.currentPlaylist) {
      const { currentPlaylist } = this.props.playlist;
      return (
        <h1>{currentPlaylist.name}</h1>
      )
    }
    return (
      <div>
        <h1>Playlist Show page</h1>
      </div>
    );
  }
}

export default PlaylistShow;
