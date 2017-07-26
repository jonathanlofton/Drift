import { connect } from 'react-redux';
import { fetchPlaylist } from '../../actions/playlist_actions';
import PlaylistShow from './playlist_show';
import { loadArtist, deletePlaylist } from '../../actions/playlist_actions';

const mapStateToProps = ({ session, playlist, songs }) => ({
  playlist,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylist: id => dispatch(fetchPlaylist(id)),
  loadPlaylist: (songIds, songId) => dispatch(loadArtist(songIds, songId)),
  deletePlaylist: id => dispatch(deletePlaylist(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistShow);
