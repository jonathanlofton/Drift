import { connect } from 'react-redux';
import Search from './search';
import { requestSearchResults, clearSearch } from '../../actions/search_actions';
import { selectAllArtists } from '../../reducers/selectors';

const mapStateToProps = state => ({
  artists: selectAllArtists(state.artists),
  fetching: state.fetching,
});

const mapDispatchToProps = dispatch => ({
  requestSearchResults: search => dispatch(requestSearchResults(search)),
  clearSearch: () => dispatch(clearSearch()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
