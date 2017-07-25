import { connect } from 'react-redux';
import { createPlaylist } from '../../actions/playlist_actions';
import NewPlaylistModal from './new_playlist_modal';

const mapStateToProps = ({ session }) => ({
  session,
});

const mapDispatchToProps = dispatch => ({
  createPlaylist: playlist => dispatch(createPlaylist({playlist})),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewPlaylistModal);
