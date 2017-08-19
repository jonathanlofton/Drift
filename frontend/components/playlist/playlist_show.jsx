import React from 'react';
import { withRouter } from 'react-router-dom';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      following: false,
    }

    this.handleClick = this.handleClick.bind(this);
    const playlistId = this.props.match.params.playlistId;
    this.props.fetchPlaylist(playlistId);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    this.followOrNot = this.followOrNot.bind(this);
  }

  handleClick(song){
    this.props.loadPlaylist(this.props.playlist.currentPlaylist.all_songs, song.id, song);
  }

  handleDelete(id) {
    this.props.deletePlaylist(id).then((data) => this.props.history.push('/music/playlists'));
  }

  componentWillReceiveProps(newProps) {
    const currentUrl = this.props.match.params.playlistId;
    const newUrl = newProps.match.params.playlistId;
    if (currentUrl !== newUrl ) {
      this.props.fetchPlaylist(newUrl);
    }
  }


  handleDeleteSong(id) {
    this.props.deletePlaylistSong(id).then(this.setState);
  }

  followOrNot() {
    if (this.props.playlist.currentPlaylist.followed) {
      return <button className="playlist-follow-button" onClick={this.handleFollow}>UnFollow</button>;
    } else {
      return <button className="playlist-follow-button" onClick={this.handleFollow}>Follow</button>;
    }
  }

  handleFollow() {
    const playlistId = this.props.playlist.currentPlaylist.id;
    const userId = this.props.session.currentUser.id;
    const followings = this.props.playlist.currentPlaylist.followings;
    // finding the following id

    let followId;
    followings.forEach(following => {
      if (following.user_id === userId) {
        followId = following.id;
      }
    })

    if (this.state.following) {
      this.setState({ following: false });
      this.props.deleteFollowing(followId).then(this.props.history.push(this.props.location.pathname));
    } else {
      this.setState({ following: true });
      this.props.createFollowing({ following: { playlist_id: playlistId, user_id: userId } });
    }
  }

  render() {
    if (this.props.playlist.currentPlaylist) {
      const playButton = 'https://s3-us-west-2.amazonaws.com/spotifyclone-dev/buttons/play-song-white.svg';
      const { currentPlaylist } = this.props.playlist;
      const { creator } = this.props.playlist.currentPlaylist;
      const { songs } = currentPlaylist;
      return (
        <div className="playlist-show">
          <div className="playlist-info">
            <img src={currentPlaylist.image_url} />
            <div className="playlist-title-and-delete">
              <h1 className="playlist-title">{currentPlaylist.name}</h1>
              <div className="delete-follow">
                { this.followOrNot() }
                <button className="playlist-delete-button" onClick={() => this.handleDelete(currentPlaylist.id)}>Delete</button>
              </div>
              <h1 className="creator-name">By: { creator }</h1>
            </div>
          </div>

          <ul className="playlist-song-index">
            <div className="table-titles">
              <h1 className="table-title">TITLE</h1>
              <h1 className="table-artist">ARTIST</h1>
              <h1 className="created-at">CREATED AT</h1>
            </div>
            { songs.map((song, idx) => (
              <li key={idx} className="playlist-song-item">
                <button onClick={() => this.handleClick(song)}>
                  <img src={playButton} />
                </button>
                <h1 className="song-title">{song.title}</h1>
                <h1 className="artist-name">{song.artist.name}</h1>
                <h1 className="created-at">{song.artist.created_at.slice(0,10)}</h1>
                <button onClick={() => this.handleDeleteSong()} className="delete-button"></button>
              </li>
            ))}
          </ul>
        </div>
      )
    }
    return (
      <div>
        <h1>Playlist Show page</h1>
      </div>
    );
  }
}

export default withRouter(PlaylistShow);
