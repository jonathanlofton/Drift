import { connect } from 'react-redux';
import { fetchArtist } from '../../actions/artist_actions';
import ArtistShow from './artist_show';
import { receiveCurrentSong } from '../../actions/audio_player_actions';

const mapStateToProps = ({ session, artists }) => ({
  artists
});

const mapDispatchToProps = dispatch => ({
  fetchArtist: (id) => dispatch(fetchArtist(id)),
  receiveCurrentSong: song => dispatch(receiveCurrentSong(song)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArtistShow);
