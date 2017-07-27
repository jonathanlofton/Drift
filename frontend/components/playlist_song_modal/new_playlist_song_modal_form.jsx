import React from 'react';


class NewPlaylistSongForm extends React.Component {
  constructor (props) {
    super(props)
    this.props.fetchPlaylists();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(playlistId) {
    this.props.createPlaylistSong({ playlist_song: { playlist_id: playlistId, song_id: this.props.song.id } });
  }

  render () {
    console.log(this.props)
    const playlists = this.props.playlist.byId;
    return (
      <div className="new-playlist-song-form">
        <form onSubmit={this.handleSubmit} className="modal-form">
          <label className="create-playlist-form-label">
            <h1>Playlists</h1>
            <ul>
              {playlists.map(playlist => (
                <li>
                  <button onClick={() => this.handleClick(playlist.id)}>{playlist.name}</button>
                </li>
              ))}
            </ul>
          </label>
          <input type="submit" className="submit-playlist" placeholder="playlist name" />
        </form>
      </div>
    )
  }
}

export default NewPlaylistSongForm
