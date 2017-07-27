import { connect } from 'react-redux';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { createPlaylistSong } from '../../actions/playlist_song_actions';
import NewPlaylistSongForm from './new_playlist_song_modal_form';

const mapStateToProps = ({ playlist }, ownProps) => ({
  playlist,
  song: ownProps.song,
});


const mapDispatchToProps = dispatch => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  createPlaylistSong: (playlistSong) => dispatch(createPlaylistSong(playlistSong)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewPlaylistSongForm);
