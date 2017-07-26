import { connect } from 'react-redux';
import { fetchArtist } from '../../actions/artist_actions';
import ArtistShow from './artist_show';
import { receiveCurrentSong } from '../../actions/audio_player_actions';
import { addSongsToPlaylist, loadArtist } from '../../actions/playlist_actions';

const mapStateToProps = ({ session, artists, songs }) => ({
  songs,
  artists,
});

const mapDispatchToProps = dispatch => ({
  fetchArtist: (id) => dispatch(fetchArtist(id)),
  loadArtist: (songIds, songId) => dispatch(loadArtist(songIds, songId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArtistShow);
