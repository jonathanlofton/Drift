import { connect } from 'react-redux';
import { fetchPlaylist } from '../../actions/playlist_actions';
import PlaylistShow from './playlist_show';

const mapStateToProps = ({ session, playlist }) => ({
  playlist,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylist: id => dispatch(fetchPlaylist(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistShow);
