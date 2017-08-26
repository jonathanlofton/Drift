import React from 'react';
import ArtistIndexItem from '../artist/artist_index_item';


class Search extends React.Component {
  constructor (props){
    super(props);
    this.state={
      searchQuery: "",
      artists: this.props.artists
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.fireSearch = this.fireSearch.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ artists: nextProps.artists })
  }

  componentDidMount() {
    this.props.clearSearch();
  }

  handleSearch(e) {
    this.setState({
      searchQuery: e.currentTarget.value,
    });
    clearTimeout(this.idleTimeout);
    this.idleTimeout = setTimeout(this.fireSearch, 500);
  }

  fireSearch() {
    const data = { search: { term: this.state.searchQuery } };
    if (this.state.searchQuery === '') {
      this.props.clearSearch();
    } else {
      this.props.requestSearchResults(data);
    }
  }

  artistview() {
    const { artists } = this.state;
    if (this.props.fetching === true) {
      return <p>Loading</p>;
    }
    return (
      <div className="artist-index">
        <ul className="artist-index-list">
          {artists.map(artist => <ArtistIndexItem key={artist.id} artist={artist} />)}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="search-page">
        <div className="search">
          <input
            ref={(input) => { this.searchInput = input; }}
            onChange={this.handleSearch}
            value={this.state.searchQuery}
            placeholder="Start typing..."
          />

        </div>
        <div className="search-artists">
          {this.artistview()}
        </div>
      </div>
    )
  }
}

export default Search;
