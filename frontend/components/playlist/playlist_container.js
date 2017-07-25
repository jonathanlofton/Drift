import { connect } from 'react-redux';
import { fetchPlaylists } from '../../actions/playlist_actions';
import Playlist from './playlist';

const mapStateToProps = ({ session, playlist }) => ({
  playlists: playlist,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlist);
