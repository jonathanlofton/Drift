import { connect } from 'react-redux';
import { fetchArtists } from '../../actions/artist_actions';
import ArtistIndex from './artist_index';
import { selectAllArtists } from '../../reducers/selectors';

const mapStateToProps = ({ session, artists }) => ({
  currentUser: session.currentUser,
  artists: selectAllArtists(artists),
});

const mapDispatchToProps = dispatch => ({
  fetchArtists: () => dispatch(fetchArtists()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArtistIndex);
