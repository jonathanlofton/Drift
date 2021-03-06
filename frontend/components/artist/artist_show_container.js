import { connect } from 'react-redux';
import { fetchArtist } from '../../actions/artist_actions';
import ArtistShow from './artist_show';
import { loadArtist } from '../../actions/playlist_actions';

const mapStateToProps = ({ session, artists, songs }) => ({
  songs,
  artists,
});

const mapDispatchToProps = dispatch => ({
  fetchArtist: (id) => dispatch(fetchArtist(id)),
  loadArtist: (songIds, songId, songInfo) => dispatch(loadArtist(songIds, songId, songInfo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArtistShow);
