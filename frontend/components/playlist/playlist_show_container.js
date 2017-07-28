import { connect } from 'react-redux';
import { fetchPlaylist } from '../../actions/playlist_actions';
import PlaylistShow from './playlist_show';
import { loadArtist, deletePlaylist } from '../../actions/playlist_actions';
import { deletePlaylistSong } from '../../actions/playlist_song_actions'
import { createFollowing, deleteFollowing } from '../../actions/following_actions';

const mapStateToProps = ({ session, playlist, songs }) => ({
  playlist,
  session,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylist: id => dispatch(fetchPlaylist(id)),
  loadPlaylist: (songIds, songId, songInfo) => dispatch(loadArtist(songIds, songId, songInfo)),
  deletePlaylist: id => dispatch(deletePlaylist(id)),
  deletePlaylistSong: id => dispatch(deletePlaylistSong(id)),
  createFollowing: (playlistId, userId) => dispatch(createFollowing(playlistId, userId)),
  deleteFollowing: followingId => dispatch(deleteFollowing(followingId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistShow);
